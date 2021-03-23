/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const npmToYarn = require('npm-to-yarn');

// E.g. global install: 'npm i' -> 'yarn'
const convertYarnToNpm = (yarnCode) => npmToYarn(yarnCode, 'npm');

const transformNode = (node) => {
  node.value = node.value.replace(/--dev/g, '-D');
  const yarnCode = node.value;
  const npmCode = convertYarnToNpm(node.value)
    .replace(/--save-dev/g, '-D')
    .replace(/--save/g, '')
    .trim();
  const pnpmCode = node.value.replace(/yarn/g, 'pnpm');
  return [
    {
      type: 'jsx',
      value:
        `<Tabs defaultValue="npm" ` +
        `values={[
    { label: 'pnpm', value: 'pnpm', },
    { label: 'npm', value: 'npm', },
    { label: 'yarn', value: 'yarn', },
  ]}
>
<TabItem value="pnpm">`,
    },
    {
      type: node.type,
      lang: node.lang,
      value: pnpmCode,
    },
    {
      type: 'jsx',
      value: '</TabItem>\n<TabItem value="npm">',
    },
    {
      type: node.type,
      lang: node.lang,
      value: npmCode,
    },
    {
      type: 'jsx',
      value: '</TabItem>\n<TabItem value="yarn">',
    },
    {
      type: node.type,
      lang: node.lang,
      value: yarnCode,
    },
    {
      type: 'jsx',
      value: '</TabItem>\n</Tabs>',
    },
  ];
};

const matchNode = (node) => node.type === 'code' && node.meta === 'yarn2npm';
const nodeForImport = {
  type: 'import',
  value:
    "import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';",
};

module.exports = () => {
  let transformed = false;
  const transformer = (node) => {
    if (matchNode(node)) {
      transformed = true;
      return transformNode(node);
    }
    if (Array.isArray(node.children)) {
      let index = 0;
      while (index < node.children.length) {
        const result = transformer(node.children[index]);
        if (result) {
          node.children.splice(index, 1, ...result);
          index += result.length;
        } else {
          index += 1;
        }
      }
    }
    if (node.type === 'root' && transformed) {
      node.children.unshift(nodeForImport);
    }
    return null;
  };
  return transformer;
};
