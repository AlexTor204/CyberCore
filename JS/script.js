const showCategories = document.querySelector(".showCategories");
const hiddenMenu = document.querySelector("#hiddenMenu");
const closeMenu = document.querySelector(".closeMenu");
const firstCategory = hiddenMenu.querySelector("ul li a");

showCategories.addEventListener("click", () => {
    const isOpen = hiddenMenu.classList.toggle("visibleMenu");
    
    showCategories.setAttribute("aria-expanded", isOpen);

    if(isOpen) {
        firstCategory.focus();
    }
})

// Cerrar al hacer click fuera del menu
document.addEventListener("click", (event) => {
    if(hiddenMenu.classList.contains("visibleMenu")) {
        if(!hiddenMenu.contains(event.target) && !showCategories.contains(event.target)) {
            hiddenMenu.classList.remove("visibleMenu");
            showCategories.setAttribute("aria-expanded", "false");
        }
    }
})

// Cerrar al hacer click en closeMenu
closeMenu.addEventListener("click", () => {
    hiddenMenu.classList.remove("visibleMenu");

    showCategories.setAttribute("aria-expanded", "false");

    showCategories.focus();
})



// Al usar ESC
document.addEventListener("keydown", (event) => {
    if(hiddenMenu.classList.contains("visibleMenu")) {
        if(event.key === "Escape") {
            hiddenMenu.classList.remove("visibleMenu");
            showCategories.setAttribute("aria-expanded", "false");
            showCategories.focus();
        }
    }
})