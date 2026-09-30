import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const projectRoot = import.meta.dirname;
const outputRoot = join(projectRoot, 'dist', 'public');

await rm(outputRoot, { recursive: true, force: true });
await mkdir(dirname(outputRoot), { recursive: true });
await mkdir(outputRoot, { recursive: true });
await cp(join(projectRoot, 'index.html'), join(outputRoot, 'index.html'));
await cp(join(projectRoot, 'css'), join(outputRoot, 'css'), { recursive: true });
await cp(join(projectRoot, 'js'), join(outputRoot, 'js'), { recursive: true });
await cp(join(projectRoot, 'assets'), join(outputRoot, 'assets'), { recursive: true });
await cp(join(projectRoot, 'public'), join(outputRoot, 'public'), { recursive: true });

process.stdout.write('Built static site to dist/public\n');