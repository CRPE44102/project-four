<<<<<<< HEAD
export default navigate = (location) => {
=======
import loadContent from "./content-loader";
import reloadNavigators from "./reloader";

let latestTarget = "home"

export default function navigate(location, toggleFab) {
    if (latestTarget === location) return

    if (toggleFab) {
        console.log("has toggle");

        document.getElementById("fab").classList.toggle("hidden")
        
        if (document.getElementById("fab").classList.contains("hidden")) {
            document.getElementById("fab").style.display = "none"
        } else {
            document.getElementById("fab").style.display = "flex"
        }
    }

    latestTarget = location

>>>>>>> b5cf2d1bd7cac7a95e3c027e63997bdca039093a
    const request = new XMLHttpRequest()

    request.open("get", location + ".html", true)

<<<<<<< HEAD
    request.onreadystatechange = function() {
        document.getElementById("content").innerHTML= this.responseText;
    }
=======
    request.addEventListener("readystatechange", () => {
        document.getElementById("content").innerHTML= request.responseText;
        loadContent()
        reloadNavigators()
    })
>>>>>>> b5cf2d1bd7cac7a95e3c027e63997bdca039093a

    request.send()
}