import {parseToJSON} from "/jsonToCSVParser.js";

document.querySelectorAll('.card-header').forEach(c => c.addEventListener('click', function (e) {
    const expanding = e.currentTarget.ariaExpanded == "false";
    
}));

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


async function loadExperience(){
    const response = await fetch(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vQD1kwfjpHFrgMuyIzgx8TA80lAgZlSR1OhLfY9NMgcCFX7BTaUaOmYTrGbIxfnx1PjY4ZChEQWfU08/pub?output=csv`);
    
    const csv = await response.text();
    const json = parseToJSON(csv);

    for (let i = 0; i < json.values.length; i++) {
        const p = '<p>' + json.values[i] + '</p>';
                
        document.getElementById("experience").innerHTML += p;
    }

}

(function () {
    loadTheme();

    document.querySelectorAll(".theme-item").forEach(a => {
        a.addEventListener("click", () => {
            setTheme(a.name);
        })
    })

    loadExperience();
})();
