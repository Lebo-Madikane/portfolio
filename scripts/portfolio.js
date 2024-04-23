const mobileMenu = document.querySelector('.mobileMenu');
const openMenu = document.querySelector('.openMenu');
const originalButtonText = openMenu.textContent;

openMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (openMenu.textContent === '.X.') {
        close(); // Call the close function
        // Restore original text of the button
        openMenu.textContent = originalButtonText;
    } else {
        openMenu.textContent = '.X.'; // Change text to "X"
        show(); // Call the show function
    }
}

function show() {
    mobileMenu.style.display = 'flex';
    mobileMenu.style.right = '0';
}

function close() {
    mobileMenu.style.right = '-100vh';
}