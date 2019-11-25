import { FileAnalysis } from './FileAnalysis'

export class Cache {
  private files = new Map<string, FileAnalysis>()

  constructor(public api: typeof import('@babel/core')) {}

  public getPath(path: string) {
    if (this.files.has(path)) {
      return this.files.get(path)!
    }

    const analysis = new FileAnalysis(this, path)
    this.files.set(path, analysis)
    return analysis
  }
}
