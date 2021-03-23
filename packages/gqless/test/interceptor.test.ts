import { createInterceptorManager, Interceptor } from '../src/Interceptor';
import { Selection } from '../src/Selection';

describe('base interceptor', () => {
  test('fetchSelections', async () => {
    const interceptor = new Interceptor();

    const selectionA = new Selection({
      key: 'a',
      id: 0,
    });

    const interceptPromiseA = new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(
        reject,
        500,
        Error("Intercept listener didn't work!")
      );

      interceptor.selectionAddListeners.add((selectionArg) => {
        expect(selectionArg).toBe(selectionA);
        clearTimeout(timeout);
        resolve();
      });
    });

    interceptor.addSelection(selectionA);

    await interceptPromiseA;

    expect(interceptor.fetchSelections.has(selectionA)).toBe(true);

    const selectionB = new Selection({
      key: 'b',
      id: 1,
    });

    interceptor.listening = false;

    const interceptPromiseB = new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(resolve, 500);

      interceptor.selectionAddListeners.add((_selectionArg) => {
        clearTimeout(timeout);
        reject(Error("It shouldn't have received the selection it!"));
      });
    });

    interceptor.addSelection(selectionB);

    await interceptPromiseB;

    expect(interceptor.fetchSelections.has(selectionB)).toBe(false);

    interceptor.removeSelections([selectionA]);

    expect(interceptor.fetchSelections.has(selectionA)).toBe(false);
  });

  test('selections cache events', async () => {
    const interceptor = new Interceptor();

    const selectionA = new Selection({
      key: 'a',
      id: 0,
    });

    const interceptPromiseA = new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(
        reject,
        500,
        Error("Intercept listener didn't work!")
      );

      interceptor.selectionCacheListeners.add((selectionArg) => {
        expect(selectionArg).toBe(selectionA);
        clearTimeout(timeout);
        resolve();
      });
    });

    interceptor.addSelectionCache(selectionA);

    await interceptPromiseA;

    expect(interceptor.fetchSelections.has(selectionA)).toBe(false);

    const selectionB = new Selection({
      key: 'b',
      id: 1,
    });

    interceptor.listening = false;

    const interceptPromiseB = new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(resolve, 500);

      interceptor.selectionCacheListeners.add((_selectionArg) => {
        clearTimeout(timeout);
        reject(Error("It shouldn't have received the selection it!"));
      });
    });

    interceptor.addSelectionCache(selectionB);

    await interceptPromiseB;

    expect(interceptor.fetchSelections.has(selectionB)).toBe(false);

    interceptor.removeSelections([selectionA]);

    expect(interceptor.fetchSelections.has(selectionA)).toBe(false);
  });
});

describe('interceptorManager', () => {
  test('works', () => {
    const manager = createInterceptorManager();

    const tempInterceptor = manager.createInterceptor();

    const selectionA = new Selection({
      key: 'a',
      id: 0,
    });

    manager.addSelection(selectionA);

    expect(tempInterceptor.fetchSelections.has(selectionA)).toBe(true);
    expect(manager.globalInterceptor.fetchSelections.has(selectionA)).toBe(
      true
    );

    const selectionB = new Selection({
      key: 'b',
      id: 1,
    });

    manager.removeInterceptor(tempInterceptor);
    manager.addSelection(selectionB);

    expect(tempInterceptor.fetchSelections.has(selectionB)).toBe(false);
    expect(manager.globalInterceptor.fetchSelections.has(selectionB)).toBe(
      true
    );

    const selectionC = new Selection({
      key: 'c',
      id: 0,
    });

    manager.addSelections([selectionC]);

    expect(manager.globalInterceptor.fetchSelections.has(selectionC)).toBe(
      true
    );

    manager.removeSelections([selectionA, selectionB, selectionC]);

    expect(manager.globalInterceptor.fetchSelections.has(selectionA)).toBe(
      false
    );
    expect(manager.globalInterceptor.fetchSelections.has(selectionB)).toBe(
      false
    );
    expect(manager.globalInterceptor.fetchSelections.has(selectionC)).toBe(
      false
    );
  });
});
