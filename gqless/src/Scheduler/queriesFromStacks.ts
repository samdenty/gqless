interface Weight {
  amount$: number
  count$: number
  priority$?: number
}

/**
 * This algorithmn take a stack of queries, and determines
 * what query each stack should use
 * eg.
 *  [App, Profile] => Profile
 *  [App, Profile, Name] => Profile
 *  [App, Navbar] => App
 *  [App, Profile, Name] => App
 * I'm sure this could be optimized further but it was a pain to get working
 */
export const queriesFromStacks = <T extends any>(stacks: T[][]) => {
  const queryWeights = new Map<T, Weight>()

  const getWeights = (query: T) => {
    if (queryWeights.has(query)) {
      return queryWeights.get(query)!
    }

    const weights: Weight = { amount$: 0, count$: 0 }
    queryWeights.set(query, weights)
    return weights
  }

  // Iterate stacks and caculate weights
  stacks.forEach(stack => {
    stack.forEach((query, i) => {
      const amount = stack.length - i

      const weights = getWeights(query)
      weights.count$++
      weights.amount$ += amount
    })
  })

  // Calculate priority
  const sortedWeights = Array.from(queryWeights).sort(
    ([, a], [, b]) => b.count$ - a.count$ || b.amount$ - a.amount$
  )

  // Calculate query priorities
  sortedWeights.forEach(([_, weight], idx) => {
    if (idx > 0) {
      const prevWeight = sortedWeights[idx - 1][1]

      if (
        weight.amount$ / weight.count$ ===
        prevWeight.amount$ / prevWeight.count$
      ) {
        weight.priority$ = prevWeight.priority$
        return
      }
    }

    weight.priority$ = idx
  })

  const finalQueries = new Set()
  const queriesCount = new Map()

  const possibleQueries = stacks.map(stack => {
    let lowestRating: number | undefined
    let possibleQueries: T[] = []

    const stackSize = stack.length - 1
    // Iterate in reverse, as the best possible query
    // is most likely to be at the end
    for (let i = stackSize; i >= 0; i--) {
      const query = stack[i]
      const { priority$ } = queryWeights.get(query)!
      const positionRating = stackSize - i

      // If the positionRating is greater
      // than the lowest recorded rating, then we've already found it
      if (lowestRating !== undefined && positionRating > lowestRating) break

      const rating = priority$! + positionRating

      if (lowestRating === undefined || rating <= lowestRating) {
        // If it's the same rating, add to possible queries
        if (lowestRating === undefined || rating === lowestRating) {
          possibleQueries.push(query)
        } else {
          lowestRating = rating
          possibleQueries = [query]
        }
      }
    }

    if (possibleQueries.length === 1) {
      finalQueries.add(possibleQueries[0])
    } else {
      possibleQueries.forEach(query => {
        queriesCount.set(query, (queriesCount.get(query) || 0) + 1)
      })
    }

    return possibleQueries
  })

  // Works for 80% of cases, but it depends on the order the entries are passed in
  return possibleQueries.map(possibleQueries => {
    let highestCount: number | undefined
    let chosenQuery: T | undefined

    for (const query of possibleQueries) {
      if (finalQueries.has(query)) return query
      const count = queriesCount.get(query)

      if (highestCount === undefined || count > highestCount) {
        highestCount = count
        chosenQuery = query
      }
    }

    finalQueries.add(chosenQuery)

    return chosenQuery!
  })
}
