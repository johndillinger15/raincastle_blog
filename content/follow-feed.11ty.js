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

		// sources
		feed.addSource("youtubeUser", "YouTube", "UCK6TlmwrP1K8Et7OXd4QG3w");
		feed.addSource("atom", "Blog", "https://raincastle.blog/blog.rss");
		feed.addSource("rss", "Podcast", "https://3-schweinehun.de/episodes.mp3.rss");
		feed.addSource("rss", "Podcast", "https://activemotif.podbean.com/feed.xml");
		feed.addSource("rss", "Mastodon", "https://sueden.social/users/johndillinger15.rss");


		return feed.toRssFeed({
			title: "Stefans Activity Feed",
			language: "de",
			url: "https://www.raincastle.blog/follow.rss",
			subtitle: "Ein zentraler Feed für Stefans Aktivitäten im Internet.",
		});
	}
};
