function displayMenu() {
    "use strict";

    //Get the menu.
    const menu = document.getElementById("menu");

    //Monitor menu for clicks.
    menu.addEventListener("click", function () {

        const menuText = document.getElementById("menu").textContent;
        const menuList = document.getElementById("menu-list");

        //If text is "menu", display menu; make text "close."
        //If text is "close", hide menu; make text "menu."
        if (menuText === "Menu") {
            menuList.style.display = "flex";
            menu.textContent = "Close";
        }

        if (menuText === "Close") {
            menuList.style.display = "none";
            menu.textContent = "Menu";
        }
    });
}

export {displayMenu};