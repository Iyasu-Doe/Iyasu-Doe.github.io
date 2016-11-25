//variables:
var rotdiv;
var rotdiv2;
var maintext;
var endtext;
var bottomdiv;

//onload function
window.addEventListener('load',function(){

//declaring dom elements
rotdiv = document.getElementById('rotdiv');
rotdiv2 = document.getElementById('rotdiv2');
maintext = document.getElementById('maintext');
endtext = document.getElementById('endtext');
bottomdiv = document.getElementById('bottomdiv');

//enact style changes
style();

window.addEventListener('resize',style);
});


function style(){
var wx = window.innerWidth;
var wy = window.innerHeight;

//gets the thinner value
var thinner = (wx>wy)?wy:wx;

//rotdiv changes
rotdiv.style.height = Math.round(thinner/2)+"px";
rotdiv.style.width = rotdiv.style.height;
rotdiv2.style.height = Math.round(thinner/2)+"px";
rotdiv2.style.width = rotdiv.style.height;

rotdiv.style.top = Math.round((wy/2)-(thinner/4))+"px";
rotdiv.style.left = Math.round((wx/2)-(thinner/4))+"px";
rotdiv2.style.top = Math.round((wy/2)-(thinner/4))+"px";
rotdiv2.style.left = Math.round((wx/2)-(thinner/4))+"px";

//setting the bottom banner text to the right location
//bottomdiv.style.top=

}

