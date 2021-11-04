'use strict'
var gElCanvas;
var gCtx;
var gId = 0;
var gMeme;
var gMemes= [];

function createMeme() {
    gMeme = {
        selectedLineIdx:0,
        selectedImgId:1,
        lines: [
            {
                id: 0,
                txt:'',
                size:40,
                location:{x:gElCanvas.width / 2, y:50},
                align:'center',
                color: 'white',
                borderColor:'black',
                fontFamily:'IMPACT',
                baseLine:'top', 
            },
            {
                id: 1,
                txt:'',
                location:{x:gElCanvas.width / 2, y: (500 - 50)},
                size:40,
                align:'center',
                color: 'white',
                borderColor:'black',
                fontFamily:'IMPACT',
                baseLine:'bottom',
            }
        ]
    }
}

function deleteLine() {
    var lineIdx = gMeme.selectedLineIdx;
    console.log(lineIdx,'lineIdx');
    gMeme.lines.splice(lineIdx,1);
}

function setAlign(choise) {
    _getSelectedLine().align = choise;
}

function addLine() {
    var newLine = {
            id: gMeme.lines.length,
            txt:'new line',
            size:40,
            location:{x:20, y:200},
            align:'center',
            color: 'white',
            borderColor:'black',
            fontFamily:'IMPACT',
            baseLine:'middle',
        }
    gMeme.lines.push(newLine);
}

function setFontFamily(fontType) {
    _getSelectedLine().fontFamily = fontType;
}

function setTxtColor(color) {
    _getSelectedLine().color = color
}

function setLocationY(value) {
    _getSelectedLine().location.y = value
}

function  setSelectedLine() {
    if(gMeme.selectedLineIdx < gMeme.lines.length-1) {
        gMeme.selectedLineIdx++;
        
    } else {
        gMeme.selectedLineIdx = 0;
    }
}

function setFontSize(choice) {
    if(choice == 'increase') return _getSelectedLine().size++;
    if(choice == 'decrease') return _getSelectedLine().size--;
}

function setTxt(txt) {
    _getSelectedLine().txt =txt;
}

function _getSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function getImg(id) {
    var img = gImgs.find(img => img.id === id);
    return img.url
}

function setImgMeme(id) {
    gMeme.selectedImgId = id;
}