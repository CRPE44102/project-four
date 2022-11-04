import loadContent from "./content-loader";
import reloadNavigators from "./reloader";

let latestTarget = "home"

export default function navigate(location) {
    if (latestTarget === location) return
    latestTarget = location

    const request = new XMLHttpRequest()

    request.open("get", location + ".html", true)

    request.addEventListener("readystatechange", () => {
        document.getElementById("content").innerHTML= request.responseText;
        loadContent()
        reloadNavigators()
    })

    request.send()
}