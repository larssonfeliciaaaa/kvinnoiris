module.exports = {
  siteMetadata: {
    title: "Kvinnojouren Iris i Luleå",
    description:
      "Kvinnojouren Iris är en kvinnojour i Luleå som stöttar och hjälper våldsutsatta kvinnor, tjejer och barn utsatta av mäns våld och förtryck",
    author: "Kvinnojouren Iris",
    email: "iris.lulea@roks.se",
    phone: "0920-22 22 23",
    url: "https://www.kvinnojoureniris.se",
    image: "/images/LOGO.svg",
    defaultTitle: "Kvinnojouren Iris i Luleå",
    defaultKeywords: "kvinnojour, tjejjour, luleå, skyddat boende, telefonjour",
    twitterUsername: "@iris_lulea",
    kvinnojouren: {
      email: "iris.lulea@roks.se",
      tel: "0920-22 22 23",
      jourTid: "18:00-22:00",
      kontaktTidMonThu: "08:30-16:30",
      kontaktTidFri: "8:30-15:00",
      lunchHours: "12:00-13:00",
      stodchattTid: "13:00-15:00",
    },
    tjejjouren: {
      email: "tjejjoureniris@roks.se",
      stodchattTid: "19:00-21:00",
      stodchattUrl: "https://rokstjejjourer.se/tjejjouren-iris",
    },
    tantjouren: {
      email: "tantjourenlulea@gmail.com",
    },
    siteUrl: "https://www.kvinnojoureniris.se",
  },
  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:300,400,700`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "sv",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
