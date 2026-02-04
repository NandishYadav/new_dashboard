import { spawn } from 'child_process';

// Start json-server
const server = spawn('npm', ['run', 'server'], {
  shell: true,
  stdio: 'inherit'
});

// Start vite
const frontend = spawn('npm', ['run', 'frontend'], {
  shell: true,
  stdio: 'inherit'
});

// Handle cleanup
process.on('SIGINT', () => {
  server.kill();
  frontend.kill();
  process.exit();
});

process.on('SIGTERM', () => {
  server.kill();
  frontend.kill();
  process.exit();
});
