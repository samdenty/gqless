import {
  TypeGuards,
  Project,
  PropertySignature,
  VariableDeclaration,
} from 'ts-morph'
import { invariant } from '@gqless/utils'

const project = new Project({
  tsConfigFilePath: './tsconfig.json',
})

console.log(project.getAmbientModules().map(m => m.getName()))

if (false) {
  const langService = project.getLanguageService()

  const file = project.getSourceFile('./src/graphql/index.ts')!

  const declarations = file.getExportedDeclarations()

  Object.assign(global, { langService, file, declarations, project })

  // project.getDirectories()[0]
  {
    const query = declarations.get('query')![0]
    invariant(TypeGuards.isVariableDeclaration(query))

    const references = query
      .findReferences()
      .map(r => r.getReferences())
      .flat()

    Object.assign(global, { query, references })

    for (const reference of references) {
      const node = reference.getNode()

      const file = reference.getSourceFile()

      console.log(
        file.getFilePath(),
        file.getLineAndColumnAtPos(reference.getTextSpan().getStart())
      )
    }
  }

  // {
  //   const Query = declarations.get('Query')![0]
  //   const type = Query.getType()
  //   const properties = type.getProperties()
  //   console.time()
  //   for (const property of properties) {
  //     const declaration = property.getDeclarations()[0] as PropertySignature

  //     declaration.findReferences().forEach(r => {
  //       r.getReferences().forEach(r => {
  //         const file = r.getSourceFile()
  //         const { line, column } = file.getLineAndColumnAtPos(
  //           r.getTextSpan().getStart()
  //         )

  //         console.log(property.getName(), file.getFilePath(), `${line}:${column}`)
  //       })
  //     })
  //   }
  //   console.timeEnd()
  //   // const user = type.getProperty('user')

  //   // Object.assign(global, { Query, type, user, properties })

  //   // const r = langService.findReferences(Query)
  // }
}
setInterval(() => {}, 1000)
