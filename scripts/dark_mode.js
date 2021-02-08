const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) => 
    window.getComputedStyle(element).getPropertyValue(style);

const initalColors = {
    darkBlue: getStyle(html, "--dark-blue"),
    header: getStyle(html, "--header"),
    total: getStyle(html, "--totalColor"),
    hoverButton: getStyle(html, "--hover-button"),
    body: getStyle(html, "--body"),
    cards: getStyle(html, "--cards"),
}

const darkMode = {
    darkBlue: "#000000",
    header: "#171515",
    total: "#494646",
    hoverButton: "FE0606",
    body: "#b5b5b5",
    cards: "#ECEBEB"
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
    );
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initalColors);
})