import reloadNavigators from "./reloader"
reloadNavigators

export default function loadContent() {
    const request = new XMLHttpRequest()
    const elements = document.getElementsByClassName("component")

    if (elements.length == 0) return

    const item = elements[0]
    item.classList.remove("component")

    request.open("get", item.getAttribute("target") + ".html", true)

    request.addEventListener("load", () => {
        item.innerHTML = request.responseText
        loadContent()
        reloadNavigators()
    })

    request.send()
}