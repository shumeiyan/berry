module.exports = {
  siteMetadata: {
    title: `Blog by Berry Yan`,
    name: `Berry Yan`,
    siteUrl: `http://ysm.github.io`,
    description: `Blog by Berry Yan`,
    hero: {
      heading: `Welcome to Blog by Berry Yan.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/shumeiyan`,
      },
      {
        name: `github`,
        url: `https://github.com/shumeiyan`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/shumeiyan.co`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/shumeiyan/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/shumeiyan`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
