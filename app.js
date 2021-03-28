document.getElementById("btnScrollDown").addEventListener("click", () => {
    const sectionToScroll = document.getElementById("info");
    sectionToScroll.scrollIntoView({behavior: "smooth"});
});


function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.body.className = themeName;
}

function loadTheme() {
    const localTheme = localStorage.getItem('theme');
    
    if (localTheme) {
        setTheme(localTheme);
    } else
        setTheme("theme-turquoise");
}

(function () {
    loadTheme();

    document.querySelectorAll(".theme-item").forEach(a => {
        a.addEventListener("click", () => {
            setTheme(a.name);
        })
    })

})();
