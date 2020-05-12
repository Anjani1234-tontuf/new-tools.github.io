function Title() {
var a = document.getElementById('generatedtitle').innerHTML = ' < title >'+ document.getElementById('title').value + ' < / title >';
}
function Description() {
var b = document.getElementById('generateddescription').innerHTML = ' < meta name = " description "   content = " '+ document.getElementById('description').value + ' " > ';
}
function Author() {
var c = document.getElementById('generatedauthor').innerHTML = ' < meta name = " author  "   content = " '+ document.getElementById('author').value + ' " > ';
}
