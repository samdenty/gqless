import { SelectionType } from '../src/Selection/selection';
import {
  createSelectionManager,
  separateSelectionTypes,
} from '../src/Selection/SelectionManager';
import { createTestClient } from './utils';

describe('selection creation', () => {
  const manager = createSelectionManager();

  test('selection with manager and separating types', () => {
    const selectionA = manager.getSelection({
      key: 'a',
      type: SelectionType.Mutation,
    });

    expect(selectionA.key).toBe('a'), expect(selectionA.alias).toBe(undefined);
    expect(selectionA.type).toBe(SelectionType.Mutation);

    expect(selectionA.args).toBe(undefined);
    expect(selectionA.argTypes).toBe(undefined);
    expect(selectionA.noIndexSelections).toEqual([selectionA]);

    expect(selectionA.cachePath).toEqual(['a']);
    expect(selectionA.pathString).toBe('a');

    const selectionB = manager.getSelection({
      key: 'b',
      prevSelection: selectionA,
    });

    expect(selectionB.key).toBe('b');
    expect(selectionB.type).toBe(SelectionType.Mutation);

    expect(selectionB.noIndexSelections).toEqual([selectionA, selectionB]);
    expect(selectionB.cachePath).toEqual(['a', 'b']);
    expect(selectionB.pathString).toBe('a.b');

    const selectionC = manager.getSelection({
      key: 0,
      prevSelection: selectionB,
    });

    expect(selectionC.noIndexSelections).toEqual(selectionB.noIndexSelections);

    const selectionD = manager.getSelection({
      key: 'd',
      prevSelection: selectionC,
      args: {
        a: 1,
      },
      argTypes: {
        a: 'Int!',
      },
    });

    expect(selectionD.cachePath).toEqual(['a', 'b', 0, 'd0']);
    expect(selectionD.pathString).toBe('a.b.0.d0');
    expect(selectionD.alias).toBe('d0');

    const repeatSelectionD = manager.getSelection({
      key: 'd',
      prevSelection: selectionC,
      args: {
        a: 1,
      },
      argTypes: {
        a: 'Int!',
      },
    });

    expect(repeatSelectionD.cachePath).toEqual(['a', 'b', 0, 'd0']);
    expect(repeatSelectionD.pathString).toBe('a.b.0.d0');
    expect(repeatSelectionD.alias).toBe('d0');

    const selectionE = manager.getSelection({
      key: 'e',
      prevSelection: selectionD,
    });

    expect(selectionE.cachePath).toEqual(['a', 'b', 0, 'd0', 'e']);
    expect(selectionE.pathString).toBe('a.b.0.d0.e');

    const selectionF = manager.getSelection({
      key: 'f',
    });

    const selectionG = manager.getSelection({
      key: 'g',
      type: SelectionType.Subscription,
    });

    expect(selectionF.cachePath).toEqual(['f']);
    expect(selectionF.pathString).toBe('f');

    expect(
      separateSelectionTypes([
        selectionA,
        selectionB,
        selectionC,
        selectionD,
        selectionE,
        selectionD,
        repeatSelectionD,
        selectionF,
        selectionG,
      ])
    ).toEqual({
      querySelections: [selectionF],
      mutationSelections: [
        selectionA,
        selectionB,
        selectionC,
        selectionD,
        selectionE,
        selectionD,
        repeatSelectionD,
      ],
      subscriptionSelections: [selectionG],
    });
  });
});

describe('selection builder', () => {
  test('correct selection', async () => {
    const { buildSelection } = await createTestClient();

    const helloSelection = buildSelection('query', 'hello');

    expect(helloSelection.type).toBe(SelectionType.Query);
    expect(helloSelection.pathString).toBe('query.hello');

    const humanSelection = buildSelection('query', 'human', 'name');

    expect(humanSelection.pathString).toBe('query.human0.name');

    const humanArgSelection = buildSelection('query', [
      'human',
      {
        args: { name: 'asd' },
      },
    ]);

    expect(humanArgSelection.pathString).toBe('query.human1');
    expect(humanArgSelection.args).toEqual({
      name: 'asd',
    });
    expect(humanArgSelection.argTypes).toEqual({
      name: 'String',
    });

    const sonsSelection = buildSelection('query', ['human'], 'sons', 'name');

    expect(sonsSelection.pathString).toBe('query.human0.sons.0.name');

    const sons1Selection = buildSelection('query', 'human', 'sons', 1, 'name');

    expect(sons1Selection.pathString).toBe('query.human0.sons.1.name');

    const mutationSelection = buildSelection('mutation', [
      'sendNotification',
      {
        args: { message: 'hello' },
      },
    ]);
    expect(mutationSelection.type).toBe(SelectionType.Mutation);

    expect(mutationSelection.pathString).toBe('mutation.sendNotification0');
    expect(mutationSelection.args).toEqual({
      message: 'hello',
    });
    expect(mutationSelection.argTypes).toEqual({
      message: 'String!',
    });

    const subscriptionSelection = buildSelection(
      'subscription',
      'newNotification'
    );

    expect(subscriptionSelection.type).toBe(SelectionType.Subscription);
    expect(subscriptionSelection.pathString).toBe(
      'subscription.newNotification'
    );
  });

  test('unions', async () => {
    const {
      buildSelection,
      buildAndFetchSelections,
      query,
    } = await createTestClient();

    const selection = buildSelection('query', 'species', 'name');

    expect(selection.pathString).toBe('query.species.0.name');

    const result = await buildAndFetchSelections([selection], 'query');

    expect(result).toMatchInlineSnapshot(`
      Object {
        "species": Array [
          Object {
            "__typename": "Human",
            "name": "default",
          },
          Object {
            "__typename": "Dog",
            "name": "a",
          },
          Object {
            "__typename": "Dog",
            "name": "b",
          },
        ],
      }
    `);

    expect({
      species: query.species.map(({ __typename, name }) => ({
        __typename,
        name,
      })),
    }).toStrictEqual(result);
  });

  test('invalid usage', async () => {
    const { buildSelection } = await createTestClient({
      query: {
        other_new_selection: { __type: 'NewOtherSelection' },
      },
    });

    expect(() => {
      //@ts-expect-error
      buildSelection('error');
    }).toThrowError(
      'Invalid initial selection build argument, specify "query", "mutation" or "subscription"'
    );

    expect(() => {
      buildSelection('query', 'non-existent');
    }).toThrowError(
      'Invalid selection argument at index 0: "non-existent", possible valid keys:'
    );

    expect(() => {
      buildSelection('query', 'other_new_selection');
    }).toThrowError('Invalid schema type');
  });
});
