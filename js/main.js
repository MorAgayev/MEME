'use strict'

function onInit() {
    gElCanvas = document.querySelector('.my-canvas');
    console.log('gElCanvas',gElCanvas);
    gCtx = gElCanvas.getContext('2d');
    console.log('gCtx',gCtx);
    var elGalleryBtn = document.querySelector('.gallery-btn');
    elGalleryBtn.addEventListener('click', openGallery);
    var elMemesBtn = document.querySelector('.memes-btn');
    elMemesBtn.addEventListener('click', showMemesPage);
    renderGallery();
    createMeme()
}

function menuToggle() {
    document.body.classList.toggle('menu-open');
}

function openGallery() {
    document.querySelector('.memes').hidden = true;
    var elCanvasPage = document.querySelector('.canvas');
    elCanvasPage.hidden = true;
    var elHomePage = document.querySelector('.home');
    elHomePage.hidden = true;
    var elGallery = document.querySelector('.gallery');
    elGallery.hidden = false;
}

function openHomePage() {
    console.log('ON');
    document.querySelector('.memes').hidden = true;
    var elCanvasPage = document.querySelector('.canvas');
    elCanvasPage.hidden = true;
    var elGallery = document.querySelector('.gallery');
    elGallery.hidden = true;
    var elHomePage = document.querySelector('.home');
    elHomePage.hidden = false;
}

// function closeNav() {
//     console.log('close');
//     var elNav = document.querySelector('.nav-container');
//     elNav.hidden = true;
// } 

// function openNav() {
//     var elNav = document.querySelector('.nav-container');
//     elNav.hidden = false;
// }
