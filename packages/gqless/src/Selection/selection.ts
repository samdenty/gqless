export enum SelectionType {
  Query,
  Mutation,
  Subscription,
}

export type SelectionConstructorArgs = {
  id: number;
  key: string | number;
  prevSelection?: Selection;
  type?: SelectionType;
  alias?: string;
  args?: Record<string, unknown>;
  argTypes?: Record<string, string>;
  unions?: string[];
};

export class Selection {
  id: string;

  key: string | number;

  type: SelectionType;

  unions?: string[];

  args?: Readonly<Record<string, unknown>>;
  argTypes?: Readonly<Record<string, string>>;
  alias?: string;

  cachePath: readonly (string | number)[] = [];
  pathString: string;

  selectionsList: readonly Selection[];

  noIndexSelections: readonly Selection[];

  constructor({
    key,
    prevSelection,
    args,
    argTypes,
    type,
    alias,
    unions,
    id,
  }: SelectionConstructorArgs) {
    this.key = key;
    this.args = args;
    this.argTypes = argTypes;
    this.type = type || prevSelection?.type || SelectionType.Query;
    this.alias = alias;
    this.unions = unions;
    this.id = id + '';

    const pathKey = alias || key;

    this.cachePath = prevSelection
      ? [...prevSelection.cachePath, pathKey]
      : [pathKey];

    this.pathString = prevSelection
      ? prevSelection.pathString + '.' + pathKey
      : pathKey.toString();

    const prevSelectionsList = prevSelection?.selectionsList || [];

    this.selectionsList = [...prevSelectionsList, this];

    const prevNoSelectionsList = prevSelection?.noIndexSelections || [];

    this.noIndexSelections =
      typeof key === 'string'
        ? [...prevNoSelectionsList, this]
        : prevNoSelectionsList;

    // If both lists have the same length, we can assume they are the same and save some memory
    if (this.selectionsList.length === this.noIndexSelections.length) {
      this.noIndexSelections = this.selectionsList;
    }
  }
}
