const path = require('path')

process.chdir(__dirname)
function main() {
  try {
    console.clear()
    Object.keys(require.cache).forEach(key => {
      delete require.cache[key]
    })

    const glob = require('glob')

    console.log(
      glob
        .sync(path.join(__dirname, 'demo/**.js'))
        .map(p => require('@babel/core').transformFileSync(p, {}).code)
    )
  } catch (e) {
    console.error(e)
  }
}

main()

setInterval(() => {}, 1000)
