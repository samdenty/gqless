module.exports = {
  docs: {
    Introduction: [
      'introduction/getting-started',
      'introduction/installation',
      'introduction/what-and-why',
      'introduction/features',
    ],
    FAQ: ['faq'],
    gqless: ['extensions', 'matchers'],
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
          'api/gqless/Variable',
          'api/gqless/Poller',
          'api/gqless/update',
          'api/gqless/matchUpdate',
          'api/gqless/getAccessor',
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
