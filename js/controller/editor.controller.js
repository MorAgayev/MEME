'use strict'
function updateCanvas() {
    gCtx.drawImage(gImage, 0,0, gElCanvas.width, gElCanvas.height); 
    gMeme.lines.forEach(line => {
        drawText(line)
        if(line.id === gMeme.selectedLineIdx) {
            var lineHeight = gCtx.measureText(line).actualBoundingBoxAscent;
            var lineWidth = gCtx.measureText(line.txt).width;
            setRect(gElCanvas.width/2-lineWidth,line.location.y-lineHeight-5, lineWidth*2, lineHeight+10);
        }
    })
}

function onImgInput(ev) {
    loadImageFromInput(ev, updateCanvas)
}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader()

    reader.onload = function (event) {
        var img = new Image()
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result
        gImage = img
    }
    reader.readAsDataURL(ev.target.files[0])
}


function onSaveMeme() {
    gMemes.push(gMeme);
    var imageUrl = gElCanvas.toDataURL('image/jpeg');
    setMemesImgs(gMeme, imageUrl);
    createMeme();
    openGallery();
    renderMemes();
}

function downloadMeme(elLink) {
    var imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function setRect(x,y,xEnd, yEnd) {
    gCtx.strokeStyle = 'black'
    gCtx.beginPath()
    gCtx.rect(x,y,xEnd, yEnd);
    gCtx.stroke()
}

function onDeleteLine() {
    deleteLine()
    onSwitchLines()
    updateCanvas()
}

function onAddLine() {
    addLine();
    onSwitchLines()
    updateCanvas();
}

function onChangeAlign(choise) {
    setAlign(choise);
    updateCanvas();
}

function onChangeFont(fontType) {
    setFontFamily(fontType);
    updateCanvas();
}

function onChangeTxtColor(color) {
    setTxtColor(color)
    updateCanvas()
}

function onChangeLocation(value) {
    setLocationY(value);
    updateCanvas()
}

function onSwitchLines() {
    setSelectedLine();
    document.querySelector('.txt-input').value = gMeme.lines[gMeme.selectedLineIdx].txt;
    updateCanvas()
}

function onChangeFontSize(choice) {
    var size = setFontSize(choice);
    document.querySelector('.font-size-editor span').innerText = size;
    updateCanvas();
}

function onChangeTxt(txt) { 
    setTxt(txt)
    updateCanvas()
}

// function drawText(text,x,y, fontSize, color, align) {
//     gCtx.font = fontSize;
//     gCtx.fillStyle = color;
//     gCtx.textAlign = align;
//     gCtx.fillText(text, x, y);
//     gCtx.strokeText(text, x, y);
// }

function drawText(line) {
    const { size, color, align, txt, fontFamily } = line;
    const { x, y } = line.location;
    gCtx.font = size+'px ' + fontFamily;
    gCtx.fillStyle = color;
    gCtx.textAlign = align;
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);
}



function editTxtStyle() {
    var currLine = gMeme.lines[gMeme.selectedLineIdx];
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = currLine.borderColor;
    gCtx.lineJoin = 'round';
    gCtx.imageSmoothingQuality= 'high'
}

function drawImg(src) {
    var img = new Image();
    img.src = src;
    img.onload = () => {
      gCtx.smoothingQuality = 'high';
      gImage = img;
      updateCanvas()
    };
}

function onSelectImg(id) {
    setImgMeme(id);
    drawImg(getImg(id));
    var elCanvasPage = document.querySelector('.canvas');
    elCanvasPage.hidden = false;
    var elGallery = document.querySelector('.gallery');
    elGallery.hidden = true;
    document.querySelector('.memes').hidden = true;
}
