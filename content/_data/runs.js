// _data/runs.js
const Parser = require("rss-parser");
const EleventyFetch = require("@11ty/eleventy-fetch");

const FEED_URL = "https://feedmyride.net/activities/6023237";

module.exports = async function () {
    const parser = new Parser();

    // Try network with cache; fall back to cache-only; else empty.
    let xml;
    try {
        xml = await EleventyFetch(FEED_URL, {
            type: "text",
            duration: "6h",
            retryOn: [429, 500, 502, 503, 504],
            retries: 2,
            directory: ".cache"
        });
    } catch {
        try {
            xml = await EleventyFetch(FEED_URL, {
                type: "text",
                duration: "*", // cache-only
                directory: ".cache"
            });
        } catch {
            return [];
        }
    }

    let feed;
    try {
        feed = await parser.parseString(xml);
    } catch {
        return [];
    }

    return (feed.items || [])
        .map((item) => {
            const m = (item.link || "").match(/activities\/(\d+)/);
            const id = m ? m[1] : null;
            return {
                title: item.title || "",
                link: item.link || "",
                date: item.isoDate || item.pubDate || null,
                content: item.contentSnippet || "",
                activityId: id
            };
        })
        .filter((i) => i.activityId)
        .sort((a, b) => Date.parse(b.date || 0) - Date.parse(a.date || 0));
};
