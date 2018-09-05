module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  lessonsDir: "lessons", // The name of the directory that contains lessons or docs.
  siteTitle: "Draft Js Plugins Documentation", // Site title.
  siteTitleAlt: "Documentation for Draft Js Plugins", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "", // Domain of your website without pathPrefix.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-82450300-1 ", // GA tracking ID.
  //  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "User", // Username to display in the author segment.
  userTwitter: "juliandoesstuff", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Brighton, UK", // User location to display in the author segment.
  userAvatar: "https://en.gravatar.com/userimage/29500851/ff9deefa57a91f7370df0a19022b9ffa.png", // User avatar to display in the author segment.
  userDescription: "What's this!", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/draft-js-plugins",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/juliandoesstuff",
      iconClassName: "fa fa-twitter"
    },
  ],
  copyright: "Copyright © 2017. draft-js-plugins", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  // TODO: Move this literally anywhere better.
  toCChapters: ["", "Chapter 1", "Chapter 2"] // Used to generate the Table Of Contents. Index 0 should be blank.
};
