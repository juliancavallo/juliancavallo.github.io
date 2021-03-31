document.getElementById("btnScrollDown").addEventListener("click", () => {
    const currentSection = document.getElementById("presentation");
    const sectionToScroll = document.getElementById("info");

    const bottom = Math.floor($(currentSection).outerHeight() - window.innerHeight);

    if($(window).scrollTop() >= bottom)
        sectionToScroll.scrollIntoView({behavior: "smooth"});
    else
        currentSection.scrollIntoView({block:"end", behavior: "smooth"});
    
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight));
}


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
