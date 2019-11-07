import { Config } from './config'
import { Codegen, fetchSchema } from '@gqless/schema'

import { QueryFetcher } from 'gqless'
import * as fs from 'fs'
import * as prettier from 'prettier'
import * as mkdirp from 'mkdirp'
import * as path from 'path'

export const generateSchema = async (
  fetchQuery: QueryFetcher,
  options: Config & {
    outputDir: string
  }
) => {
  const schema = await fetchSchema(fetchQuery, {
    includeInfo: options.comments,
  })
  const codegen = new Codegen(schema, {
    typescript: options.typescript,
    url: options.url,
    headers: options.headers,
  })
  const files = codegen.generate()

  const prettierConfig = await prettier.resolveConfig(options.outputDir)

  for (const file of files) {
    const filePath = path.join(options.outputDir, file.path)
    mkdirp.sync(path.dirname(filePath))

    if (!file.overwrite && fs.existsSync(filePath)) continue

    const source = prettier.format(file.contents, {
      ...prettierConfig,
      parser: 'typescript',
    })

    fs.writeFileSync(filePath, source)
  }
}
