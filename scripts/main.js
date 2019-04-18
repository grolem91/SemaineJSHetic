let $hero_video = document.querySelector('.container')

window.addEventListener('scroll', function (e) {
    //console.log(window.scrollY)
    if (window.scrollY > 60) {
        $hero_video.classList.add('wide')
    } else {
        $hero_video.classList.remove('wide')
    }
})





/*SLIDER*/

const roundButton1 = document.querySelector('.roundButtonContainer1')
const roundButton2 = document.querySelector('.roundButtonContainer2')
const roundButton3 = document.querySelector('.roundButtonContainer3')
const roundButton4 = document.querySelector('.roundButtonContainer4')
// arrows
const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')
// slider
const slider = document.querySelector('.sliderContainer')
const sliderImages = document.querySelectorAll('.sliderContainer img')
const step = 960 // definit le décalage
let pos = 0 // définit la position en cours.
let action


// FUNCTIONS

// Mouvement slilder
playSlider()

// Round buttons
// Le slider continu ou il était
console.log(roundButton1)
roundButton1.addEventListener('click', roundButton1)
roundButton2.addEventListener('click', rndButton2)
roundButton3.addEventListener('click', rndButton3)
roundButton4.addEventListener('click', rndButton4)

function rndButton1() {
    pos = roundButton1.id
    slider.style.left = -pos * step + 'px'
}

function rndButton2() {
    pos = roundButton2.id
    slider.style.left = -pos * step + 'px'
}

function rndButton3() {
    pos = roundButton3.id
    slider.style.left = -pos * step + 'px'
}

function rndButton4() {
    pos = roundButton4.id
    slider.style.left = -pos * step + 'px'
}


// Arrows
leftButton.addEventListener('click', leftSlide)
rightButton.addEventListener('click', rightSlide)

function leftSlide() {
    pos--
    if (pos < 0) {
        pos = sliderImages.length - 1
    }
    setPosition(pos)
}

function rightSlide() {
    pos++
    if (pos >= sliderImages.length) {
        pos = 0
    }
    setPosition(pos)
}


slider.addEventListener('mouseover', stopSlider)
slider.addEventListener('mouseout', playSlider)
leftButton.addEventListener('mouseover', stopSlider)
leftButton.addEventListener('mouseout', playSlider)
rightButton.addEventListener('mouseover', stopSlider)
rightButton.addEventListener('mouseout', playSlider)

function setPosition(pos) {
    slider.style.left = -pos * step + 'px' // 960px
}

function stopSlider() {
    clearInterval(action)
}

function playSlider() {
    action = setInterval(
        function () {
            pos = (pos + 1) % sliderImages.length
            setPosition(pos)
        },
        3000 // toutes les 3 secondes
    )
}


























// function hello(eventType, functionThatWillBeUsed){
//     if(eventType === 'scroll'){
//         const event = {scrollY: window.scrollY}
//         functionThatWillBeUsed(event)
//     }
// }

// window.hello = hello

// window.hello('scroll', hi)