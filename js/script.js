var par = document.getElementsByTagName("p");
var features = document.getElementsByClassName("feature_items");
var close = function() {
    for (var i = 0; i < features.length; i++) {
        par[i].className = par[i].className.replace("selected", "select");
        features[i].classList.remove("show");
    };
};
var button1 = function() {
    if ( par[0].className == "select") {
    close();
    par[0].className = par[0].className.replace("select", "selected");
    features[0].classList.add("show");
    }
    else {
        close();
    }
    };
var button2 = function() {
    if ( par[1].className == "select") {
    close();
    par[1].className = par[1].className.replace("select", "selected");
    features[1].classList.add("show");
    }
    else {
        close();
    }
};
var button3 = function() {
    if ( par[2].className == "select") {
    close();
    par[2].className = par[2].className.replace("select", "selected");
    features[2].classList.add("show");
    }
    else {
        close();
    }
};
var button4 = function() {
    if ( par[3].className == "select") {
    close();
    par[3].className = par[3].className.replace("select", "selected");
    features[3].classList.add("show");
    }
    else {
        close();
    }
};
var button5 = function() {
    if ( par[4].className == "select") {
    close();
    par[4].className = par[4].className.replace("select", "selected");
    features[4].classList.add("show");
    }
    else {
        close();
    }
};
par[0].addEventListener ("click", button1);
par[1].addEventListener ("click", button2);
par[2].addEventListener ("click", button3);
par[3].addEventListener ("click", button4);
par[4].addEventListener ("click", button5);