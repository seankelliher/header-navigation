//Global variable (actually let)
let mechanics;

//Monitor page, after it loads invoke function.
//You'll need the stylesheet so "load" over "DOMContentLoaded" is a safer bet.
window.addEventListener("load", function () {
    "use strict";

    mechanics.highlight();
    mechanics.menu();
});

//The mechanics variable (let)
mechanics = {

    highlight: function () {

        //Retrieve the nav.
        const priNav = document.querySelector("nav");

        //Gather the links within it.
        const priNavLinks = priNav.getElementsByTagName("a");

        //Create a "real array" from the "array-like" list.
        const links = Array.from(priNavLinks);

        //Loop through array. If href matches page URL, assign "selected" class.
        links.forEach(function (link) {
            if (link.href === document.URL) {
                link.className = "selected";
            }
        }); //close "forEach" function
    },

    menu: function () {
        "use strict";

        //Retrieve the menu.
        document.getElementById("menu").addEventListener("click", function () {
            const menuText = document.getElementById("menu").textContent;

            //If text is "menu", click -> display menu; make text "close."
            //If text is "close", click -> hide menu; make text "menu."
            if (menuText === "Menu") {
                document.getElementById("menu-list").style.display = "block";
                document.getElementById("menu").textContent = "Close";
            } else if (menuText === "Close") {
                document.getElementById("menu-list").style.display = "none";
                document.getElementById("menu").textContent = "Menu";
            }
        });
    }
}; //close mechanics
