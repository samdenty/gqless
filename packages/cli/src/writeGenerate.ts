import fs from 'fs';
import { GraphQLSchema } from 'graphql';
import mkdirp from 'mkdirp';
import { dirname, resolve } from 'path';

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
  if (fs.existsSync(destinationPath)) {
    if (onExistingFileConflict) {
      const existingFile = await fs.promises.readFile(destinationPath, {
        encoding: 'utf-8',
      });
      onExistingFileConflict(existingFile);
    }
    return;
  }

  await fs.promises.writeFile(destinationPath, clientCode, {
    encoding: 'utf-8',
  });
}

async function writeSchemaCode({
  schemaCode,
  destinationPath,
}: {
  schemaCode: string;
  destinationPath: string;
}): Promise<void> {
  const schemaPath = resolve(dirname(destinationPath), './schema.generated.ts');

  if (fs.existsSync(schemaPath)) {
    const existingCode = await fs.promises.readFile(schemaPath, {
      encoding: 'utf-8',
    });

    if (existingCode === schemaCode) return;
  }

  await fs.promises.writeFile(schemaPath, schemaCode, {
    encoding: 'utf-8',
  });
}

export async function writeGenerate(
  schema: GraphQLSchema,
  destinationPath: string,
  generateOptions?: GenerateOptions,
  onExistingFileConflict?: OnExistingFileConflict
) {
  if (!destinationPath.endsWith('.ts')) {
    const err = Error(
      'You have to specify the ".ts" extension, instead, it received: "' +
        destinationPath +
        '"'
    );

    Error.captureStackTrace(err, writeGenerate);

    throw err;
  }

  destinationPath = resolve(destinationPath);

  const [{ clientCode, schemaCode }] = await Promise.all([
    generate(schema, generateOptions),
    mkdirp(dirname(destinationPath)),
  ]);

  await Promise.all([
    writeClientCode({ clientCode, destinationPath, onExistingFileConflict }),
    writeSchemaCode({ schemaCode, destinationPath }),
  ]);

  return destinationPath;
}
