module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        'intro',
        'intro/how-it-works',
        // 'introduction/features',
        'intro/new-in-2',
        'contributing',
      ],
    },
    { type: 'doc', id: 'getting-started' },
    {
      type: 'category',
      label: 'Usage with React',
      collapsed: false,
      items: [
        'react/fetching-data',
        'react/mutations',
        'react/subscriptions',
        'react/config',
        'react/suspense',
        'react/ssr',
        'react/meta',
        {
          type: 'category',
          label: 'API Reference',
          items: require('./sidebars/react.js'),
        },
      ],
    },
    {
      type: 'category',
      label: 'Core Client',
      collapsed: false,
      items: [
        'client/fetching-data',
        'client/mutations',
        'client/subscriptions',
        'client/config',
        'client/persistence',
        'client/helper-functions',
        'client/graphql-upload',
        {
          type: 'category',
          label: 'API Reference',
          items: require('./sidebars/client.js'),
        },
      ],
    },
    {
      type: 'category',
      label: 'CLI',
      collapsed: false,
      items: [
        'cli/config',
        'cli/codegen',
        'cli/javascript',
        'cli/programmatic',
      ],
    },
    {
      type: 'category',
      label: 'Development Tools',
      collapsed: false,
      items: ['development/logger'],
    },
  ],
};
