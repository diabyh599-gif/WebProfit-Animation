document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("register-container");
    const briefcase = document.getElementById("briefcase");

    briefcase.style.transform = "scale(0)";

    setTimeout(() => {
        briefcase.style.transform = "scale(1)";
    }, 500);

    setTimeout(() => {
        form.classList.add("show");
    }, 1800);

});