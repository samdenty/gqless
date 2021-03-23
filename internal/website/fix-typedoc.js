const {
  promises: { readFile, writeFile },
} = require('fs');
const { spawnSync } = require('child_process');
const globby = require('globby');

spawnSync('node', ['./node_modules/pretty-quick/bin/pretty-quick.js'], {
  stdio: 'ignore',
});

const encoding = {
  encoding: 'utf-8',
};

async function main() {
  const docFiles = await globby([
    '../../docs/core/api/**/*.md',
    '../../docs/react/api/**/*.md',
  ]);

  await Promise.all(
    docFiles.map(async (docPath) => {
      const docContent = await readFile(docPath, encoding);

      await writeFile(
        docPath,
        docContent.replace(/\/blob\/(.*?)\//g, '/blob/master/'),
        encoding
      );
    })
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
