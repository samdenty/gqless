export const uniquify = (
  desiredName: string,
  isTaken: (name: string) => boolean,
  uniquify = (name: string, id: number) => `${name}_${id}`
) => {
  const unique = (id = 1): string => {
    const differentName = uniquify(desiredName, id)

    return isTaken(differentName) ? unique(id + 1) : differentName
  }
  return isTaken(desiredName) ? unique() : desiredName
}
