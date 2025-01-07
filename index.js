let navItems = document.querySelector('nav ul')
// console.log(navItems)

function hideMenuOfNav(){
    navItems.classList.toggle('show')
}

let lineVisible = document.querySelector('.section-4 .first h3 span')
console.log(lineVisible)




setInterval(() => {
    if(lineVisible.style.visibility == 'hidden'){
        lineVisible.style.visibility = 'visible'
    }else{
        lineVisible.style.visibility = 'hidden'
    }
},1000)