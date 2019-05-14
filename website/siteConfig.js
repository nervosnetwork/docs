/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
    title: 'Nervos CKB', // Title for your website.
    tagline: 'Nervos CKB Documentations',
    url: 'https://docs.nervos.org', // Your website URL
    baseUrl: '/', // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    cname: 'docs.nervos.org',

    // Used for publishing and more
    projectName: 'docs',
    organizationName: 'Nervos',
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    docsUrl: '',

    //GA settings
    gaTrackingId: 'UA-139882771-1',
    gaGtag: true,
    
    // enable scroll to top button
    scrollToTop:true,

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        {doc:'introduction/welcome', label:'Docs'},
        {doc:'tutorials/intro-tutorial', label:'Tutorial'},
        {href: 'https://github.com/nervosnetwork',label: 'GitHub',external: true},
        {search:true}
    ],

    /* path to images for header/footer */
    headerIcon: 'img/nervos-logo.png',
    favicon: 'img/favicon.ico',

    /* Colors for website */
    colors: {
        primaryColor: '#11356f',
        secondaryColor: '#4bbc8e',
    },

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: [
        'https://buttons.github.io/buttons.js',
        'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
        '/js/code-block-buttons.js',
    ],

    algolia: {
        apiKey: 'ef49666369943baa0a93aedc37511318',
        indexName: 'nervos-ckb',
        algoliaOptions: {} // Optional, if provided by Algolia
      },

    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    // No .html extensions for paths.
    cleanUrl: true,

    // Collapsible Categories
    docsSideNavCollapsible: true,

    //base url for edit button
    editUrl: 'https://github.com/nervosnetwork/docs/edit/master/docs/',

    // Show documentation's last update time.
    enableUpdateTime: true,
};

module.exports = siteConfig;
