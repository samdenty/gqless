import { SelectionManager } from '../Selection';
import { decycle, isPlainObject, retrocycle } from '../Utils';
import { CacheInstance } from './dataCache';

export interface PersistenceHelpers {
  backupPersistence(version?: string): string;
  restorePersistence(backup: string, expectedVersion?: string): boolean;
}

export function createPersistenceHelpers(
  clientCache: CacheInstance,
  selectionManager: SelectionManager
): PersistenceHelpers {
  function backupPersistence(version?: string): string {
    const cache = JSON.stringify(decycle(clientCache.cache), null, 2);
    let normalizedCache: string | undefined;
    if (clientCache.normalizedCache) {
      normalizedCache = JSON.stringify(decycle(clientCache.normalizedCache));
    }
    const selections = JSON.stringify(selectionManager.backupAliases());

    return `{${
      version ? `"version":${JSON.stringify(version)},` : ''
    }"cache":${JSON.stringify(cache)},${
      normalizedCache
        ? `"normalizedCache":${JSON.stringify(normalizedCache)},`
        : ''
    }"selections":${JSON.stringify(selections)}}`;
  }

  function restorePersistence(
    backup: string,
    expectedVersion?: string
  ): boolean {
    const backupObject: {
      cache: string;
      normalizedCache?: string;
      selections: string;
      version?: string;
    } = JSON.parse(backup);

    if (
      isPlainObject(backupObject) &&
      typeof backupObject.cache === 'string' &&
      typeof backupObject.selections === 'string'
    ) {
      if (
        (expectedVersion && !backupObject.version) ||
        (backupObject.version && !expectedVersion)
      ) {
        return false;
      }
      if (expectedVersion && backupObject.version) {
        if (typeof backupObject.version === 'string') {
          if (backupObject.version !== expectedVersion) {
            return false;
          }
        } else {
          return false;
        }
      }

      Object.assign(
        clientCache.cache,
        retrocycle(JSON.parse(backupObject.cache))
      );
      if (typeof backupObject.normalizedCache === 'string') {
        Object.assign(
          clientCache.normalizedCache,
          retrocycle(JSON.parse(backupObject.normalizedCache))
        );
      }
      selectionManager.restoreAliases(JSON.parse(backupObject.selections));

      return true;
    }

    return false;
  }

  return {
    backupPersistence,
    restorePersistence,
  };
}
