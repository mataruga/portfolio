var latest;

function grow(element) {
    $(element).css({
        "-webkit-font-smoothing": "subpixel-antialiased",
        "transform": "perspective(1px) translateZ(0)",
        "-webkit-transition-duration": ".1s",
        "-webkit-transform": "scale(1.05)",
        "transform": "scale(1.05)"
    });
}

function shrink(element) {
    $(element).css({
        "-webkit-font-smoothing": "subpixel-antialiased",
        "transform": "perspective(1px) translateZ(0)",
        "-webkit-transition-duration": ".1s",
        "-webkit-transform": "scale(.8)",
        "transform": "scale(.8)",
        "opacity": "0.4"
    });
}

function returnsize(element) {
    $(element).css({
        "-webkit-font-smoothing": "subpixel-antialiased",
        "transform": "perspective(1px) translateZ(0)",
        "-webkit-transition-duration": ".1s",
        "-webkit-transform": "scale(1)",
        "transform": "scale(1)",
        "opacity": "1"
    });
}

function greenlight(element) {
    $(element).css({
        "background": "#53DD6C"
    });
}

function languagecol(element) {
    $(element).css({
        "background": "#383D3B"
    });
}

function rolecol(element) {
    $(element).css({
        "background": "#5C605E"
    });
}

function softwarecol(element) {
    $(element).css({
        "background": "#4A4E4C"
    });
}

function collapsedbanner(project) {
    latest = project;
    var speed = "fast";
    $("div#hide1").slideToggle(speed);
    $("div#keep1").slideToggle(speed);
    $("div#keep2").slideToggle(speed);
    switch (project){
        case 'asteroids':
            $("div#asteroids").slideToggle(speed);
            break;
        case 'cat':
            $("div#cat").slideToggle(speed);
            break;
        case 'chess':
            $("div#chess").slideToggle(speed);
            break;
        case 'perception':
            $("div#perception").slideToggle(speed);
            break;
        case 'umbvrella':
            $("div#umbvrella").slideToggle(speed);
            break;
        case 'zombies':
            $("div#zombies").slideToggle(speed);
            break;
        case 'museum':
            $("div#museum").slideToggle(speed);
            break;
        case 'labs':
            $("div#labs").slideToggle(speed);
            break;
    }
    
}

function switchproj(project){
    var speed = "fast";
    currentproj = "div#" + latest;
    $(currentproj).slideToggle(speed);
    latest = project;
        switch (project){
        case 'asteroids':
            $("div#asteroids").slideToggle(speed);
            break;
        case 'cat':
            $("div#cat").slideToggle(speed);
            break;
        case 'chess':
            $("div#chess").slideToggle(speed);
            break;
        case 'perception':
            $("div#perception").slideToggle(speed);
            break;
        case 'umbvrella':
            $("div#umbvrella").slideToggle(speed);
            break;
        case 'zombies':
            $("div#zombies").slideToggle(speed);
            break;
        case 'museum':
            $("div#museum").slideToggle(speed);
            break;
        case 'labs':
            $("div#labs").slideToggle(speed);
            break;
    }
}

