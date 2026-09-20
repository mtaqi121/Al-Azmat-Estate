import { createReadStream, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';

const port = Number(process.env.PORT || 8080);
const root = resolve(process.argv[2] || import.meta.dirname);
const basePath = process.env.BASE_PATH && process.env.BASE_PATH !== '/' ? process.env.BASE_PATH.replace(/\/$/, '') : '';
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
};

const server = createServer((request, response) => {
  const requestPath = decodeURIComponent((request.url || '/').split('?')[0]);
  const relativePath = requestPath.startsWith(basePath) ? requestPath.slice(basePath.length) : requestPath;
  const safePath = normalize(relativePath || '/').replace(/^(\.\.(\/|\\|$))+/, '');
  const candidate = resolve(join(root, safePath === '/' ? 'index.html' : safePath));

  if (!candidate.startsWith(root)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  let filePath = candidate;
  try {
    if (statSync(filePath).isDirectory()) filePath = join(filePath, 'index.html');
  } catch {
    filePath = join(root, 'index.html');
  }

  try {
    const contentType = mimeTypes[extname(filePath)] || 'application/octet-stream';
    response.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'no-cache' });
    createReadStream(filePath).on('error', () => {
      response.writeHead(404);
      response.end('Not found');
    }).pipe(response);
  } catch {
    response.writeHead(404);
    response.end('Not found');
  }
});

server.listen(port, '0.0.0.0', () => {
  process.stdout.write(`AL-AZMAT Estate static site listening on ${port}\n`);
});