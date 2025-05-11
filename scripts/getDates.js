// Get the current year
const currentYear = new Date().getFullYear();

// Get the element where the copyright year will be displayed
const footerParagraph = document.querySelector("footer p:first-of-type");
footerParagraph.innerHTML = `&copy; ${currentYear} Carlos De Avila - Mexico City`;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Display the last modified date in the second paragraph of the footer
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last Modification: ${lastModified}`;



// Hamburger menu toggle functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Toggle the 'show' class on the nav element when hamburger is clicked
hamburger.addEventListener('click', () => {
    const expanded = nav.classList.toggle('show');
    hamburger.textContent = expanded ? '✖' : '≡';
    hamburger.setAttribute('aria-expanded', expanded);
});


const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});