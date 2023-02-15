module.exports = class {
	data() {
		return {
			// Controls where the file is written
			permalink: "/follow.rss"
		}
	}

	async render() {
		const { ActivityFeed } = await import("@11ty/eleventy-activity-feed");

		let feed = new ActivityFeed();

		feed.setCacheDuration("4h");

		// YouTube
		feed.addSource("youtubeUser", "YouTube", "UCK6TlmwrP1K8Et7OXd4QG3w");

		// Blog
		feed.addSource("rss", "Blog", "https://raincastle.blog/blog.rss");

		// 3-SH Podcast
		feed.addSource("rss", "Podcast", "https://3-schweinehun.de/episodes.mp3.rss");

		// AM Podcast
		feed.addSource("atom", "Podcast", "https://activemotif.podbean.com/feed.xml");

		// Mastodon
		feed.addSource("rss", "Mastodon", "https://sueden.social/users/johndillinger15.rss");

		// Twitter
		// feed.addSource("twitterUser", "Twitter", "eleven_ty", "949639269433380864");

		return feed.toRssFeed({
			title: "Stefans Activity Feed",
			language: "de",
			url: "https://www.raincastle.blog/follow.rss",
			subtitle: "Ein zentraler Feed für Stefans Aktivitäten im Internet.",
		});
	}
};

console.log("Hello world!");
