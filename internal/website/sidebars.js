module.exports = {
  docs: {
    Introduction: [
      'introduction/getting-started',
      'introduction/installation',
      'introduction/motivation',
      // 'introduction/features',
    ],
    'Fetching Data': [
      'fetching-data/queries',
      'fetching-data/local-state',
      'fetching-data/fragments',
    ],
    FAQ: ['faq'],
    // gqless: ['extensions', 'matchers'],
    React: [
      'react/basic-usage',
      'react/polling',
      'react/variables',
      'react/custom-queries',
      'react/interfaces-unions',
    ],
    'API Reference': [
      'api/api-reference',
      {
        type: 'category',
        label: 'gqless',
        items: [
          'api/client/Variable',
          'api/client/Poller',
          'api/client/update',
          'api/client/matchUpdate',
          'api/client/getAccessor',
        ],
      },
      {
        type: 'category',
        label: '@gqless/logger',
        items: ['api/logger/Logger'],
      },
      {
        type: 'category',
        label: '@gqless/schema',
        items: [],
      },
    ],
    CLI: ['cli/installation', 'cli/codegen'],
  },
}
