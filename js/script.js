let headerMenu = document.getElementById('headerMenu')
let line1 = document.getElementById('line1')
let line2 = document.getElementById('line2')

let headerMenuMedia = document.getElementById('headerMenuMedia')
console.log(headerMenuMedia);

headerMenuMedia.style.display = 'none'

headerMenu.addEventListener('click', () => {
    line1.classList.toggle('active-menu-line1')
    line2.classList.toggle('active-menu-line2')
    if(headerMenuMedia.style.display == 'none'){
        headerMenuMedia.style.display = 'block'
    } else {
        headerMenuMedia.style.display = 'none'
    }
})

// active-menu-line1