console.clear()
const glob = require('glob')

console.log(
  glob
    .sync('./demo/**.js')
    .map(p => require('@babel/core').transformFileSync(p, {}).code)
)

setInterval(() => {}, 1000)
