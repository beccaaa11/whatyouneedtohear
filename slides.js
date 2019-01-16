var i = 0;
var images = [];
var time= 3000;

images[0] = './images/aof2.jpg';
images[1] = './images/brandnew.jpg';
images[2] = './images/silverstein.jpg';
images[3] = './images/twyimg.jpg';
images[4] = './images/thestorysofar.jpg';

function changeImg(){
document.slide.src = images[i];
    if (i < images.length-1){
        i++;
    }else {
        i=0;
    }
        setTimeout("changeImg()", time);
}

window.onload = changeImg;