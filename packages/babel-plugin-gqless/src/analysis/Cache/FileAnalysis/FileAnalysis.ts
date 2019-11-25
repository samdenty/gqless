import { types as t, BabelFileResult, traverse } from '@babel/core'
import { Cache } from '../Cache'

export class FileAnalysis {
  private _file?: BabelFileResult
  constructor(public cache: Cache, public path: string) {}

  public getExport(name: string) {
    // traverse(this.file.ast!, {
    //   ExportAllDeclaration(path) {},
    //   ExportDefaultDeclaration(path) {},
    //   ExportNamedDeclaration(path) {},
    //   ExportDeclaration(path) {},
    // })
  }

  public set file(file: BabelFileResult) {
    this._file = file
  }

  public get file() {
    if (!this._file) {
      this._file = this.cache.api.transformFileSync(this.path, {
        ast: true,
      })!
    }

    return this._file
  }
}
