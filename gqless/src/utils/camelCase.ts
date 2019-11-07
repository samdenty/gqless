const chars: RegExp = /([a-z0-9]+)/gi

export const camelCase = (value: any): any => {
  return value
    .toLowerCase()
    .match(chars)
    .map((word: string, i: number) => {
      // For the first word keep it lowercase
      if (i === 0) {
        return word
      }

      // Rest are supposed to be capitalized
      return word[0].toUpperCase() + word.substr(1)
    })
    .join('')
}
