
function grow(element){
    $(element).css({"-webkit-font-smoothing":"subpixel-antialiased","transform":"perspective(1px) translateZ(0)","-webkit-transition-duration":".1s","-webkit-transform":"scale(1.05)","transform":"scale(1.05)"});
}

function shrink(element){
    $(element).css({"-webkit-font-smoothing":"subpixel-antialiased","transform":"perspective(1px) translateZ(0)","-webkit-transition-duration":".1s","-webkit-transform":"scale(.8)","transform":"scale(.8)","opacity":"0.4"});
}

function returnsize(element){
    $(element).css({"-webkit-font-smoothing":"subpixel-antialiased","transform":"perspective(1px) translateZ(0)","-webkit-transition-duration":".1s","-webkit-transform":"scale(1)","transform":"scale(1)","opacity":"1"});
}

function greenlight(element){
    $(element).css({"background":"#53DD6C"});
}
function languagecol(element){
    $(element).css({"background":"#383D3B"});
}
function rolecol(element){
    $(element).css({"background":"#5C605E"});
}
function softwarecol(element){
    $(element).css({"background":"#4A4E4C"});
}