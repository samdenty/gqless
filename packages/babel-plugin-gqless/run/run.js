const path = require('path')
const { spawn } = require('child_process')
var stdin = process.stdin

// stdin.setRawMode(true)
// stdin.resume()
// stdin.setEncoding('utf8')
// stdin.on('data', function(key) {
//   // ctrl-c ( end of text )
//   if (key === '\u0003') {
//     process.exit()
//   }

//   const subprocess = spawn('node', process.argv.slice(1), {
//     detached: true,
//     stdio: 'inherit',
//   })

//   subprocess.unref()
// main()
// })
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
        .sync('./demo/**.js')
        .map(p => require('@babel/core').transformFileSync(p, {}).code)
    )
  } catch (e) {
    console.error(e)
  }
}

main()

setInterval(() => {}, 1000)
