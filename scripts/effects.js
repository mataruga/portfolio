
function grow(element){
    $(element).css({"-webkit-font-smoothing":"subpixel-antialiased","transform":"perspective(1px) translateZ(0)","-webkit-transition-duration":".1s","-webkit-transform":"scale(1.05)","transform":"scale(1.05)"});
}

function shrink(element){
    $(element).css({"-webkit-font-smoothing":"subpixel-antialiased","transform":"perspective(1px) translateZ(0)","-webkit-transition-duration":".1s","-webkit-transform":"scale(.8)","transform":"scale(.8)","opacity":"0.4"});
}

function returnsize(element){
    $(element).css({"-webkit-font-smoothing":"subpixel-antialiased","transform":"perspective(1px) translateZ(0)","-webkit-transition-duration":".1s","-webkit-transform":"scale(1)","transform":"scale(1)","opacity":"1"});
}