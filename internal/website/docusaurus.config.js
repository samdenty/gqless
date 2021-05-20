module.exports = {
  title: 'gqless',
  tagline: `A GraphQL client without queries`,
  url: 'https://gqless.com',
  baseUrl: '/',
  favicon: '/favicon.ico',
  organizationName: 'gqless',
  projectName: 'gqless',
  themeConfig: {
    sidebarCollapsible: true,
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme:
        //@ts-ignore
        require('prism-react-renderer/themes/nightOwlLight'),
      darkTheme:
        //@ts-ignore
        require('prism-react-renderer/themes/shadesOfPurple'),
    },
    algolia: {
      apiKey: 'c00e78ccfa93ead531ad80e4dd94b48b',
      indexName: 'gqless',
      algoliaOptions: {},
    },
    navbar: {
      title: null,
      logo: {
        alt: 'gqless Logo',
        src: '/img/logo-sm.svg',
      },
      items: [
        {
          label: 'Discord',
          to: 'https://discord.gg/FjwyGQKYER',
          label: 'React',
          to: 'react/fetching-data',
          position: 'right',
          activeBasePath: 'react',
        },
        {
          label: 'Introduction',
          to: 'intro',
          position: 'right',
          activeBasePath: 'intro',
        },
        {
          label: 'Get started',
          to: 'getting-started',
          position: 'right',
        },
        {
          label: 'Examples',
          to: '/examples',
          position: 'right',
          activeBasePath: 'examples',
        },
        {
          label: 'React',
          to: 'react/fetching-data',
          position: 'right',
          activeBasePath: 'react',
        },

        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/gqless/gqless',
          position: 'right',
          dangerouslySetInnerHTML: {
            __html: `
              <img
                class="github-star"
                alt="GitHub"
                src="https://img.shields.io/github/stars/gqless/gqless?style=social&label=Star"
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
              label: 'Introduction',
              to: 'intro',
            },
            {
              label: 'Getting Started',
              to: 'getting-started',
            },
            {
              label: 'React',
              to: 'react/fetching-data',
              position: 'right',
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
              label: 'Discussions',
              href: 'https://github.com/gqless/gqless/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/gqless/gqless',
            },
            {
              label: 'Open Collective',
              href: 'https://opencollective.com/gqless',
            },
          ],
        },
      ],
      copyright: `
<div>
  <p>${`© Copyright ${new Date().getFullYear()} GQless`}</p>
</div>
      `.trim(),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/gqless/gqless/edit/master/docs/master',
          remarkPlugins: [require('./src/plugins/remark-yarn2npm')],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/style.css'),
        },
      },
    ],
  ],
  plugins: process.env.SKIP_TYPEDOC
    ? [require.resolve('./fix-typedoc-plugin.js')]
    : [
        [
          'docusaurus-plugin-typedoc',
          {
            id: 'client',
            entryPoints: ['../../packages/gqless/src/index.ts'],
            tsconfig: '../../packages/gqless/tsconfig.json',
            docsRoot: '../../docs',
            out: 'client/api',
            sidebar: {
              sidebarFile: 'sidebars/client.js',
              fullNames: true,
            },
            allReflectionsHaveOwnDocument: false,
          },
        ],
        [
          'docusaurus-plugin-typedoc',
          {
            id: 'react',
            entryPoints: ['../../packages/react/src/index.tsx'],
            tsconfig: '../../packages/react/tsconfig.json',
            docsRoot: '../../docs',
            out: 'react/api',
            sidebar: {
              sidebarFile: 'sidebars/react.js',
              fullNames: true,
            },
            allReflectionsHaveOwnDocument: false,
          },
        ],
        require.resolve('./fix-typedoc-plugin.js'),
      ],
  stylesheets: ['/fonts.css'],
};
