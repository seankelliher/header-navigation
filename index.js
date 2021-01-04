import {highlightLink} from "./app/links.js";
import {displayMenu} from "./app/menu.js";
import {resizeViewport} from "./app/viewport.js";


//When DOM loads...
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    highlightLink();
    displayMenu();
    resizeViewport();
});