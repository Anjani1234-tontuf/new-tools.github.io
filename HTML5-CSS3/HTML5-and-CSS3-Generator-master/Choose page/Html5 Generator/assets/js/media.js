
//video
function Mp4video(){
var a = document.getElementById('generatedmp4').innerHTML = ' < source  src = " '+ document.getElementById('mp4').value + '" type = " audio / mp4 " >';
}
function Ogvvideo(){
var b = document.getElementById('generatedogv').innerHTML = ' < source  src = " '+ document.getElementById('ogv').value + '" type = " audio / ogg " >';
}
function WebMvideo(){
var c = document.getElementById('generatedwebm').innerHTML = ' < source  src = " '+ document.getElementById('webm').value + '" type = " audio / webm " >';
}
function Widthvideo(){
var d = document.getElementById('generatedwidth').innerHTML = '  width = " '+ document.getElementById('width').value + ' px " ';
}
function Heightvideo(){
var f = document.getElementById('generatedheight').innerHTML = '  height = " '+ document.getElementById('height').value + ' px " ;';
}
function Video(mp4,ogv,webm){
var mp4 = document.getElementById('mp4').innerHTML = '   < source  src =  "  '+ document.getElementById('mp4').value + '" type = " audio / mp4 " >   ';
var ogv = document.getElementById('ogv').innerHTML = ' < source  src = " '+ document.getElementById('ogv').value + '" type = " audio / ogg " >';
var webm = document.getElementById('webm').innerHTML = ' < source  src = " '+ document.getElementById('webm').value + '" type = " audio / webm " > < / video >';
var width=document.getElementById('width').innerHTML = ' <video width = " '+ document.getElementById('width').value + ' px" ;';
var height=document.getElementById('height').innerHTML = '  height = " '+ document.getElementById('height').value + ' px" >';
alert( width + " " + height+ " "+mp4 + "   " + ogv +" " + webm  );
}
//audio
function Mp3audio(){
var dd = document.getElementById('generatedmp3audio').innerHTML = ' < source  src = " '+ document.getElementById('mp3').value + '" type = " audio / mpeg " >';
}
function Oggaudio(){
var e = document.getElementById('generatedogg').innerHTML = ' < source  src = " '+ document.getElementById('ogg').value + '" type = " audio / ogg " >';
}
function WAV(){
var fg = document.getElementById('generatedwav').innerHTML = ' < source  src = " '+ document.getElementById('wav').value + '" type = " audio / wav " >';
}
function Audio(mp3,ogg,wav){
var mp3 = document.getElementById('mp3').innerHTML = '  <audio controls> < source  src =  "  '+ document.getElementById('mp3').value + '" type = " audio / mp3 " > ;  ';
var ogg = document.getElementById('ogg').innerHTML = ' < source  src = " '+ document.getElementById('ogg').value + '" type = "  audio / ogg " >';
var wav = document.getElementById('wav').innerHTML = ' < source  src = " '+ document.getElementById('wav').value + '" type = " audio / wav " > < / audio >';
alert( mp3 + "   " + ogg +" " + wav );
}
//images
function URLimage(){
var u = document.getElementById('generatedurlimage').innerHTML = ' < img  src = " '+ document.getElementById('url').value + ' " >';
}
function Altimage(){
var g = document.getElementById('generatedalt').innerHTML = ' alt = " '+ document.getElementById('alt').value + ' ";';
}
function Widthi(){
var d = document.getElementById('generatedwidthi').innerHTML = '  width = " '+ document.getElementById('widthi').value + ' px " ';
}
function Heighti(){
var f = document.getElementById('generatedheighti').innerHTML = '  height = " '+ document.getElementById('heighti').value + ' px " ';
}
function Image(url,alt,widthi,heighti){
var url = document.getElementById('generatedurlimage').innerHTML = ' < img  src = " '+ document.getElementById('url').value + ' " ';
var alt = document.getElementById('generatedalt').innerHTML = ' alt = " '+ document.getElementById('alt').value + ' "';
var widthi=document.getElementById('widthi').innerHTML = '  width = " '+ document.getElementById('widthi').value + ' px" ';
var heighti=document.getElementById('heighti').innerHTML = '  height = " '+ document.getElementById('heighti').value + ' px" >';
alert( url + "   " + alt +" " + widthi + " " + heighti );
}
