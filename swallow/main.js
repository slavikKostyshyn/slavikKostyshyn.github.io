// Menu burger ---------------------
let menuBtn = document.querySelector('.menu-bth'),
    menuStatus = document.querySelector('body');

if(menuBtn != undefined){
    menuBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        menuBtn.classList.toggle('menu-bth-active');
        menuStatus.classList.toggle('nav-bar-active');
    });
}

// Menu tabs ----------------------
function openMenu(evt, menuName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("menu-item");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("menu-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(menuName).style.display = "flex";
    evt.currentTarget.className += " active";
}

// Navigations scroll ----------------
var anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        var blockID = anchor.getAttribute('href').substr(1);
        
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Preloader ------------------
function hideMy(showElement){
    setTimeout(() => {
        showElement.style.opacity = '0';
        showElement.style.zIndex = '-1';
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    let preloader = document.querySelector('.preloader');

    let preloaderGo = new Promise((resolve, reject) => {
        resolve(hideMy(preloader));
    });

    preloaderGo.then(() => {
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1300);
    });
});

// Popup -------------------------
let clickPopup = document.getElementById('popupclickid'),
    openPopup = document.getElementById('popupopenid'),
    closePopup = document.querySelector('.close-popup');

if(clickPopup){
    clickPopup.addEventListener('click', (e)=> {
        e.preventDefault();
        openPopup.classList.add('active');
        document.querySelector('body').classList.add('modal-open');
    });
}

closePopup.addEventListener('click', (e)=> {
    e.preventDefault();
    openPopup.classList.remove('active');
    document.querySelector('body').classList.remove('modal-open');
});