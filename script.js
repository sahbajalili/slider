let doc = document

let firstImg = doc.querySelector('.img1')
let secondImg = doc.querySelector('.img2')
let thirdImg = doc.querySelector('.img3')
let forthImg = doc.querySelector('.img4')

let slideNumber = doc.querySelector('.slide-number')

let firstCircle = doc.querySelector('.circle1')
let secondCircle = doc.querySelector('.circle2')
let thirdCircle = doc.querySelector('.circle3')
let forthCircle = doc.querySelector('.circle4')

let rightButton = doc.querySelector('.right')
let leftButton = doc.querySelector('.left')

rightButton.addEventListener('click' , next)
leftButton.addEventListener('click' , previous)

function next() {
    if (slideNumber.innerHTML == '1/4') {
        firstImg.style.opacity = '0'
        secondImg.style.opacity = '1'
        slideNumber.innerHTML = '2/4'

        firstCircle.style.background = '#0000004f'
        secondCircle.style.background = '#000000ae'

    } else if (slideNumber.innerHTML == '2/4') {
        secondImg.style.opacity = '0'
        thirdImg.style.opacity = '1'
        slideNumber.innerHTML = '3/4'

        secondCircle.style.background = '#0000004f'
        thirdCircle.style.background = '#000000ae'

    } else if (slideNumber.innerHTML == '3/4') {
        thirdImg.style.opacity = '0'
        forthImg.style.opacity = '1'
        slideNumber.innerHTML = '4/4'

        thirdCircle.style.background = '#0000004f'
        forthCircle.style.background = '#000000ae'

    } else if (slideNumber.innerHTML == '4/4') {
        forthImg.style.opacity = '0'
        firstImg.style.opacity = '1'
        slideNumber.innerHTML = '1/4'

        forthCircle.style.background = '#0000004f'
        firstCircle.style.background = '#000000ae'
    }
    
}

function previous() {
    if (slideNumber.innerHTML == '1/4') {
        firstImg.style.opacity = '0'
        forthImg.style.opacity = '1'
        slideNumber.innerHTML = '4/4'

        firstCircle.style.background = '#0000004f'
        forthCircle.style.background = '#000000ae'
        
    } else if (slideNumber.innerHTML == '4/4') {
        forthImg.style.opacity = '0'
        thirdImg.style.opacity = '1'
        slideNumber.innerHTML = '3/4'

        thirdCircle.style.background = '#000000ae'
        forthCircle.style.background = '#0000004f'

    } else if (slideNumber.innerHTML == '3/4') {
        thirdImg.style.opacity = '0'
        secondImg.style.opacity = '1'
        slideNumber.innerHTML = '2/4'

        thirdCircle.style.background = '#0000004f'
        secondCircle.style.background = '#000000ae'

    } else if (slideNumber.innerHTML == '2/4') {
        secondImg.style.opacity = '0'
        firstImg.style.opacity = '1'
        slideNumber.innerHTML = '1/4'

        secondCircle.style.background = '#0000004f'
        firstCircle.style.background = '#000000ae'
    }
    
}