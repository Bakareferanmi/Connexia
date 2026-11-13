import { readFile, rm, writeFile } from 'node:fs/promises';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { build } from 'vite';

const output = new URL('../dist/index.html', import.meta.url);
const serverBundle = new URL('../.prerender/App.js', import.meta.url);

try {
  await build({
    build: {
      ssr: 'src/App.tsx',
      outDir: '.prerender',
      copyPublicDir: false,
    },
  });

  const { default: App } = await import(serverBundle.href);
  const html = await readFile(output, 'utf8');
  const root = '<div id="root"></div>';
  if (!html.includes(root)) throw new Error('Missing root in the Vite HTML output.');

  await writeFile(output, html.replace(root, () => `<div id="root">${renderToString(createElement(App))}</div>`));
} finally {
  await rm(new URL('../.prerender', import.meta.url), { recursive: true, force: true });
}
