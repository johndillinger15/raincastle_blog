const scrollToTop = () => {
    document.getElementById("right-area").scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};

const slideLeftSidebar = () => {
    const elSidebar = document.getElementById("sidebar");
    const elRightArea = document.getElementById("right-area");
    elSidebar.classList.toggle("-translate-x-56");
    elSidebar.classList.toggle("translate-x-0");
    elRightArea.classList.toggle("translate-x-56");
};

const toggleSearch = () => {
    const elMobileTopBar = document.getElementById("mobile-top-bar");
    const elSearchBox = document.getElementById("search-box");
    const elSearchBoxBar = document.getElementById("search-box-bar");
    const elMobileSearchCancel = document.getElementById(
        "mobile-search-cancel"
    );
    elMobileTopBar.classList.toggle("hidden");
    elSearchBox.classList.toggle("w-60");
    elSearchBoxBar.classList.toggle("hidden");
    elSearchBoxBar.classList.toggle("w-full");
    elMobileSearchCancel.classList.toggle("hidden");

    elSearchBox.value = "";

    hideSearchContents();
};

const showSearchContents = () => {
    const mainEl = document.querySelector("main");
    const tocEl = document.getElementById("toc");
    const searchContainerEl = document.getElementById("search-container");
    const searchDesktopTitleEl = document.getElementById(
        "search-desktop-title"
    );
    const searchMobileTitleEl = document.getElementById("search-mobile-title");
    const searchTopbarTitleEl = document.getElementById("topbar-desktop-title");

    mainEl.classList.add("hidden");
    if (tocEl) {
        tocEl.classList.add("hidden");
    }
    searchContainerEl.classList.remove("hidden");
    if (window.innerWidth >= 640) {
        searchDesktopTitleEl.classList.remove("hidden");
    } else {
        searchMobileTitleEl.classList.remove("hidden");
    }
    searchDesktopTitleEl.textContent = "Search";
    searchDesktopTitleEl.classList.remove("sm:hidden");
    searchTopbarTitleEl.classList.add("sm:hidden");
};

const hideSearchContents = () => {
    const mainEl = document.querySelector("main");
    const tocEl = document.getElementById("toc");
    const noResultsEl = document.getElementById("search-no-results");
    const searchContainerEl = document.getElementById("search-container");
    const searchDesktopTitleEl = document.getElementById(
        "search-desktop-title"
    );
    const searchMobileTitleEl = document.getElementById("search-mobile-title");
    const searchTopbarTitleEl = document.getElementById("topbar-desktop-title");

    mainEl.classList.remove("hidden");
    if (tocEl) {
        tocEl.classList.remove("hidden");
    }
    searchContainerEl.classList.add("hidden");
    searchDesktopTitleEl.classList.add("hidden");
    searchDesktopTitleEl.classList.add("sm:hidden");
    searchMobileTitleEl.classList.add("hidden");
    searchTopbarTitleEl.classList.remove("sm:hidden");
    noResultsEl.classList.add("hidden");
};

const searchContent = (e) => {
    const INDEX = "process.env.ALGOLIA_INDEX";
    const APP_ID = "process.env.ALGOLIA_APP_ID";
    const API_ID = "process.env.ALGOLIA_SEARCH_API_KEY";

    const keywords = e.target.value;

    const noResultsEl = document.getElementById("search-no-results");
    const searchDesktopTitleEl = document.getElementById(
        "search-desktop-title"
    );
    const searchMobileTitleEl = document.getElementById("search-mobile-title");

    if (keywords !== "" && keywords !== undefined) {
        showSearchContents();
    } else {
        hideSearchContents();
        return;
    }

    fetch(
        `https://${APP_ID}-dsn.algolia.net/1/indexes/${INDEX}?query=${keywords}&hitsPerPage=200`,
        {
            headers: {
                "X-Algolia-Application-Id": APP_ID,
                "X-Algolia-API-Key": API_ID
            }
        }
    )
        .then((result) => {
            return result.json();
        })
        .then((json) => {
            const ulEl = document.getElementById("search-results");
            while (ulEl.lastChild) {
                ulEl.lastChild.remove();
            }
            if (json.hits.length === 0) {
                noResultsEl.classList.remove("hidden");
            } else {
                noResultsEl.classList.add("hidden");
            }
            let hits = 0;
            for (const item of json.hits) {
                const liEl = document.createElement("li");
                liEl.setAttribute(
                    "class",
                    "bg-gradient-to-r from-white via-gray-100 to-white dark:via-dark-middle dark:from-dark-outer dark:to-dark-outer mb-4 py-2 truncate"
                );
                const aEl = document.createElement("a");
                aEl.setAttribute("href", item.url);
                aEl.textContent = item.title.split("|")[0];
                liEl.appendChild(aEl);
                ulEl.appendChild(liEl);
                hits = hits + 1;
            }
            searchDesktopTitleEl.textContent = `Search (${hits} hit/s)`;
            searchMobileTitleEl.textContent = `${hits} hit/s`;
        })
        .catch((error) => {
            console.log(error);
        });
};

const copyUrlToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(location.href);
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
};

window.scrollToTop = function () {
    scrollToTop();
};

window.slideLeftSidebar = function () {
    slideLeftSidebar();
};

window.searchContent = function (e) {
    window.clearTimeout(window.searchDelay);
    window.searchDelay = setTimeout(() => {
        searchContent(e);
    }, 300);
};

window.toggleSearch = function () {
    toggleSearch();
};

window.copyUrlToClipboard = function () {
    copyUrlToClipboard();
};

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content h2,.content h3");
    const menu = document.querySelectorAll("nav.toc a");

    const hash = window.location.hash;

    if (hash) {
        for (const item of menu) {
            if (menu.href === hash) {
                item.classList.add("active");
            }
        }
    }

    const makeActive = (link) => {
        if (menu[link]) {
            menu[link].classList.add("active");
        }
    };
    const removeActive = (link) => menu[link].classList.remove("active");
    const removeAllActive = () =>
        [...Array(sections.length).keys()].forEach((link) =>
            removeActive(link)
        );

    let currentActive = 0;

    document
        .getElementById("right-area")
        .addEventListener("scroll", function () {
            {
                const areaEl = document.getElementById("right-area");
                const barEl = document.getElementById("top-bar");
                const scrollEl = document.getElementById("scroll");
                const scrollTop = areaEl.scrollTop;

                const currentHeading =
                    sections.length -
                    [...sections].reverse().findIndex((section) => {
                        return section.offsetTop - 45 <= scrollTop;
                    }) -
                    1;

                if (currentHeading !== currentActive) {
                    removeAllActive();
                    currentActive = currentHeading;
                    makeActive(currentHeading);
                }

                if (scrollTop >= 45) {
                    barEl.classList.add("hide");
                } else {
                    barEl.classList.remove("hide");
                }

                if (scrollEl) {
                    if (scrollTop > window.innerHeight) {
                        scrollEl.style.display = "flex";
                    } else {
                        scrollEl.style.display = "none";
                    }
                }
            }
        });
});
//# sourceMappingURL=min.js.map
