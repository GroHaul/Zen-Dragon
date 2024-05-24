function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    const carouselItem = document.querySelectorAll('.carousel-item')

    banner.style.background = `url('./Asset/Character/${bg}')`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });

    carouselItem.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}

// document.addEventListener("DOMContentLoaded", function () {
//     console.log("DOM fully loaded and parsed");
//     const toggleButton = document.querySelector('.toggle-button')
//     const toggleButtonIcon = document.querySelector('.toggle-button i')
//     const dropDownMenu = document.querySelector('.dropdown-menu');
  
//     toggleButton.onclick = function () {
//         dropDownMenu.classList.toggle('open');
//         const isOpen = dropDownMenu.classList.contains('open');
  
//         toggleButtonIcon.classList = isOpen
//             ? 'fas fa-xmark'
//             : 'fas fa-bars'
//     }
//   });
