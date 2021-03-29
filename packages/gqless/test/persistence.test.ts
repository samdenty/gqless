import { createTestClient, sleep } from './utils';

test('basic functionality', async () => {
  const client1 = await createTestClient();

  expect(client1.backupPersistence()).toMatchInlineSnapshot(
    `"{\\"cache\\":{},\\"normalizedCache\\":{},\\"selections\\":[[],[],\\"v0\\"]}"`
  );

  await client1.resolved(
    () =>
      client1.query.human({
        name: 'asd',
      }).name
  );

  const dataBackup1 = client1.backupPersistence();

  expect(dataBackup1).toMatchInlineSnapshot(
    `"{\\"cache\\":{\\"query\\":{\\"human0\\":{\\"__typename\\":\\"Human\\",\\"id\\":\\"1\\",\\"name\\":\\"asd\\"}}},\\"normalizedCache\\":{\\"Human1\\":{\\"__typename\\":\\"Human\\",\\"id\\":\\"1\\",\\"name\\":\\"asd\\"}},\\"selections\\":[[[\\"0-1-2\\",\\"human0\\",0]],[[\\"human\\",0],[\\"{\\\\\\"name\\\\\\":\\\\\\"asd\\\\\\"}\\",1],[\\"{\\\\\\"name\\\\\\":\\\\\\"String\\\\\\"}\\",2],[\\"human\\",0],[\\"{\\\\\\"name\\\\\\":\\\\\\"asd\\\\\\"}\\",1],[\\"{\\\\\\"name\\\\\\":\\\\\\"String\\\\\\"}\\",2]],\\"v0\\"]}"`
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

  await client2
    .restorePersistence(async () => {
      await sleep(200);
      throw Error();
    })
    .then((value) => {
      expect(value).toBe(false);
    });

  await client2
    .restorePersistence(async () => {
      await sleep(200);
      return dataBackup1;
    })
    .then((value) => {
      expect(value).toBe(true);
    });
});

test('version check', async () => {
  const client1 = await createTestClient();

  const emptyPersistenceV1 = client1.backupPersistence('v1');
  expect(emptyPersistenceV1).toMatchInlineSnapshot(
    `"{\\"version\\":\\"v1\\",\\"cache\\":{},\\"normalizedCache\\":{},\\"selections\\":[[],[],\\"v0\\"]}"`
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
    `"{\\"version\\":\\"v1\\",\\"cache\\":{\\"query\\":{\\"human0\\":{\\"__typename\\":\\"Human\\",\\"id\\":\\"1\\",\\"name\\":\\"asd\\"}}},\\"normalizedCache\\":{\\"Human1\\":{\\"__typename\\":\\"Human\\",\\"id\\":\\"1\\",\\"name\\":\\"asd\\"}},\\"selections\\":[[[\\"0-1-2\\",\\"human0\\",0]],[[\\"human\\",0],[\\"{\\\\\\"name\\\\\\":\\\\\\"asd\\\\\\"}\\",1],[\\"{\\\\\\"name\\\\\\":\\\\\\"String\\\\\\"}\\",2],[\\"human\\",0],[\\"{\\\\\\"name\\\\\\":\\\\\\"asd\\\\\\"}\\",1],[\\"{\\\\\\"name\\\\\\":\\\\\\"String\\\\\\"}\\",2],[\\"human\\",0],[\\"{\\\\\\"name\\\\\\":\\\\\\"asd\\\\\\"}\\",1],[\\"{\\\\\\"name\\\\\\":\\\\\\"String\\\\\\"}\\",2]],\\"v0\\"]}"`
  );

  const client2 = await createTestClient();

  const emptyPersistenceV2 = client2.backupPersistence('v2');

  expect(emptyPersistenceV2).toMatchInlineSnapshot(
    `"{\\"version\\":\\"v2\\",\\"cache\\":{},\\"normalizedCache\\":{},\\"selections\\":[[],[],\\"v0\\"]}"`
  );

  expect(client2.restorePersistence(cacheBackupv1, 'v2')).toBe(false);

  expect(client2.backupPersistence('v2')).toBe(emptyPersistenceV2);

  const wrongBackupVersion = client2.backupPersistence(123 as any);

  expect(wrongBackupVersion).toMatchInlineSnapshot(
    `"{\\"version\\":123,\\"cache\\":{},\\"normalizedCache\\":{},\\"selections\\":[[],[],\\"v0\\"]}"`
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
