require("dotenv").config();

module.exports = {
    // Website title, shown in left sidebar and in page title
    title: "raincastle.blog",
    // Site URL to generate absolute URLs. Used across the board.
    url: process.env.URL || "https://raincastle.blog",
    // Profile image for left sidebar
    image: "/assets/images/dillinger_schwarz.jpg",
    // Image alt text for left sidebar
    imageAlt: "Bild von Stefan Dillinger",
    // Author name, shown in left sidebar, and used in JSON-LD
    author: "Stefan Dillinger",
    // Site description, shown below site image (optional)
    description: "Laufen in Straubing und im Bayerischen Wald",
    // OpenGraph default image, in case you don't have an `image`
    // set in your Markdown frontmatter; relevant for social
    // sharing.
    openGraphDefaultImage: "/assets/images/opengraph.jpg",
    // Mastodon ID (optional, remove it not needed), used for link in the left sidebar
    socialMastodon: "@johndillinger15",
    // LinkedIn ID  (optional, remove it not needed), used for link in the left sidebar
    socialLinkedIn: "stefandillinger",
    // Instagram ID  (optional, remove it not needed), used for link in the left sidebar, and for OpenGraph sharing information
    socialInstagram: "s.d_running",
    // YouTube ID/Channel  (optional, remove it not needed), used for link in the left sidebar
    socialYouTube: "@johndillinger15"
};
