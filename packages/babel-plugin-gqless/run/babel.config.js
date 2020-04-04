require('ts-node').register({
  transpileOnly: true,
  skipProject: true,
  compilerOptions: {
    target: 'ES6',
    downlevelIteration: true,
    esModuleInterop: true,
  },
})

module.exports = {
  plugins: ['../src/index.ts'],
}
