// Magic Color Picker
document.getElementById("colorPicker").addEventListener("input", function(event) {
    document.body.style.backgroundColor = event.target.value;
});

// Change text or color when button is clicked
document.getElementById("changeBtn").addEventListener("click", function() {
    this.textContent = "You clicked me!";
    this.style.backgroundColor = "lightcoral";
});

// Change background color on hover
document.getElementById("hoverBtn").addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightgreen";
});

document.getElementById("hoverBtn").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
});

// Detect keypress in input field
document.getElementById("keypressInput").addEventListener("keydown", function(event) {
    console.log(`You pressed the ${event.key} key`);
});

// Reveal secret on double-click
document.getElementById("secretArea").addEventListener("dblclick", function() {
    this.style.display = "none"; // Hide the secret
});

// Slideshow Navigation
const images = [
    "https://via.placeholder.com/300?text=Image+1",
    "https://via.placeholder.com/300?text=Image+2",
    "https://via.placeholder.com/300?text=Image+3"
];

let currentImageIndex = 0;

document.getElementById("nextBtn").addEventListener("click", function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("slideshow").src = images[currentImageIndex];
});

document.getElementById("prevBtn").addEventListener("click", function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById("slideshow").src = images[currentImageIndex];
});

// Shape Shifting Button
let shapeIndex = 0;
const shapeBtn = document.getElementById("shapeShiftBtn");

shapeBtn.addEventListener("click", function() {
    shapeIndex = (shapeIndex + 1) % 3;

    // Remove existing classes
    shapeBtn.classList.remove("circle", "square", "triangle");

    // Add new shape class
    if (shapeIndex === 0) {
        shapeBtn.classList.add("circle");
    } else if (shapeIndex === 1) {
        shapeBtn.classList.add("square");
    } else {
        shapeBtn.classList.add("triangle");
    }
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields!");
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    alert("Form submitted successfully!");
});

// Hidden Easter Egg with keyboard shortcut
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === "E") {
        document.getElementById("easterEgg").style.display = "block";
        document.getElementById("confetti").style.display = "block";  // Show the confetti
    }
});

