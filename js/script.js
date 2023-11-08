window.onload = function () {
    /* global document */
    // Get the modal
    var modal = document.getElementById("pgpModal");

    // Get the button that opens the modal
    var btn = document.getElementById("ModalBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    //window.onclick = function(event) {
    //  if (event.target == modal) {
    //    modal.style.display = "none";
    //  }
    //}

    function isDesktop() {
        return window.innerWidth >= 1079;
    }

    // Please, reload the page if it doesn't works properly <3
    // See the console to check the number of <hr> tags

    let hrElement;
    let counter = 100;
    if (isDesktop()) {
    for (let i = 0; i < counter; i++) {
        hrElement = document.createElement("HR");
        if (i == counter - 1) {
            hrElement.className = "thunder";
        } else {
            hrElement.style.left = Math.floor(Math.random() * window.innerWidth - 300) + "px";
            hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
            hrElement.style.animationDelay = Math.random() * 5 + "s";
        }
        document.body.appendChild(hrElement);
    }
}
console.log(
    "There are " +
    document.querySelectorAll("hr").length +
    " <hr> tags in this project :)"
);



document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            // do this
            console.log('Checked');
        } else {
            // do that
            console.log('Not checked');
        }
    });
});
}
