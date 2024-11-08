const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const carousel = document.querySelector(".carousel");
const list = document.querySelector(".carousel .list");
const thumbnail = document.querySelector(".carousel .thumbnail");

nextBtn.addEventListener('click', (e) => {
    showSlider("next")
})

prevBtn.addEventListener('click', (e) => {
    showSlider("prev")
})

const timeRunning = 3000;
const timeGap = 7000;
let runTimeOut;

// run every 7s
const autoRun = setTimeout(() => {
    nextBtn.click()
}, timeGap)
const showSlider = (type) => {
    const sliderItems = document.querySelectorAll(".carousel .list .item");
    const thumbnailItems = document.querySelectorAll(".carousel .thumbnail .item");
    
    if(type === "next") {
        list.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0])
        carousel.classList.add("next")
    }

    if(type === "prev") {
        const lastPosition = sliderItems.length - 1
        list.prepend(sliderItems[lastPosition]);
        thumbnail.prepend(thumbnailItems[lastPosition])
        carousel.classList.add("prev")
    }

    clearTimeout(runTimeOut)
    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)
}