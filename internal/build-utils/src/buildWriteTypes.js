import { resolve } from 'path';
import fsExtra from 'fs-extra';
import { existsSync } from 'fs';

const { outputFile, remove } = fsExtra;

export async function buildWriteTypes(
  /**
   * @type {import("rollup").RollupBuild}
   */
  bundle,
  /**
   * @type {() => void}
   */
  afterFileWrite = () => {},
  /**
   * @type {string}
   */
  cwd = '.'
) {
  const dir = resolve(cwd, 'dist');
  const { output } = await bundle.generate({
    dir,
    sourcemap: true,
  });

  const writingPromise = Promise.all(
    output.map((chunkOrAsset) => {
      if (chunkOrAsset.type === 'asset') {
        const destination = resolve(dir, chunkOrAsset.fileName);

        return outputFile(destination, chunkOrAsset.source).then(
          afterFileWrite
        );
      }
    })
  );

  const duplicatedTypesDist = resolve(dir, './dist');

  if (existsSync(duplicatedTypesDist)) {
    await Promise.all([writingPromise, remove(duplicatedTypesDist)]);
  } else {
    await writingPromise;
  }
}
