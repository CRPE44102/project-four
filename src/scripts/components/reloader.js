import navigate from "./navigate";

export default function reloadNavigators() {
    const navigators = document.getElementsByClassName("navigator")

    for (let i = 0; i < navigators.length; i++) {
        const nav = navigators[i]
        const hasListener = nav.getAttribute("listener")
        const target = nav.getAttribute("target")
        
        if (!hasListener) {
            nav.setAttribute("listener", true)
            nav.addEventListener("click", () => {
                navigate(target)
            })
        }
    }
}