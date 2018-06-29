var collapsEl;


window.onload = function() {
    collapsEl = document.getElementsByClassName("toggler");
    var length = collapsEl.length;
    console.log(collapsEl);
    for (var i = 0; i < length; i++) {
        collapsEl[i].addEventListener("click", function() {
            animateToggle();
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
};

function animateToggle() {
	var togglerEl = document.getElementsByClassName("toggler")[0].children;

	if (togglerEl[0].className == "toggled-top") {
		togglerEl[0].className = "";
	} else {
		togglerEl[0].className = "toggled-top";
	}

	if (togglerEl[1].className == "toggled-mid") {
		togglerEl[1].className = "";
	} else {
		togglerEl[1].className = "toggled-mid";
	}

	if (togglerEl[2].className == "toggled-bottom") {
		togglerEl[2].className = "";
	} else {
		togglerEl[2].className = "toggled-bottom";
	}

}