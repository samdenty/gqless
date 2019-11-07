export const uniquify = (
  desiredName: string,
  isTaken: (name: string) => boolean,
  uniquify = (name: string, id: number) => `${name}${id}`
) => {
  const unique = (id = 2): string => {
    const differentName = uniquify(desiredName, id)

    return isTaken(differentName) ? unique(id + 1) : differentName
  }
  return isTaken(desiredName) ? unique() : desiredName
}
