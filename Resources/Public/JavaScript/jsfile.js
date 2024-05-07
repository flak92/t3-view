// Toggle visibility of menus
function toggleMenus(hideSelectors, showSelector) {
    document.querySelectorAll(hideSelectors).forEach((ul) => (ul.style.display = 'none'));
    document.getElementById(showSelector).style.display = 'block';
}

// Open the main menu
document.getElementById('open-menu').addEventListener('click', () => {
    document.getElementById('menu').classList.add('active');
});

// Close the main menu with close button
document.getElementById('close-button').addEventListener('click', () => {
    document.getElementById('menu').classList.remove('active');
});

// Switching between levels
document.getElementById('menu').addEventListener('click', (event) => {
    const target = event.target;
    const listItem = target.closest('[data-target]');

    if (listItem) {
        toggleMenus('ul', listItem.dataset.target);
    } else if (target.classList.contains('back-button')) {
        toggleMenus('ul', target.dataset.target);
    }
});
