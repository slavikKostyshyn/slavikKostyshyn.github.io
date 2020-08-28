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

// main logic -------------
let myQuest = document.querySelector('#myQuest'),
    myPaper = document.querySelector('#myPaper'),
    myScissor = document.querySelector('#myScissor'),
    myStone = document.querySelector('#myStone'),
    myImgs = document.querySelectorAll('.img-block.left img'),
    yourImgs = document.querySelectorAll('.img-block.right img')
    yourQuest = document.querySelector('#yourQuest'),
    btnGame = document.querySelector('#clickBtn'),
    optionsPaper = document.querySelector('#paper'),
    optionsScissors = document.querySelector('#scissors'),
    optionsStone = document.querySelector('#stone');

    optionsPaper.addEventListener('click', () => {
        document.querySelector('.column .img-block.left').style.transform = "rotateY(360deg)";
        for(var i = 0; i < myImgs.length; i++){
            myImgs[i].style.display = 'none';
        }
        myPaper.style.display = 'block';
        optionsPaper.classList.add('active');
        optionsScissors.classList.remove('active');
        optionsStone.classList.remove('active');
        document.querySelector('.column .img-block.right').style.background = "#fff";
    });
    optionsScissors.addEventListener('click', () => {
        document.querySelector('.column .img-block.left').style.transform = "rotateY(360deg)";
        for(var i = 0; i < myImgs.length; i++){
            myImgs[i].style.display = 'none';
        }
        myScissor.style.display = 'block';
        optionsPaper.classList.remove('active');
        optionsScissors.classList.add('active');
        optionsStone.classList.remove('active');
        document.querySelector('.column .img-block.right').style.background = "#fff";
    });
    optionsStone.addEventListener('click', () => {
        document.querySelector('.column .img-block.left').style.transform = "rotateY(360deg)";
        for(var i = 0; i < myImgs.length; i++){
            myImgs[i].style.display = 'none';
        }
        myStone.style.display = 'block';
        optionsPaper.classList.remove('active');
        optionsScissors.classList.remove('active');
        optionsStone.classList.add('active');
        document.querySelector('.column .img-block.right').style.background = "#fff";
    });


//  yourImgs = yourImgsAll.length - 1;

btnGame.addEventListener("click", () => {

    var whatYourStep = 0;
    whatYourStep = Math.floor(Math.random() * yourImgs.length);

    if(whatYourStep == 0){
        whatYourStep = Math.floor(Math.random() * yourImgs.length);
    }

    let swapPromise = new Promise((resolve, reject) => {
        resolve(
            document.querySelector('.column .img-block.right').style.transform = "rotateY(360deg)"
        )  
    }) 
    swapPromise.then(() => {
        setTimeout(() => {
            document.querySelector('.column .img-block.right').style.transform = "rotateY(0deg)";
            document.querySelector('.column .img-block.right').style.background = "none";
        }, 100)
    });
    

    for(var i = 0; i < yourImgs.length; i++){
        yourImgs[i].style.display = 'none';
    }
    if(whatYourStep == 1){
        yourImgs[1].style.display = 'block';
    }else if(whatYourStep == 2){
        yourImgs[2].style.display = 'block';
    }else{
        yourImgs[3].style.display = 'block';
    }

    setTimeout(() =>{
        if(optionsPaper.classList.contains('active')  && whatYourStep == 1){
            alert('нічія');
        }else if(optionsPaper.classList.contains('active')  && whatYourStep == 2){
            alert('програш');
        }else if(optionsPaper.classList.contains('active')  && whatYourStep == 3){
            alert('перемога');
        }else if(optionsScissors.classList.contains('active')  && whatYourStep == 1){
            alert('перемога');
        }else if(optionsScissors.classList.contains('active')  && whatYourStep == 2){
            alert('нічія');
        }else if(optionsScissors.classList.contains('active')  && whatYourStep == 3){
            alert('програш');
        }else if(optionsStone.classList.contains('active')  && whatYourStep == 1){
            alert('програш');
        }else if(optionsStone.classList.contains('active')  && whatYourStep == 2){
            alert('перемога');
        }else if(optionsStone.classList.contains('active')  && whatYourStep == 3){
            alert('нічія');
        }
    }, 500);
});


// music control ---------
document.getElementById("controlVolume").onclick = function(){

    var myaudio = document.getElementById("mySound");

    if(myaudio.paused == true){
        document.getElementById("mySound").play();
        document.querySelector("#controlVolume img").setAttribute("src", "img/volume-up-solid.svg");
    } else if (myaudio.paused == false){
        document.getElementById("mySound").pause();
        document.querySelector("#controlVolume img").setAttribute("src", "img/volume-mute-solid.svg");
    }
}
