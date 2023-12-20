const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.querySelector('.responzive-nav').classList.toggle('nav-open');

    document.querySelector('.nav-fa-spin').classList.toggle('fa-spin');

});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.responzive-nav').classList.remove('nav-open');
        document.querySelector('.nav-fa-spin').classList.remove('fa-spin');


    })
})

function handleGalleryHover(index, galleryId) {
    console.log('Button Hovered!', index);

    // Get the parent container
    const parentContainer = document.getElementById(galleryId);

    // Get all child elements of the parent container
    const childElements = parentContainer.children;

    // Loop through the child elements
    for (let i = 0; i < childElements.length; i++) {
        // Set opacity based on the index
        childElements[i].style.opacity = i === index ? 1 : 0;
    }

    // Add your additional JavaScript logic here
}
