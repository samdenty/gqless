require('ts-node').register({
  transpileOnly: true,
  skipProject: true,
  compilerOptions: {
    downlevelIteration: true,
    esModuleInterop: true,
  },
})

module.exports = {
  plugins: ['../src/index.ts'],
}
