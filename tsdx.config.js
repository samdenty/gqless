const path = require('path')
const fs = require('fs')
const { terser } = require('rollup-plugin-terser')
const replace = require('@rollup/plugin-replace')

const cacheFileName = path.resolve(__dirname, './mangle.json')
const nameCache = fs.existsSync(cacheFileName)
  ? JSON.parse(fs.readFileSync(cacheFileName, 'utf8'))
  : {}

module.exports = {
  rollup(config, options) {
    const terserIndex = config.plugins.findIndex(p => p && p.name === 'terser')
    const babelIndex = config.plugins.findIndex(p => p && p.name === 'rpt2')

    const terserPlugin = terser({
      sourcemap: true,
      output: { comments: false },
      compress: {
        keep_infinity: true,
        pure_getters: true,
        passes: 10,
      },
      mangle: {
        properties: {
          regex: /\$$/,
          reserved: ['__typename'],
        },
      },
      nameCache,
      ecma: 5,
      toplevel: true,
      warnings: true,
    })

    if (terserIndex > -1) {
      config.plugins[terserIndex] = terserPlugin
    } else {
      config.plugins.splice(babelIndex, 0, terserPlugin)
    }

    config.plugins.push({
      transform(code, id) {
        const { props } = nameCache.props
        const values = {}

        for (const key in props) {
          values[`"${key.substr(1)}"`] = `"${props[key]}"`
        }

        const { transform } = replace({
          values,
          delimiters: ['', ''],
        })

        return transform.call(this, code, id)
      },
    })

    return config
  },
}

process.on('exit', () => {
  fs.writeFileSync(
    cacheFileName,
    JSON.stringify(nameCache, undefined, 2),
    'utf8'
  )
})
