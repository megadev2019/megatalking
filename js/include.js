//@ts-ignore
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                        window.onscroll = function () {
                            scrollFunction()
                        };
                        window.onclick = function () {
                            clickFunction()

                        };

                        window.onload = function () {
                            showEnrollment()
                        }

                        window.onresize = function () {
                            showEnrollment()
                        }

                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

includeHTML()



function scrollFunction() {

    if (document.getElementById('navbarSupportedContent').classList.value.indexOf('show') != -1) {
        document.getElementById('navbar-btn').click()
    }

}

function clickFunction() {

    if (document.getElementById('navbarSupportedContent').classList.value.indexOf('show') != -1) {
        document.getElementById('navbar-btn').click()
    }
}

function showEnrollment() {

    if (screen.width >= 992) {
        document.getElementById('enrollment-show').style.display = 'inherit'
        document.getElementById('enrollment-hidden').style.display = 'none'
    } else {
        document.getElementById('enrollment-show').style.display = 'none'
        document.getElementById('enrollment-hidden').style.display = 'inherit'
    }
}


function showEnrollmentClick() {
    if (document.getElementById('navbarSupportedContent').classList.value.indexOf('show') != -1) {
        document.getElementById('enrollment-show').style.display = 'none'
        document.getElementById('enrollment-hidden').style.display = 'inherit'
    } else {
        document.getElementById('enrollment-show').style.display = 'inherit'
        document.getElementById('enrollment-hidden').style.display = 'none'
    }
}