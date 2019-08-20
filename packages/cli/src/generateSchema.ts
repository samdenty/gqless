import { Codegen, fetchSchema } from '@gqless/schema'

import { QueryFetcher } from 'gqless'
import * as fs from 'fs'
import * as prettier from 'prettier'
import * as mkdirp from 'mkdirp'
import * as path from 'path'

export const generateSchema = async (
  fetchQuery: QueryFetcher,
  options: {
    outputDir: string
    url?: string
    typescript?: boolean
    noComments?: boolean
    noPrettier?: boolean
  }
) => {
  const schema = await fetchSchema(fetchQuery, {
    includeInfo: !options.noComments,
  })
  const codegen = new Codegen(schema, {
    typescript: options.typescript,
    url: options.url,
  })
  const files = codegen.generate()

  const prettierConfig =
    !options.noPrettier && (await prettier.resolveConfig(options.outputDir))

  for (const file of files) {
    const filePath = path.join(options.outputDir, file.path)
    mkdirp.sync(path.dirname(filePath))

    if (!file.overwrite && fs.existsSync(filePath)) continue

    const source = options.noPrettier
      ? file.contents
      : prettier.format(file.contents, {
          ...prettierConfig,
          parser: 'typescript',
        })

    fs.writeFileSync(filePath, source)
  }
}
