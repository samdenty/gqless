import { Project } from 'ts-morph'

const project = new Project({
  tsConfigFilePath: './tsconfig.json',
})

const langService = project.getLanguageService()

const codegen = project
  .getSourceFile('./graphql/index.ts')!
  .getExportedDeclarations()

const query = codegen.get('query')![0]

const r = langService.findReferences(query)

r.forEach(r => {
  r.getReferences().forEach(r => {
    console.log(
      r.getSourceFile().getFilePath(),
      r.getSourceFile().getLineAndColumnAtPos(r.getTextSpan().getStart())
    )
  })
})
