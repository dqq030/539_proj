function filter(n) {
    if (n == 1) {
        var x = document.getElementsByClassName("bachelorette");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        var y = document.getElementsByClassName("bachelor");
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "block";
        }
    }
    else if (n == 2) {
        var x = document.getElementsByClassName("bachelor");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        var y = document.getElementsByClassName("bachelorette");
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "block";
        }
    }
    else {
        var x = document.getElementsByClassName("bachelor");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "block";
        }
        var y = document.getElementsByClassName("bachelorette");
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "block";
        }
    }
}


{/* <script> */}
let lastClickedButton = null;

function updateLastClicked(button) {
            if (lastClickedButton !== null) {
    lastClickedButton.classList.remove('clicked');
            }
lastClickedButton = button;
lastClickedButton.classList.add('clicked');
        }
// </script>