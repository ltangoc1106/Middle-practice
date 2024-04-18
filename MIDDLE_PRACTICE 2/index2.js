

document.addEventListener('DOMContentLoaded', function() {
    const containerImages = document.querySelectorAll('.contact-group a');
    const mainImage = document.getElementById('avatarSwitch');
    const mainImageWidth = mainImage.width;
    const mainImageHeight = mainImage.height;
    containerImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            const source = this.getAttribute('avatarSwitch');
            document.getElementById('avatarSwitch').setAttribute('src', source);
            mainImage.setAttribute('width', mainImageWidth);
            mainImage.setAttribute('height', mainImageHeight);
        });
    });
});