module.exports = function (_context, _options) {
  return {
    name: 'Fix Typedoc',
    async contentLoaded() {
      require('./fix-typedoc');
      return null;
    },
  };
};
