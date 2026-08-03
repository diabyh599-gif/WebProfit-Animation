document.addEventListener("DOMContentLoaded", () => {

    const briefcase = document.getElementById("briefcase");
    const form = document.getElementById("register-container");

    // Faire apparaître la mallette
    setTimeout(() => {
        briefcase.classList.add("show");
    }, 500);

    // Afficher le formulaire ensuite
    setTimeout(() => {
        form.classList.add("show");
    }, 1800);

});