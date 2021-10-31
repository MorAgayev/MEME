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
    const elCanvasContainer = document.querySelector('.canvas-container')
    elCanvasContainer.addEventListener('resize', resizeCanvas);
    // mouseEvent()
    renderGallery();
    createMeme();
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
    document.querySelector('.memes').hidden = true;
    var elCanvasPage = document.querySelector('.canvas');
    elCanvasPage.hidden = true;
    var elHomePage = document.querySelector('.home');
    elHomePage.hidden = false;
    var elGallery = document.querySelector('.gallery');
    elGallery.hidden = true;
}

