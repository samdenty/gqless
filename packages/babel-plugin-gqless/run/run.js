var stdin = process.stdin

stdin.setRawMode(true)
stdin.resume()
stdin.setEncoding('utf8')
stdin.on('data', function(key) {
  // ctrl-c ( end of text )
  if (key === '\u0003') {
    process.exit()
  }

  main()
})
function main() {
  console.clear()
  Object.keys(require.cache).forEach(key => {
    delete require.cache[key]
  })

  const glob = require('glob')

  console.log(
    glob
      .sync('./demo/**.js')
      .map(p => require('@babel/core').transformFileSync(p, {}).code)
  )
}

main()

setInterval(() => {}, 1000)
