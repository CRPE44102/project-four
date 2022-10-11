const latestUpdatesContainer = document.getElementById("latest-updates-container")
const latestUpdatesIconButton = document.getElementById("latest-updates-icon-button")
const latestUpdatesCloseIconButton = document.getElementById("latest-updates-close-icon-button")


const toggleLatestUpdates = () => latestUpdatesContainer.classList.toggle("-right-full")

latestUpdatesIconButton.addEventListener("click", toggleLatestUpdates)
latestUpdatesCloseIconButton.addEventListener("click", toggleLatestUpdates)