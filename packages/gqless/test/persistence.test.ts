import { createTestClient } from './utils';

test('basic functionality', async () => {
  const client1 = await createTestClient();

  expect(client1.backupPersistence()).toMatchInlineSnapshot(
    `"{\\"cache\\":\\"{}\\",\\"normalizedCache\\":\\"{}\\",\\"selections\\":\\"[]\\"}"`
  );

  await client1.resolved(
    () =>
      client1.query.human({
        name: 'asd',
      }).name
  );

  const dataBackup1 = client1.backupPersistence();

  expect(dataBackup1).toMatchInlineSnapshot(
    `"{\\"cache\\":\\"{\\\\n  \\\\\\"query\\\\\\": {\\\\n    \\\\\\"human0\\\\\\": {\\\\n      \\\\\\"__typename\\\\\\": \\\\\\"Human\\\\\\",\\\\n      \\\\\\"id\\\\\\": \\\\\\"1\\\\\\",\\\\n      \\\\\\"name\\\\\\": \\\\\\"asd\\\\\\"\\\\n    }\\\\n  }\\\\n}\\",\\"normalizedCache\\":\\"{\\\\\\"Human1\\\\\\":{\\\\\\"__typename\\\\\\":\\\\\\"Human\\\\\\",\\\\\\"id\\\\\\":\\\\\\"1\\\\\\",\\\\\\"name\\\\\\":\\\\\\"asd\\\\\\"}}\\",\\"selections\\":\\"[[\\\\\\"human-{\\\\\\\\\\\\\\"name\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"asd\\\\\\\\\\\\\\"}-{\\\\\\\\\\\\\\"name\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"String\\\\\\\\\\\\\\"}\\\\\\",\\\\\\"human0\\\\\\",0]]\\"}"`
  );

  const client2 = await createTestClient();

  expect(client2.restorePersistence(dataBackup1)).toBe(true);

  expect(client2.cache).toMatchInlineSnapshot(`
      Object {
        "query": Object {
          "human0": Object {
            "__typename": "Human",
            "id": "1",
            "name": "asd",
          },
        },
      }
    `);

  expect(client2.backupPersistence()).toBe(dataBackup1);

  expect(
    client1.query.human({
      name: 'asd',
    }).name
  ).toBe('asd');

  expect(
    client1.query.human({
      name: 'asd',
    }).id
  ).toBe('1');

  expect(
    client2.query.human({
      name: 'asd',
    }).name
  ).toBe('asd');

  expect(
    client2.query.human({
      name: 'asd',
    }).id
  ).toBe('1');
});

test('version check', async () => {
  const client1 = await createTestClient();

  const emptyPersistenceV1 = client1.backupPersistence('v1');
  expect(emptyPersistenceV1).toMatchInlineSnapshot(
    `"{\\"version\\":\\"v1\\",\\"cache\\":\\"{}\\",\\"normalizedCache\\":\\"{}\\",\\"selections\\":\\"[]\\"}"`
  );

  await client1.resolved(
    () =>
      client1.query.human({
        name: 'asd',
      }).name
  );

  expect(
    client1.query.human({
      name: 'asd',
    }).name
  ).toBe('asd');

  const cacheBackupv1 = client1.backupPersistence('v1');

  expect(cacheBackupv1).toMatchInlineSnapshot(
    `"{\\"version\\":\\"v1\\",\\"cache\\":\\"{\\\\n  \\\\\\"query\\\\\\": {\\\\n    \\\\\\"human0\\\\\\": {\\\\n      \\\\\\"__typename\\\\\\": \\\\\\"Human\\\\\\",\\\\n      \\\\\\"id\\\\\\": \\\\\\"1\\\\\\",\\\\n      \\\\\\"name\\\\\\": \\\\\\"asd\\\\\\"\\\\n    }\\\\n  }\\\\n}\\",\\"normalizedCache\\":\\"{\\\\\\"Human1\\\\\\":{\\\\\\"__typename\\\\\\":\\\\\\"Human\\\\\\",\\\\\\"id\\\\\\":\\\\\\"1\\\\\\",\\\\\\"name\\\\\\":\\\\\\"asd\\\\\\"}}\\",\\"selections\\":\\"[[\\\\\\"human-{\\\\\\\\\\\\\\"name\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"asd\\\\\\\\\\\\\\"}-{\\\\\\\\\\\\\\"name\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"String\\\\\\\\\\\\\\"}\\\\\\",\\\\\\"human0\\\\\\",0]]\\"}"`
  );

  const client2 = await createTestClient();

  const emptyPersistenceV2 = client2.backupPersistence('v2');

  expect(emptyPersistenceV2).toMatchInlineSnapshot(
    `"{\\"version\\":\\"v2\\",\\"cache\\":\\"{}\\",\\"normalizedCache\\":\\"{}\\",\\"selections\\":\\"[]\\"}"`
  );

  expect(client2.restorePersistence(cacheBackupv1, 'v2')).toBe(false);

  expect(client2.backupPersistence('v2')).toBe(emptyPersistenceV2);

  const wrongBackupVersion = client2.backupPersistence(123 as any);

  expect(wrongBackupVersion).toMatchInlineSnapshot(
    `"{\\"version\\":123,\\"cache\\":\\"{}\\",\\"normalizedCache\\":\\"{}\\",\\"selections\\":\\"[]\\"}"`
  );

  expect(client2.restorePersistence(wrongBackupVersion, 123 as any)).toBe(
    false
  );

  expect(client2.restorePersistence(emptyPersistenceV2)).toBe(false);

  expect(client2.restorePersistence('[]')).toBe(false);

  expect(client2.backupPersistence('v2')).toBe(emptyPersistenceV2);

  expect(client2.restorePersistence(emptyPersistenceV2, 'v2')).toBe(true);

  expect(client2.backupPersistence('v2')).toBe(emptyPersistenceV2);
});
