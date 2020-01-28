import { types as t, NodePath, BabelFileResult, traverse } from '@babel/core'
import { Cache } from '../Cache'
import { FunctionAnalysis } from '../FunctionAnalysis'
import { Analysis } from '../Analysis'

export class FileAnalysis extends Analysis {
  private _ast?: t.File

  constructor(cache: Cache, public path: string) {
    super()
    this.file = this
    this.cache = cache
  }

  public getExport(name: string) {
    console.log('analyze export')
    // traverse(this.file.ast!, {
    //   ExportAllDeclaration(path) {},
    //   ExportDefaultDeclaration(path) {},
    //   ExportNamedDeclaration(path) {},
    //   ExportDeclaration(path) {},
    // })
  }

  public set ast(ast: t.File) {
    this._ast = ast
  }

  public get ast() {
    if (!this._ast) {
      this._ast = this.cache.api.transformFileSync(this.path, {
        ast: true,
      })!.ast!
    }

    return this._ast
  }
}
