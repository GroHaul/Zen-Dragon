
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    const toggleButton = document.querySelector('.toggle-button')
    const toggleButtonIcon = document.querySelector('.toggle-button i')
    const dropDownMenu = document.querySelector('.dropdown-menu');
  
    toggleButton.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
  
        toggleButtonIcon.classList = isOpen
            ? 'fas fa-xmark'
            : 'fas fa-bars'
    }
  });