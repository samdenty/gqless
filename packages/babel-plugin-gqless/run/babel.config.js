require('ts-node').register({
  transpileOnly: true,
  skipProject: true,
})

module.exports = {
  plugins: ['../src/index.ts'],
}
