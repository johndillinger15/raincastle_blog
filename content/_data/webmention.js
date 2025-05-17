const fs = require("fs");
const fetch = require("node-fetch");
const unionBy = require("lodash/unionBy");
const dotenv = require("dotenv");
dotenv.config();

const settings = require("./site.js");

const CACHE_DIR = ".cache";
const API = "https://webmention.io/api";
const TOKEN = process.env.WEBMENTION_IO_TOKEN;
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const { domain } = settings;

async function fetchWebmentions(since, perPage = 100000) {
  if (!domain) {
    console.warn(
      ">>> unable to fetch webmentions: no domain name specified in site.js"
    );
    return false;
  }

  if (!TOKEN) {
    console.warn(
      ">>> unable to fetch webmentions: no access token specified in environment."
    );
    return false;
  }

  let url = `${API}/mentions.jf2?domain=${domain}&token=${TOKEN}&per-page=${perPage}`;
  if (since) url += `&since=${since}`;

  const response = await fetch(url);
  if (response.ok) {
    const feed = await response.json();
    console.log(
      `>>> ${feed.children.length} new webmentions fetched from ${API}`
    );
    return feed;
  }

  return null;
}

function mergeWebmentions(a, b) {
  return unionBy(a.children, b.children, "wm-id");
}

function writeToCache(data) {
  const filePath = `${CACHE_DIR}/webmentions.json`;
  const fileContent = JSON.stringify(data, null, 2);

  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR);
  }

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.log(`>>> webmentions saved to ${filePath}`);
  });
}

function readFromCache() {
  const filePath = `${CACHE_DIR}/webmentions.json`;

  if (fs.existsSync(filePath)) {
    const cacheFile = fs.readFileSync(filePath);
    return JSON.parse(cacheFile);
  }

  return {
    lastFetched: null,
    children: [],
  };
}

module.exports = async function () {
  const cache = readFromCache();

  if (cache.children.length) {
    console.log(`>>> ${cache.children.length} webmentions loaded from cache`);
  }

  if (IS_PRODUCTION) {
    const feed = await fetchWebmentions(cache.lastFetched);
    if (feed) {
      const webmentions = {
        lastFetched: new Date().toISOString(),
        children: mergeWebmentions(cache, feed),
      };

      writeToCache(webmentions);
      return webmentions;
    }
  }

  return cache;
};
