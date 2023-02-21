# raincastle.blog code

The code of my blog modified bit by bit from the *eleventy-chirpy-blog-template* which can be found here: [https://github.com/muenzpraeger/eleventy-chirpy-blog-template](https://github.com/muenzpraeger/eleventy-chirpy-blog-template)

Below is some information taken from the original template:

## Features

-   🔆 and 🌛 mode
-   🎯 SEO and OpenGraph optimized
-   🌄 Responsive images optimization
-   👀 Accessible
-   🛠 JavaScript and CSS build optimization
-   👨‍💻 Prism-based syntax highlighting
-   📚 RSS (yup, still a thing), sitemap.xml, and JSON-LD

Opinionated setup with [Prettier](https://prettier.io/), [ESlint](https://eslint.org/), [markdownlint](https://github.com/DavidAnson/markdownlint) and others. UX build with [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) and [TailwindCSS](https://tailwindcss.com/docs). JavaScript bundled with [Rollup](https://rollupjs.org/).

## Configuration

All blog configuration is handled via [`siteconfig.js`](./content/_data/siteconfig.js). Everything is inline documented.

## Deployment

All build processes rely on how `NODE_ENV` is set. For production builds, which then also means minified CSS and JS you've to set the value to `production`. I mention this explicitly as this is for some vendors not the default.

## Local Development

### Before you install dependencies

This repo uses [Volta](https://volta.sh/). Get it, and it'll make your node life so much easier.
