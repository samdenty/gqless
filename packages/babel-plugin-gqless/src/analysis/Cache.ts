import { FileAnalysis } from '.'

export class Cache {
  public files = new Map<string, FileAnalysis>()

  constructor(private api: typeof import('@babel/core')) {}

  public getPath(path: string) {
    if (this.files.has(path)) {
      return this.files.get(path)!
    }

    const analysis = new FileAnalysis(this, path)
    this.files.set(path, analysis)
    return analysis
  }

  public transform(path: string) {
    return this.api.transformFileSync(path, {
      ast: true,
    })!.ast!
  }
}
