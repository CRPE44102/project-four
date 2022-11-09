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

        try {
            const clickMe = document.getElementById("clickMeBitch")

            if (!clickMe.classList.contains("listening")) {
                clickMe.classList.add("listening")
                clickMe.addEventListener("click", openNav)
            }
        } catch (error) {
            // console.log(error);
        } 
    })

    request.send()
}


const openNav = async () => {
	let widths = []
    const max = 33
   	let currentIndex = 0
    
    for (let i = 0; i < max; i++) {
    	widths.push(i)
    }
    
    while (true) {
    	if (currentIndex >= max) break
        await sleep(10)
        
        document.getElementById("slidein").style.width = (widths[currentIndex] + "%");
        
        currentIndex++
    }
}

const sleep = async (duration = 100) => {
    return new Promise(r => setTimeout(r, duration))
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}