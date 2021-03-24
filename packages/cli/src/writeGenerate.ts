import { existsSync, promises } from 'fs';
import { GraphQLSchema } from 'graphql';
import mkdirp from 'mkdirp';
import { dirname, resolve } from 'path';
import { defaultConfig, gqlessConfigPromise } from './config';

import { generate, GenerateOptions } from './generate';

export type OnExistingFileConflict =
  | ((existingFile: string) => void)
  | undefined;

async function writeClientCode({
  destinationPath,
  clientCode,
  onExistingFileConflict,
}: {
  clientCode: string;
  destinationPath: string;
  onExistingFileConflict: OnExistingFileConflict;
}): Promise<void> {
  if (existsSync(destinationPath)) {
    if (onExistingFileConflict) {
      const existingFile = await promises.readFile(destinationPath, {
        encoding: 'utf-8',
      });
      onExistingFileConflict(existingFile);
    }
    return;
  }

  await promises.writeFile(destinationPath, clientCode, {
    encoding: 'utf-8',
  });
}

function waitFunctions(...fns: Array<() => Promise<unknown>>) {
  return Promise.all(fns.map((fn) => fn()));
}

async function writeSchemaCode({
  schemaCode,
  destinationPath,
  isJavascriptOutput,
  javascriptSchemaCode,
}: {
  schemaCode: string;
  destinationPath: string;
  isJavascriptOutput: boolean;
  javascriptSchemaCode: string;
}): Promise<void> {
  await waitFunctions(
    async () => {
      const schemaPath = resolve(
        dirname(destinationPath),
        isJavascriptOutput ? './schema.generated.d.ts' : './schema.generated.ts'
      );

      if (existsSync(schemaPath)) {
        const existingCode = await promises.readFile(schemaPath, {
          encoding: 'utf-8',
        });

        if (existingCode === schemaCode) return;
      }

      await promises.writeFile(schemaPath, schemaCode, {
        encoding: 'utf-8',
      });
    },
    async () => {
      if (isJavascriptOutput) {
        const schemaPath = resolve(
          dirname(destinationPath),
          './schema.generated.js'
        );

        if (existsSync(schemaPath)) {
          const existingCode = await promises.readFile(schemaPath, {
            encoding: 'utf-8',
          });

          if (existingCode === javascriptSchemaCode) return;
        }

        await promises.writeFile(schemaPath, javascriptSchemaCode, {
          encoding: 'utf-8',
        });
      }
    }
  );
}

export async function writeGenerate(
  schema: GraphQLSchema,
  destinationPath: string,
  generateOptions: GenerateOptions = {},
  onExistingFileConflict?: OnExistingFileConflict
) {
  const isJavascriptOutput =
    generateOptions.javascriptOutput ??
    (await gqlessConfigPromise).config.javascriptOutput ??
    defaultConfig.javascriptOutput;

  if (isJavascriptOutput) {
    if (!destinationPath.endsWith('.js')) {
      const err = Error(
        'You have to specify the ".js" extension, instead, it received: "' +
          destinationPath +
          '"'
      );

      Error.captureStackTrace(err, writeGenerate);

      throw err;
    }
  } else if (!destinationPath.endsWith('.ts')) {
    const err = Error(
      'You have to specify the ".ts" extension, instead, it received: "' +
        destinationPath +
        '"'
    );

    Error.captureStackTrace(err, writeGenerate);

    throw err;
  }

  destinationPath = resolve(destinationPath);

  const [{ clientCode, schemaCode, javascriptSchemaCode }] = await Promise.all([
    generate(schema, generateOptions),
    mkdirp(dirname(destinationPath)),
  ]);

  await Promise.all([
    writeClientCode({ clientCode, destinationPath, onExistingFileConflict }),
    writeSchemaCode({
      schemaCode,
      destinationPath,
      isJavascriptOutput,
      javascriptSchemaCode,
    }),
  ]);

  return destinationPath;
}
