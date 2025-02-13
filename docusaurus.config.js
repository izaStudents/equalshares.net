// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

const date = new Date();
const isoDay = date.toISOString().split('T')[0];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Method of Equal Shares',
  // tagline: 'Dinosaurs are cool',
  url: 'https://equalshares.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',

  customFields: {
    currencySymbol: {en: '€', de: 'Fr. ', pl: 'zł', fr: '€'},
    buildDate: isoDay,
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'equalshares', // Usually your GitHub org/user name.
  projectName: 'equalshares.net', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['de', 'en', 'pl'], //, 'fr'
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // metadata: [{name: 'robots', content: 'noindex'}],
      navbar: {
        title: 'Method of Equal Shares',
        logo: {
          alt: 'Logo of the Method of Equal Shares',
          src: 'img/equal-shares-logo.svg',
        },
        items: [
          {
            to: 'explanation',
            position: 'left',
            label: 'Explanation',
          },
          {
            to: 'benefits',
            position: 'left',
            label: 'Benefits',
          },
          {
            to: 'implementation',
            position: 'left',
            label: 'Implementation',
          },
          {
            to: 'resources',
            position: 'left',
            label: 'Resources',
          },
          {
            to: 'contacts',
            position: 'left',
            label: 'Contacts',
          },
          {
            type: 'custom-currencyPicker',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                to: 'explanation',
                label: 'Explanation',
              },
              {
                to: 'benefits',
                label: 'Benefits',
              },
              {
                to: 'implementation',
                label: 'Implementation',
              },
            ],
          },
          {
          items: [
            {
              to: 'resources',
              label: 'Resources',
            },
            {
              to: 'contacts',
              label: 'Contacts',
            },
          ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/equalshares',
              },
              {
                label: 'Wikipedia',
                href: 'https://en.wikipedia.org/wiki/Method_of_Equal_Shares',
              },
            ],
          },
        ],
        copyright: `Website maintained by <a href="https://dominik-peters.de" style="color:hsl(202, 100%, 70%)">Dominik Peters</a> (CNRS, Université Paris Dauphine-PSL) and <a href="https://www.mimuw.edu.pl/~pskowron/" style="color:hsl(202, 100%, 70%)">Piotr Skowron</a> (University of Warsaw).`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
    plugins : [
      async function faviconInjector(context, options) {
        return {
          name: 'favicon-injector', // needed because Safari on iOS doesn't support SVG favicons
          injectHtmlTags() {
            return {
              headTags: [
                {
                  tagName: 'link',
                  attributes: {
                    rel: 'icon',
                    href: '/img/favicon.ico',
                    sizes: 'any',
                  },
                },
              ],
            };
          },
        };
      }
    ],
};

module.exports = config;
