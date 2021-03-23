import fs from 'fs';
import path from 'path';
import { createTestApp } from 'test-utils';

import { writeGenerate } from '../src/writeGenerate';
import { getTempDir } from './utils';

const { server, isReady } = createTestApp({
  schema: `
    type Query {
        hello: String!
    }
    `,
  resolvers: {
    Query: {
      hello() {
        return 'hello world';
      },
    },
  },
});

beforeAll(async () => {
  await isReady;
});

test('generates code and writes existing file', async () => {
  const tempDir = await getTempDir({
    initSchemaFile: "console.log('hello world')",
  });

  try {
    const shouldBeIncluded = '// This should be included';

    const firstStats = await fs.promises.stat(tempDir.schemaPath);

    await writeGenerate(server.graphql.schema, tempDir.clientPath, {
      preImport: shouldBeIncluded,
    });

    const secondStats = await fs.promises.stat(tempDir.schemaPath);

    expect(secondStats.mtimeMs).toBeGreaterThan(firstStats.mtimeMs);

    // If the code didn't change, it shouldn't write anything
    await writeGenerate(server.graphql.schema, tempDir.clientPath, {
      preImport: shouldBeIncluded,
    });

    const thirdStats = await fs.promises.stat(tempDir.schemaPath);

    expect(secondStats.mtimeMs).toBe(thirdStats.mtimeMs);

    const generatedContent = await fs.promises.readFile(tempDir.schemaPath, {
      encoding: 'utf-8',
    });

    expect(
      generatedContent
        .split('\n')
        .slice(3)
        .join('\n')
        .startsWith(shouldBeIncluded)
    ).toBeTruthy();

    expect(generatedContent).toMatchSnapshot('overwrite');
  } finally {
    await tempDir.cleanup();
  }
});

test('creates dir, generates code and writes new file', async () => {
  const tempDir = await getTempDir();

  try {
    const targetPath = path.join(
      tempDir.clientPath,
      '/new_path/file-to-generate.ts'
    );

    const shouldBeIncluded = '// This should be included';

    const destinationPath = await writeGenerate(
      server.graphql.schema,
      targetPath,
      {
        preImport: shouldBeIncluded,
      }
    );

    const generatedContentSchema = await fs.promises.readFile(
      path.resolve(path.dirname(destinationPath), './schema.generated.ts'),
      {
        encoding: 'utf-8',
      }
    );

    expect(
      generatedContentSchema
        .split('\n')
        .slice(3)
        .join('\n')
        .startsWith(shouldBeIncluded)
    ).toBeTruthy();

    expect(generatedContentSchema).toMatchSnapshot('new schema');

    const generatedContentClient = await fs.promises.readFile(
      path.resolve(path.dirname(destinationPath), './file-to-generate.ts'),
      {
        encoding: 'utf-8',
      }
    );

    expect(generatedContentClient).toMatchSnapshot('new client');
  } finally {
    await tempDir.cleanup();
  }
});

test('generates code and writes existing file', async () => {
  const tempDir = await getTempDir({
    clientFileName: './client.js',
  });

  try {
    try {
      await writeGenerate(server.graphql.schema, tempDir.clientPath);

      throw Error("shouldn't react");
    } catch (err: unknown) {
      expect(err).toEqual(
        Error(
          `You have to specify the ".ts" extension, instead, it received: "${tempDir.clientPath}"`
        )
      );
    }
  } finally {
    await tempDir.cleanup();
  }
});
