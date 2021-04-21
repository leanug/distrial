module.exports = {
  siteMetadata: {
    title: "Distrial",
    titleTemplate: "%s · Distrial",
    description: "Distrial es un estudio de diseño con sede en Buenos Aires, Argentina.",
    siteUrl: "https://www.distrial.website", // No trailing slash allowed!
    image: "/screenshot.png", // 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/assets/portfolio`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Poppins",
              variants: ["300", "400", "500"],
              fontDisplay: 'swap',
              strategy: 'selfHosted',
            },
            {
              family: "Source Sans Pro",
              variants: ["300", "400", "500", "700"],
              fontDisplay: 'swap',
              strategy: 'selfHosted',
            },
          ],
        },
        useMinify: true,
        usePreload: false,
        usePreconnect: false,
      },
    },
  ],
}