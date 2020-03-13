import { types as t, NodePath } from '@babel/core'
import { Cache, FileAnalysis } from '.'

export class Analysis {
  public file!: FileAnalysis
  public cache!: Cache

  constructor(public parent?: Analysis) {
    if (parent) {
      this.file = parent.file
      this.cache = parent.cache
    }
  }
}
