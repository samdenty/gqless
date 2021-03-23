import fs from 'fs';
import { resolve } from 'path';
import tmp from 'tmp-promise';

export async function getTempDir({
  initClientFile,
  initSchemaFile,
  clientFileName = './client.ts',
}: {
  initClientFile?: string;
  initSchemaFile?: string;
  clientFileName?: string;
} = {}) {
  const tempDir = await tmp.dir({
    unsafeCleanup: true,
  });

  const clientPath = resolve(tempDir.path, clientFileName);

  const schemaPath = resolve(tempDir.path, './schema.generated.ts');

  if (initSchemaFile != null)
    await fs.promises.writeFile(schemaPath, initSchemaFile);

  if (initClientFile != null)
    await fs.promises.writeFile(clientPath, initClientFile);

  return Object.assign(tempDir, {
    clientPath,
    schemaPath,
  });
}
