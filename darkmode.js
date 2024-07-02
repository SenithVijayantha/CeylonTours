let darkMode = localStorage.getItem('darkMode');
const body = document.querySelector('body');
const darkModeToggle = document.querySelector('#custom__dark-mode-toggle');
const darkModeButton = document.querySelector('.custom__dark-mode-toggle');
const navBar = document.querySelector('nav');
const modal = document.getElementById('#booking-modal');
const customOverview = document.querySelector('.custom__overview');
const packageHeading = document.querySelector('.package__heading');
const cards = document.querySelector('.card');
const cardBodies = document.querySelectorAll('.card-body');
const faqTitle = document.querySelector('.faq__title');

const enableDarkMode = () => {
    // Body
    body.classList.add('bg-dark');

    // Nav bar
    navBar.classList.add('navbar-dark', 'bg-dark');

    // Custom Overview 
    customOverview.classList.add('custom__overview-bg-dark', 'text-light');

    // Package
    packageHeading.classList.add('text-light');

    cardBodies.forEach(function(cardBody) {
        cardBody.classList.add('bg__dark-blue', 'text-light', 'rounded-bottom');
    });

    // FAQ
    faqTitle.classList.add('text-light');

    darkModeButton.classList.remove('text-dark');
    darkModeButton.classList.add('text-light');
    localStorage.setItem('darkMode', 'enabled');
    console.log('enabled');
}

const disableDarkMode = () => {
    // Body
    body.classList.remove('bg-dark');

    // Nav bar
    navBar.classList.remove('navbar-dark', 'bg-dark');

    // Custom Overview 
    customOverview.classList.remove('custom__overview-bg-dark', 'text-light');

    // Package
    packageHeading.classList.remove('text-light');

    // FAQ
    faqTitle.classList.remove('text-light');

    cardBodies.forEach(function(cardBody) {
        cardBody.classList.remove('bg__dark-blue', 'text-light', 'rounded-bottom');
    });

    darkModeButton.classList.remove('text-light');
    darkModeButton.classList.add('text-dark');
    localStorage.removeItem('darkMode');
    console.log('disabled');
}

// Initialize dark mode based on localStorage value
if (darkMode === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    console.log('click');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
