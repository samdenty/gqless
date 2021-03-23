import { spawn, execSync } from 'child_process';
import fkill from 'fkill';

execSync('pnpm -r exec --filter gqless -- tsc -m commonjs', {
  stdio: 'inherit',
});

execSync('pnpm -r --filter test-utils build', {
  stdio: 'inherit',
});

const processes = ['pnpm dev:start', 'pnpm dev:test'].map((script) => {
  return spawn(script, {
    detached: true,
    shell: true,
  }).pid;
});

process.on('SIGINT', () => {
  fkill(processes, {
    force: true,
  }).catch(() => {});
});

process.on('exit', () => {
  fkill(processes, {
    force: true,
  }).catch(() => {});
});
