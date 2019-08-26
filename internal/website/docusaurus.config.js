module.exports = {
  title: 'gqless',
  tagline: 'The tagline of my site',
  url: 'https://gqless.netlify.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'samdenty',
  projectName: 'gqless',
  themeConfig: {
    navbar: {
      title: 'gqless',
      // logo: {
      //   alt: 'gqless Logo',
      //   src: 'img/logo.svg',
      // },
      links: [
        { to: 'docs/getting-started', label: 'Docs', position: 'left' },
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
              to: 'docs/getting-started',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //   ],
        // },
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
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
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
      },
    ],
  ],
}
