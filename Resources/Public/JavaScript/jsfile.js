// Open the main menu
document.getElementById("open-menu").addEventListener("click", function() {
    document.getElementById("menu").classList.add("active");
});

// Close the main menu using the close button
document.getElementById("close-button").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("active");
});

// Add click event listeners to switch between levels
document.querySelectorAll('[data-target]').forEach(function(item) {
    item.addEventListener('click', function() {
        // Hide all menus and show the targeted submenu
        document.querySelectorAll('ul').forEach(ul => ul.style.display = 'none');
        document.getElementById(item.dataset.target).style.display = 'block';
    });
});

// Back buttons to return to parent menus
document.querySelectorAll('.back-button').forEach(function(button) {
    button.addEventListener('click', function() {
        // Hide all menus and show the parent menu
        document.querySelectorAll('ul').forEach(ul => ul.style.display = 'none');
        document.getElementById(button.dataset.target).style.display = 'block';
    });
});
