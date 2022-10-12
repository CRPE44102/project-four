const latestUpdatesContainer = document.getElementById("latest-updates-container")
const latestUpdatesIconButton = document.getElementById("latest-updates-icon-button")
const latestUpdatesCloseIconButton = document.getElementById("latest-updates-close-icon-button")


const toggleLatestUpdates = () => latestUpdatesContainer.classList.toggle("hidden")

latestUpdatesIconButton.addEventListener("click", toggleLatestUpdates)
latestUpdatesCloseIconButton.addEventListener("click", toggleLatestUpdates)

const postResponseTextarea = document.getElementById("post-response-textarea")
const postResponseCharacterCounter = document.getElementById("post-response-character-counter")

postResponseTextarea.addEventListener("keyup", event => {
    postResponseCharacterCounter.textContent = event.currentTarget.value.length
})

const postCreationTextarea = document.getElementById("post-creation-textarea")
const postCreationCharacterCounter = document.getElementById("post-creation-character-counter")

postCreationTextarea.addEventListener("keyup", event => {
    postCreationCharacterCounter.textContent = event.currentTarget.value.length
})