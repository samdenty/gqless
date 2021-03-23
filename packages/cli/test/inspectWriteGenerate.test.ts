import fs from 'fs';
import { createTestApp } from 'test-utils';
import tmp from 'tmp-promise';

import { inspectWriteGenerate } from '../src/inspectWriteGenerate';
import { getTempDir } from './utils';

const { readFile } = fs.promises;
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

let endpoint: string;
beforeAll(async () => {
  await isReady;

  endpoint = (await server.listen(0)) + '/graphql';
});

afterAll(async () => {
  server.close();
});

test('basic inspectWriteGenerate functionality', async () => {
  const tempDir = await getTempDir();

  try {
    await inspectWriteGenerate({
      endpoint,
      destination: tempDir.clientPath,
    });

    expect(
      (
        await readFile(tempDir.clientPath, {
          encoding: 'utf-8',
        })
      ).replace(new RegExp(endpoint, 'g'), '/graphql')
    ).toMatchSnapshot('basic inspectWriteGenerate client');

    expect(
      await readFile(tempDir.schemaPath, {
        encoding: 'utf-8',
      })
    ).toMatchSnapshot('basic inspectWriteGenerate schema');
  } finally {
    await tempDir.cleanup();
  }
});

describe('from file', () => {
  test('generate from graphql schema file', async () => {
    const tempFile = await tmp.file();
    const tempDir = await getTempDir();

    try {
      await fs.promises.writeFile(
        tempFile.path,
        `
      type Query {
        hello: Int!
      }
      `
      );

      await inspectWriteGenerate({
        endpoint: tempFile.path,
        destination: tempDir.clientPath,
      });

      const generatedFileContentClient = await readFile(tempDir.clientPath, {
        encoding: 'utf-8',
      });

      const generatedFileContentSchema = await readFile(tempDir.schemaPath, {
        encoding: 'utf-8',
      });

      expect(
        generatedFileContentClient.replace(
          new RegExp(endpoint, 'g'),
          '/graphql'
        )
      ).toMatchSnapshot('from file client');
      expect(generatedFileContentSchema).toMatchSnapshot('from file schema');
    } finally {
      await tempFile.cleanup();
      await tempDir.cleanup();
    }
  });

  test('non-existant file', async () => {
    const tempDir = await getTempDir();

    try {
      const endpoint = './non-existant-file.gql';
      const result = await inspectWriteGenerate({
        endpoint,
        destination: tempDir.clientPath,
      }).catch((err) => err);

      expect(result).toStrictEqual(
        Error(
          `File "${endpoint}" doesn't exists. If you meant to inspect a GraphQL API, make sure to put http:// or https:// in front of it.`
        )
      );
    } finally {
      tempDir.cleanup();
    }
  });
});

test('specify generateOptions to inspectWriteGenerate', async () => {
  const tempDir = await getTempDir();

  const shouldBeIncluded = '// This should be included';

  try {
    await inspectWriteGenerate({
      endpoint,
      destination: tempDir.clientPath,
      generateOptions: {
        preImport: `
            ${shouldBeIncluded}
            `,
      },
    });

    const generatedFileContentClient = await readFile(tempDir.clientPath, {
      encoding: 'utf-8',
    });

    const generatedFileContentSchema = await readFile(tempDir.schemaPath, {
      encoding: 'utf-8',
    });

    expect(
      generatedFileContentClient.replace(new RegExp(endpoint, 'g'), '/graphql')
    ).toMatchSnapshot('generateOptions client');
    expect(generatedFileContentSchema).toMatchSnapshot(
      'generateOptions schema'
    );

    expect(
      generatedFileContentSchema
        .split('\n')
        .slice(3)
        .join('\n')
        .trim()
        .startsWith(shouldBeIncluded)
    ).toBeTruthy();
  } finally {
    await tempDir.cleanup();
  }
});

describe('inspect headers', () => {
  let endpoint: string;

  const secretToken = 'super secret token';

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
    context: (req, _reply) => {
      if (req.headers.authorization !== secretToken) {
        throw Error('Unauthorized!');
      }
      return {};
    },
  });

  beforeAll(async () => {
    await isReady;
    endpoint = (await server.listen(0)) + '/graphql';
  });

  afterAll(async () => {
    await server.close();
  });

  test('specify headers to inspectWriteGenerate', async () => {
    const tempDir = await getTempDir();

    const shouldBeIncluded = '// This should be included';

    try {
      await inspectWriteGenerate({
        endpoint,
        destination: tempDir.clientPath,
        headers: {
          authorization: secretToken,
        },
        generateOptions: {
          preImport: shouldBeIncluded,
        },
      });

      const generatedFileContent = await readFile(tempDir.schemaPath, {
        encoding: 'utf-8',
      });

      expect(generatedFileContent).toMatchSnapshot('specify headers');

      expect(
        generatedFileContent
          .split('\n')
          .slice(3)
          .join('\n')
          .startsWith(shouldBeIncluded)
      ).toBeTruthy();
    } finally {
      await tempDir.cleanup();
    }
  });

  test('should throw if headers are not specified when required by server', async () => {
    const tempDir = await getTempDir({
      initClientFile: '',
    });

    try {
      await expect(
        inspectWriteGenerate({
          endpoint,
          destination: tempDir.clientPath,
        })
      ).rejects.toEqual({
        message: 'Unauthorized!',
      });

      const generatedFileContent = await readFile(tempDir.clientPath, {
        encoding: 'utf-8',
      });

      expect(generatedFileContent).toBe('');
    } finally {
      await tempDir.cleanup();
    }
  });
});

describe('CLI behavior', () => {
  test('final message', async () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const tempDir = await getTempDir();

    try {
      await inspectWriteGenerate({
        endpoint,
        destination: tempDir.clientPath,
        cli: true,
      });

      expect(spy).toHaveBeenCalledTimes(1);

      expect(spy).toHaveBeenLastCalledWith(
        'Code generated successfully at ' + tempDir.clientPath
      );

      expect(
        (
          await readFile(tempDir.clientPath, {
            encoding: 'utf-8',
          })
        ).replace(new RegExp(endpoint, 'g'), '/graphql')
      ).toMatchSnapshot('basic functionality with cli final messsage');

      expect(
        await readFile(tempDir.schemaPath, {
          encoding: 'utf-8',
        })
      ).toMatchSnapshot('basic functionality with cli final messsage - schema');
    } finally {
      await tempDir.cleanup();
      spy.mockRestore();
    }
  });
});

test('detect client config change between files', async () => {
  const tempDir = await getTempDir();

  let n = 0;
  const spy = jest.spyOn(console, 'warn').mockImplementation((message) => {
    expect(message).toMatchSnapshot('Warning=' + ++n);
  });

  try {
    await inspectWriteGenerate({
      endpoint,
      destination: tempDir.clientPath,
      generateOptions: {
        react: false,
        subscriptions: false,
      },
    });

    expect(spy).toBeCalledTimes(0);

    await inspectWriteGenerate({
      endpoint,
      destination: tempDir.clientPath,
      generateOptions: {
        react: true,
        subscriptions: true,
      },
    });

    expect(spy).toBeCalledTimes(2);
  } finally {
    await tempDir.cleanup();
    spy.mockRestore();
  }
});
