const mobileMenu = document.querySelector('.mobileMenu');
const openMenu = document.querySelector('.openMenu');
const originalButtonText = openMenu.textContent;

// Change text content to use HTML for styling
openMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    const closedText = originalButtonText;
    const openText = '<span style="color:black;">.</span>X<span style="color:black;">.</span>';

    if (openMenu.innerHTML === openText) { // When menu is open, close it
        close(); // Call the close function
        openMenu.innerHTML = closedText; // Restore original text
    } else { // When menu is closed, open it
        openMenu.innerHTML = openText; // Change text with colored dots
        show(); // Call the show function
    }
}

function show() {
    mobileMenu.style.display = 'flex';
    mobileMenu.style.right = '0'; // Show the menu by adjusting its position
}

function close() {
    mobileMenu.style.right = '-100vh'; // Hide the menu by moving it out of view
}