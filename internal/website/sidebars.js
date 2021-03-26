module.exports = {
  docs: {
    Introduction: [
      'introduction/getting-started',
      'introduction/installation',
      'introduction/features',
      'introduction/motivation',
    ],
    CLI: ['cli/config', 'cli/codegen', 'cli/javascript', 'cli/programmatic'],
    React: [
      'react/basic-usage',
      'react/caveats',
      'react/config',
      'react/query',
      'react/mutations',
      'react/subscriptions',
      'react/suspense',
      'react/meta',
      'react/ssr',
      'react/api-reference',
      {
        type: 'category',
        label: 'Auto-generated API Reference',
        items: require('./sidebars/react.js'),
      },
    ],
    Core: [
      'core/basic-usage',
      'core/helpers',
      'core/config',
      'core/subscriptions',
      'core/persistence',
      'core/api-reference',
      {
        type: 'category',
        label: 'Auto-generated API Reference',
        items: require('./sidebars/core.js'),
      },
    ],
    'Development Tools': ['development/logger'],
    FAQ: ['faq'],
    Contributing: ['contributing'],
  },
};
