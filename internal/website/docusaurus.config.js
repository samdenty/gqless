const React = require('react')

console.warn(React.version)
module.exports = {
  title: 'gqless',
  tagline: `A GraphQL client without queries ✨`,
  url: 'https://gqless.netlify.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'samdenty',
  projectName: 'gqless',
  themeConfig: {
    algolia: {
      apiKey: '', //TODO
      indexName: 'docs',
      algoliaOptions: {},
    },
    navbar: {
      title: 'gqless',
      // logo: {
      //   alt: 'gqless Logo',
      //   src: 'img/logo.svg',
      // },
      links: [
        { to: 'docs/intro/what-and-why', label: 'Docs', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/samdenty/gqless',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: 'docs/intro/what-and-why',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      // logo: {
      //   alt: 'Facebook Open Source Logo',
      //   src: 'https://docusaurus.io/img/oss_logo.png',
      // },
      copyright: `Copyright © ${new Date().getFullYear()} Sam Denty`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../../docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/index.css'),
        },
      },
    ],
  ],
}
