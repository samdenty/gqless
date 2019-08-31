module.exports = {
  docs: {
    Introduction: ['intro/what-and-why', 'intro/features'],
    gqless: ['getting-started', 'extensions', 'matchers'],
    React: [
      'react/basic-usage',
      'react/custom-queries',
      'react/polling',
      'react/variables',
      'react/interfaces-unions',
    ],
    API: [
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
        items: ['api/schema/schemaNodes'],
      },
    ],
  },
}
