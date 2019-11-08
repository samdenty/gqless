const { terser } = require('rollup-plugin-terser')

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
          regex: /^_[a-zA-Z]/,
          reserved: ['__typename'],
        },
      },
      ecma: 5,
      toplevel: options.format === 'cjs',
      warnings: true,
    })

    if (terserIndex > -1) {
      config.plugins[terserIndex] = terserPlugin
    } else {
      config.plugins.splice(babelIndex, 0, terserPlugin)
    }
    console.log(config.plugins.map(p => p && p.name))

    return config
  },
}
