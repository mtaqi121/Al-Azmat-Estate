import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const projectRoot = import.meta.dirname;
const outputRoot = join(projectRoot, 'dist', 'public');

await rm(outputRoot, { recursive: true, force: true });
await mkdir(dirname(outputRoot), { recursive: true });
await mkdir(outputRoot, { recursive: true });
await cp(join(projectRoot, 'index.html'), join(outputRoot, 'index.html'));
for (const file of ['style.css', 'mobile-overrides.css', 'stage2.css', 'script.js']) {
  await cp(join(projectRoot, file), join(outputRoot, file));
}
await cp(join(projectRoot, 'assets'), join(outputRoot, 'assets'), { recursive: true });
await cp(join(projectRoot, 'public'), join(outputRoot, 'public'), { recursive: true });

process.stdout.write('Built static site to dist/public\n');