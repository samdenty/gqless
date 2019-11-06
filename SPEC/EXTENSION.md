# Extensions

You pass an Extension object / fn to a node's constructor.

When a new Accessor is created:

- Adds extension from Node
  - If it's a function, then it calls the extension with the Accessor's data, and creates a new DynamicExtension - with ComputedExtension as parent.

## ComputedExtension -> DynamicExtension

DynamicExtension belongs to an associated Accessor. Has an .onChange method, which will re-create children.

## What they need to do

Not be associated with an Accessor.
