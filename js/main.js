
var hamburger = document.querySelector('.hamburger')
var nav_menu = document.querySelector('.nav_menu')
var switch_theme = document.querySelector('.theme_')
var ht = document.querySelector(':root')
var toggle_icon = document.querySelector('.theme_ i')
var link = document.querySelectorAll('.nav_link')
/*var date_time = new Date();
var salutation = document.querySelector('#salutation')
var day_hour = date_time.getHours()*/

//Salutation en fonction de la date
/*if(salutation){
    if(day_hour <= 12){
        salutation.innerHTML = "It's the morning my friend so, "+'Good Morning 🌞'
    }
    else if(day_hour > 12 && day_hour <= 17){
        salutation.innerHTML = "It's afternoon my friend so, "+'Good Afternoon 😉'
    }
    else if(day_hour > 17 && day_hour <= 20){
        salutation.innerHTML = "It's evening my friend so, "+'Good evening 🫡'
    }
    else if(day_hour > 20 && day_hour <= 0){
        salutation.innerHTML = "It's night my friend so, "+'Good night 😴'
    }
}*/


if(hamburger){
    hamburger.addEventListener('click',function toggle_open(){
        this.classList.toggle('open')
        nav_menu.classList.toggle('open')
        toggle_btn = this.parentNode
        toggle_btn.classList.toggle('active')
    })
}

if(switch_theme){
    switch_theme.onclick = function(){
        ht.classList.toggle('dark')
        const isDark = ht.classList.contains('dark')
        toggle_icon.classList = isDark
        ?'bi bi-moon-stars'
        :'bi bi-brightness-high'
    }
}

function close_nav_menu(e){
    if(!nav_menu.contains(e.target) && !hamburger.contains(e.target)){
        nav_menu.classList.remove('open')
        hamburger.classList.remove('open')
    }
}

document.addEventListener('click', close_nav_menu);

/*new ResizeObserver(entries =>{
    if(entries[0].contentRect.width <= 550){
        nav_menu.style.transform = 'translateY(150%)'
    } else{
        nav_menu.style.transition = 'none'
    }
}).observe(document.body)*/

link.forEach(link=>{
    link.addEventListener('click', ()=>{
        if(window.innerWidth <= 620){
            nav_menu.classList.remove('open')
            hamburger.classList.remove('open')
        }
    })
})

for(var i = 0; i < link.length; i++){
    link[i].addEventListener('click', function(e){
        let div = this.parentNode.parentNode.parentNode.parentNode.parentNode
        if(this.classList.contains('actived')){
            return false
        }
        
        document.querySelector('.nav_link.actived').classList.remove('actived')
        
        this.classList.add('actived')
        div.querySelector('.content.actived').classList.remove('actived')

        div.querySelector(this.getAttribute('href')).classList.add('actived')


    })
}

