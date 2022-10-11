const latestUpdatesContainer = document.getElementById("latest-updates-container")
const latestUpdatesIconButton = document.getElementById("latest-updates-icon-button")
const latestUpdatesCloseIconButton = document.getElementById("latest-updates-close-icon-button")


latestUpdatesIconButton.addEventListener("click", (event) => {
    latestUpdatesContainer.classList.remove("-right-full")
    latestUpdatesContainer.classList.add("right-0")
})

latestUpdatesCloseIconButton.addEventListener("click", (event) => {
    latestUpdatesContainer.classList.remove("right-0")
    latestUpdatesContainer.classList.add("-right-full")
})