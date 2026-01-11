// Transformer to minify HTML output.

const htmlmin = require("html-minifier");

const convert = async (rawContent, outputPath) => {
    if (!outputPath) {
        return rawContent;
    }

    // ❌ Never touch RSS / XML feeds
    if (outputPath.endsWith(".rss") || outputPath.endsWith(".xml")) {
        return rawContent;
    }

    // ✅ Only minify real HTML
    if (outputPath.endsWith(".html")) {
        return htmlmin.minify(rawContent, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true
        });
    }

    return rawContent;
};

module.exports = {
    initArguments: {},
    configFunction: async (eleventyConfig = {}) => {
        eleventyConfig.addTransform("minifyHTML", convert);
    }
};
