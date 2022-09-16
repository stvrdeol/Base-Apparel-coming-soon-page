const form = document.querySelector("form");
const invalid = document.querySelector(".invalid");
const errorImg = document.querySelector(".error-img");
const input = document.querySelector("input");
form.addEventListener("submit",(event)=> {
    if (input.validity.typeMismatch || input.value=="") {
        event.preventDefault();
        errorImg.style.opacity = "1"
        invalid.style.display = "unset";
        input.style.borderColor = "hsl(0, 93%, 68%)";
    }
})
