- Do we analzye third party libraries?

  - Most third-party libraries are impossible to analyze
  -
  - Yes
    - Do we eval their code?
    - Do we support require/define functions?
      - Do we take a eval-approach?
      - Or do we find common usage patterns
  - No
    - Do we have custom babel transforms for popular modules?
    - Or do we support index.g.ql syntax?
    - index.d.ss
    - index.r.ql

- We're not going to be able to analzye everything

  - We were always going to need a fallback for complex use cases
  - But we can try to analyze the most common use cases
  - We should allow users to write custom babel transforms
  - We should also allow users to manually "write" queries in parts of their app,

    - in the nicest way possible

  - This won't be a problem for SSR, because we can actually execute application
