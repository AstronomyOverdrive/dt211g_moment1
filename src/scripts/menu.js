"use strict";

// Get elements
const menuButton = document.getElementById("menu-btn");
const navMenu = document.getElementById("dropdown");

// Current menu state
let menuOpen = false;

function toggleMenu(){
    menuOpen = !menuOpen; // Toggle bool
    if (menuOpen){ // Set elements display state
        navMenu.style.display = "block";
    } else {
        navMenu.style.display = "none";
    }
}

// Event listener
menuButton.addEventListener("click", toggleMenu);
