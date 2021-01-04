//Keeps nav properly displayed if user re-sizes window from under to over 600px.
function resizeViewport() {

    //Get menu list.
    const menuList = document.getElementById("menu-list");

    //Watch window for resizing.
    window.addEventListener("resize", function () {

        //Get sizing.
        const viewport = window.innerWidth;

        //Modify display, if needed.
        if (viewport >= 600) {
            menuList.style.removeProperty("display");
            document.getElementById("menu").textContent = "Menu";
        }
    });
}

export {resizeViewport};