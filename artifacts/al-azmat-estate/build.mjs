import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';

const projectRoot = import.meta.dirname;
const websiteRoot = resolve(projectRoot, '..', '..');
const outputRoot = join(projectRoot, 'dist', 'public');
const supportRoot = join(outputRoot, 'artifacts', 'al-azmat-estate');
const websiteFiles = [
  'index.html',
  'style.css',
  'mobile-overrides.css',
  'stage2.css',
  'script.js',
];
const supportDirectories = ['assets', 'public'];

await rm(outputRoot, { recursive: true, force: true });
await mkdir(dirname(outputRoot), { recursive: true });
await mkdir(outputRoot, { recursive: true });
for (const file of websiteFiles) {
  await cp(join(websiteRoot, file), join(outputRoot, file));
}
await mkdir(supportRoot, { recursive: true });
for (const directory of supportDirectories) {
  await cp(join(projectRoot, directory), join(supportRoot, directory), {
    recursive: true,
  });
}

process.stdout.write('Built static site to dist/public\n');