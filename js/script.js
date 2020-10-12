//
// Script code (Accordion)
//

let accordion = document.getElementsByClassName("accordion_button");
let i;

for (i = 0; i < accordion.length; i++) {
    // Esta funcion se activa al hacer 'click'
    accordion[i].addEventListener("click", function(event) {
        let acc = event.currentTarget;
        acc.classList.add("active");
        let panel = acc.nextElementSibling;
        if (panel.style.display == "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
}