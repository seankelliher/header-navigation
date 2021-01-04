function highlightLink() {
    "use strict";

    //Get the nav.
    const nav = document.querySelector("nav");

    //Gather the links within it.
    const links = nav.getElementsByTagName("a");

    //Convert to "real" array (works without this step too).
    const linksArray = Array.from(links);

    //Loop through array. If href matches page URL, assign "selected" class.
    linksArray.forEach(function (link) {
        if (link.href === document.URL) {
            link.className = "selected";
        }
    });
}

export {highlightLink};