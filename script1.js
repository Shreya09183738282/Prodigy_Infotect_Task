window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    const scrolled = window.scrollY > 20;
    navbar.style.backgroundColor = scrolled ? "#333" : "transparent";
});
