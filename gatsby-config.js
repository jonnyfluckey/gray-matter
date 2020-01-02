module.exports = {
  siteMetadata: {
    title: 'Gray Matter Technology',
    author: 'Jonny Fluckey',
    description:
      'Digitally Transform your Data and Processes to Scale your Business',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/brain-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
