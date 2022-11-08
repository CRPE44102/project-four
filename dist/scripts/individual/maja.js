const opacities = [
    "opacity-0",
    "opacity-5",
    "opacity-10",
    "opacity-20",
    "opacity-25",
    "opacity-30",
    "opacity-40",
    "opacity-50",
    "opacity-60",
    "opacity-70",
    "opacity-75",
    "opacity-80",
    "opacity-90",
    "opacity-95",
    "opacity-1"
]

const reversed = [...opacities].reverse()

const slide1 = document.getElementById("slide1")
const slide2 = document.getElementById("slide2")
const slide3 = document.getElementById("slide3")

const initFade = (currentSlide, nextSlide) => {
 
    // nextSlide.classList.toggle("hidden")
    fade(nextSlide, opacities)
    
    fade(currentSlide, reversed).then(() => {
        // currentSlide.classList.toggle("hidden")
    })
}

const fade = async (target, properties) => {
    for (let i = 1; i < properties.length; i++) {
        await sleep(50)
        target.classList.add(properties[i])
        target.classList.remove(properties[i - 1])
    }
}
const sleep = async (duration = 100) => {
    return new Promise(r => setTimeout(r, duration))
}

const slides = [
    slide1,
    slide2,
    slide3,
]
 
let currentSlide = 0

setInterval(() => {
    if (currentSlide == 2) {
        initFade(slides[currentSlide], slides[0])
        currentSlide = 0
    } else {
        initFade(slides[currentSlide], slides[currentSlide + 1])
        currentSlide++
    }
}, 1000)