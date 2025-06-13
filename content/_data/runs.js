const Parser = require("rss-parser");
const parser = new Parser();

module.exports = async function () {
  const feed = await parser.parseURL(
    "https://feedmyride.net/activities/6023237"
  );

  return feed.items
    .map((item) => {
      const activityIdMatch = item.link?.match(/activities\/(\d+)/);
      const activityId = activityIdMatch ? activityIdMatch[1] : null;

      return {
        title: item.title,
        link: item.link,
        date: item.isoDate,
        content: item.contentSnippet || "",
        activityId: activityId,
      };
    })
    .filter((item) => item.activityId) // ensure valid IDs
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // newest first
};
