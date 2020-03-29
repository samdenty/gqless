module.exports = {
  title: 'gqless',
  tagline: `A GraphQL client without queries`,
  url: 'https://gqless.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'samdenty',
  projectName: 'gqless',
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/nightOwlLight'),
      darkTheme: require('prism-react-renderer/themes/shadesOfPurple'),
    },
    algolia: {
      apiKey: 'c00e78ccfa93ead531ad80e4dd94b48b',
      indexName: 'gqless',
      algoliaOptions: {},
    },
    googleAnalytics: {
      trackingID: 'UA-85426772-7',
    },
    navbar: {
      title: 'gqless',
      // logo: {
      //   alt: 'gqless Logo',
      //   src: 'img/logo.svg',
      // },
      links: [
        {
          label: 'Getting Started',
          to: 'introduction/getting-started',
          position: 'right',
        },
        {
          label: 'API',
          to: 'api/api-reference',
          position: 'right',
        },
        {
          label: 'FAQ',
          to: 'faq',
          position: 'right',
        },

        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/samdenty/gqless',
          position: 'right',
          dangerouslySetInnerHTML: {
            __html: `
            <img
              class="github-star"
              alt="Star on GitHub"
              src="https://img.shields.io/github/stars/samdenty/gqless?style=social&label=Star"
            />
            `,
          },
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
              label: 'Getting Started',
              to: 'introduction/getting-started',
            },
            {
              label: 'FAQ',
              to: 'faq',
            },
            {
              label: 'API Reference',
              to: 'api/api-reference',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'http://twitter.com/gqlessdev',
            },
            {
              label: 'Spectrum',
              href: 'https://spectrum.chat/gqless',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/samdenty/gqless',
            },
            {
              label: 'Open Collective',
              href: 'https://opencollective.com/gqless',
            },
          ],
        },
      ],
      // logo: {
      //   alt: 'Facebook Open Source Logo',
      //   src: 'https://docusaurus.io/img/oss_logo.png',
      // },
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://twitter.com/thesamdd" target="_blank">Sam Denty</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../../docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/index.css'),
        },
      },
    ],
  ],
}
