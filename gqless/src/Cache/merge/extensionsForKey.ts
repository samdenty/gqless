import { Extension, DataTrait } from '../../Node'

export const extensionsForKey = (
  extensions: Extension[],
  get: (e: Extension) => Extension | undefined,
  ...nodes: DataTrait[]
) => {
  const keyedExtensions: Extension[] = []

  for (const extension of extensions) {
    const keyExtension = get(extension)
    if (!keyExtension) continue
    keyedExtensions.push(keyExtension)
  }

  for (const node of nodes) {
    const extension = node?.extension$
    if (!extension) continue
    keyedExtensions.push(extension)
  }

  return keyedExtensions
}
