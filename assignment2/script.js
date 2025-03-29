document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector('.btn');
    const navLinks = document.querySelector('.nav_links');

    btn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active"); 
        }
    });
});
