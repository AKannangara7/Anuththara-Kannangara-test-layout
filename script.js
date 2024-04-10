document.addEventListener("DOMContentLoaded", function() {
    var profileIcon = document.getElementById('profile');
    var proBox = document.getElementById('pro-box');
    var closeBtn = document.getElementById('close');
    var modeIcon = document.getElementById('mode');
    var modeBox = document.getElementById('theme');
    var hamburgerIcon = document.getElementById('hamburger');
    var menuBox = document.getElementById('menu');
    var priceBtn = document.getElementById('price');
    var priceBox = document.getElementById('price-pop-up');
    var darkBackground = document.getElementById('dark-background'); // Add this line

    // Hide the pro-box initially
    proBox.style.display = 'none';
    modeBox.style.display = 'none';
    menuBox.style.display = 'none';
    priceBox.style.display = 'none';

    //profile pop-up
    profileIcon.addEventListener('click', function(event) {
        toggleProBox();
        event.stopPropagation();
    });
    //close icon on profile pop-up
    closeBtn.addEventListener('click', function(event) {
        proBox.style.display = 'none';
        event.stopPropagation();
    });
    // Hide the pro-box when clicking outside of it, the profile icon, or the close button
    document.addEventListener('click', function(event) {
        if (!proBox.contains(event.target) && event.target !== profileIcon && event.target !== closeBtn) {
            proBox.style.display = 'none';
        }
    });

    //Light dark mode pop-up
    modeIcon.addEventListener('click', function(event) {
        toggleModeBox();
        event.stopPropagation();
    });
    // Hide the theme when clicking outside of it and the mode icon
    document.addEventListener('click', function(event) {
        if (event.target !== modeIcon) {
            modeBox.style.display = 'none';
        }
    });

    //Menu pop-up for hamburger menu
    hamburgerIcon.addEventListener('click', function(event) {
        toggleMenuBox();
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        // Hide the theme when clicking outside of it and the hamburger icon
        if (event.target !== hamburgerIcon) {
            menuBox.style.display = 'none';
        }
    });

    //Price pop-up when clicks price btn
    priceBtn.addEventListener('click', function(event) {
        togglePriceBox();
        toggleDarkBackground(); // Add this line
        event.stopPropagation();
    });

    // Hide the theme when clicking outside of it and the mode icon
    document.addEventListener('click', function(event) {
        if (event.target !== priceBtn) {
            priceBox.style.display = 'none';
            darkBackground.style.display = 'none'; // Add this line
        }
    });

    //functions to toggle pop-ups
    function toggleProBox() {
        // Toggle the display of the pro-box
        if (proBox.style.display === 'none') {
            proBox.style.display = 'block';
        } else {
            proBox.style.display = 'none';
        }
    }
    function toggleModeBox() {
        // Toggle the display of the mode-box
        if (modeBox.style.display === 'none') {
            modeBox.style.display = 'block';
        } else {
            modeBox.style.display = 'none';
        }
    }
    function toggleMenuBox() {
        // Toggle the display of the menu-box
        if (menuBox.style.display === 'none') {
            menuBox.style.display = 'block';
        } else {
            menuBox.style.display = 'none';
        }
    }
    function togglePriceBox() {
        // Toggle the display of the price-box
        if (priceBox.style.display === 'none') {
            priceBox.style.display = 'block';
        } else {
            priceBox.style.display = 'none';
        }
    }
    function toggleDarkBackground() {
        // Toggle the display of the dark background
        if (priceBox.style.display === 'none') {
            darkBackground.style.display = 'none';
        } else {
            darkBackground.style.display = 'block';
        }
    }
});
