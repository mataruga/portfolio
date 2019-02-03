var latest;
var buttonsclicked = [];

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


function collapsedbanner(project) {
    latest = project;
    var speed = "fast";
    $("div#hide1").slideToggle(speed);
    $("div#keep1").slideToggle(speed);
    $("div#keep2").slideToggle(speed);
    switch (project) {
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

function switchproj(project) {
    var speed = "fast";
    currentproj = "div#" + latest;


    if (project != latest) {
        latest = project;
        $(currentproj).slideToggle(speed);
        switch (project) {
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

    } else {
        return;
    }
}

function highlight(name) {
    var filter = "";
    //regex for class intersection
    var n = "." + name.className;
    var m = n.replace(" ", ".");
    //Check if already clicked
    if ($(m).css("background-color") != "rgb(83, 221, 108)") {
        buttonsclicked.push(name.className.split(" ")[1]);
        greenlight(m);
        $(".proj").each(function () {
            if (!$(this).hasClass(name.className.split(" ")[1])) {
                $(this).css({
                    "opacity": ".05"
                });
            }
        });
    } else {
        removeElement(buttonsclicked, name.className.split(" ")[1]);
        if (m.includes("languages")) {
            languagecol(m);
        } else if (m.includes("roles")) {
            rolecol(m);
        } else {
            softwarecol(m);
        }
        jQuery.each(buttonsclicked, function (i, val) {
            filter += "."+val;
        });
        filter = $.trim(filter);
        $(".proj").each(function () {
                if ($(this).is(filter)) {
                        $(this).css({
                            "opacity": "1"
                        });
                    } else {
                        $(this).css({
                            "opacity": ".05"
                        });

                    }
                });
            if (buttonsclicked.length < 1) {
                $(".proj").each(function () {
                    $(this).css({
                        "opacity": "1"
                    });
                });
            }

        }
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

    function removeElement(array, element) {
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i] == element) {
                array.splice(i, 1);
            }
        }
    }

