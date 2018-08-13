module.exports = {
  siteMetadata: {
    title: 'Kevin Wolf - Full Stack developer from San José, Costa Rica',
    siteUrl: 'https://kevinwolf.me',
    description:
      'Full Stack developer from San José, Costa Rica specialized in React.js and React Native'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Kevin Wolf',
        short_name: 'Kevin Wolf',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#00CCD7',
        display: 'minimal-ui',
        icon: 'static/icon.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ]
}
