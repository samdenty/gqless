#!/usr/bin/env node

import { spawnSync } from 'child_process';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

if (!process.env.GITHUB_TOKEN) {
  console.warn(
    `No GitHub token available in environment variable, skipping GitHub Release`
  );
  process.exit(0);
}

const require = createRequire(
  //@ts-expect-error
  import.meta.url
);

/**
 * @type {{ name: string; version: string } | undefined}
 */
const { name, version } = require(resolve(process.cwd(), 'package.json'));

if (!name || !version) {
  console.error("Error: Couldn't find package.json");
  process.exit(0);
}

/**
 * @type {string}
 */
let body = 'NO CHANGELOG AVAILABLE';

const changelogPath = resolve(process.cwd(), './CHANGELOG.md');
if (existsSync(changelogPath)) {
  const changelog = readFileSync(changelogPath, {
    encoding: 'utf-8',
  });

  if (changelog) {
    const lines = changelog.split(/\r\n|\n/g);

    const versionLine = lines.findIndex((line) =>
      line.startsWith(`## ${version}`)
    );

    if (versionLine !== -1) {
      const prevVersionLine = lines
        .slice(versionLine + 1)
        .findIndex((line) => line.startsWith('## '));

      let newBody;

      if (prevVersionLine !== -1) {
        newBody = lines
          .slice(versionLine, versionLine + 1 + prevVersionLine)
          .join('\n')
          .trim();
      } else {
        newBody = lines.slice(versionLine).join('\n').trim();
      }

      if (newBody) {
        body = newBody;
      }
    }
  }
}

try {
  spawnSync(
    'node',
    [
      resolve(
        fileURLToPath(
          //@ts-expect-error
          import.meta.url
        ),
        '../../node_modules/github-release-cli/lib/index.js'
      ),
      'upload',
      '--owner',
      'gqless',
      '--repo',
      'gqless',
      '--tag',
      `${name}@${version}`,
      '--release-name',
      `${name}@${version}`,
      '--body',
      body,
      '--token',
      process.env.GITHUB_TOKEN,
    ],
    {
      stdio: 'inherit',
    }
  );
} catch (err) {
  console.error(err);
}
