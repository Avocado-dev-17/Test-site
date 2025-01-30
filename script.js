document.getElementById('theme-toggle').addEventListener('click', function() {
    const themeStyle = document.getElementById('theme-style');
    if (themeStyle.getAttribute('href') === 'light-theme.css') {
        themeStyle.setAttribute('href', 'dark-theme.css');
    } else {
        themeStyle.setAttribute('href', 'light-theme.css');
    }
});
