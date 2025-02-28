/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [];

const siteConfig = {
    title: 'ANDREW SNYDER', // Title for your website.
    tagline: 'Continuously improving, aspiring Full-Stack Javascript Web Developer.',
    profilePhoto: 'img/profile.png',
    url: 'https://Asnyder0328.github.io', // Your website URL
    baseUrl: '/tech-portfolio/', // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    // Used for publishing and more
    projectName: 'tech-portfolio',
    organizationName: 'Asnyder0328',
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        { doc: "about", label: "About" },
        { doc: "projects", label: "Projects" },
        // Links to blog generated by Docusaurus (${baseUrl}blog)
        { blog: true, label: "Blog" },
    ],

    // If you have users set above, you add it here:
    users,

    favicon: 'img/favicon.ico',

    /* Colors for website */
    colors: {
        primaryColor: '#2C312E',
        secondaryColor: '#72C3E7',
    },

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()}`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ['https://buttons.github.io/buttons.js'],

    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    // No .html extensions for paths.
    cleanUrl: true,

    // Show documentation's last update time.
    enableUpdateTime: true,

    /* The social media here is listed at the bottom of the page with icons.
    Add your social media username to the end of the social media URLs.
    If you want to add a social media icon, delete the two // before the line
    If you want to remove a social media icon, you can add the two // before the line
    or delete the line. */
    socialMedia: {
        linkedin: 'https://www.linkedin.com/in/',
        twitter: 'https://twitter.com/',
        github: 'https://github.com/',
        //facebook: 'https://www.facebook.com/',
        //instagram: 'https://www.instagram.com/',
        //youtube: 'https://www.youtube.com/',
        //twitch: 'https://www.twitch.tv/'
    },
};

module.exports = siteConfig;
