


document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var button = document.getElementById('fixedButton');
        if (window.pageYOffset > window.innerHeight) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
});