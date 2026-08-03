document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("register-container");
    const briefcase = document.getElementById("briefcase");

    setTimeout(() => {
        briefcase.classList.add("show");
    }, 500);

    setTimeout(() => {
        form.classList.add("show");
    }, 1800);

});