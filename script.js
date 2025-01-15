// Theme Toggle Script
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // Change the icon to match the theme
    if (body.classList.contains('dark-theme')) {
        themeToggle.innerHTML = '🌞';  // Switch to Sun (Light theme)
    } else {
        themeToggle.innerHTML = '🌙';  // Switch to Moon (Dark theme)
    }
});
