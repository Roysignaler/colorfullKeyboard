const buttons = document.querySelectorAll('.character');
const counterDisplay = document.getElementById('count');
let counter = 0;

const colorGradients = [
    'linear-gradient(220.55deg, #FFED46 0%, #FF7EC7 100%)',
    'linear-gradient(220.55deg, #8FFF85 0%, #39A0FF 100%)',
    'linear-gradient(220.55deg, #DD7BFF 0%, #FF6C6C 100%)',
    'linear-gradient(220.55deg, #FF0000 0%, #470000 100%)'
];

function getRandomGradient() {
    return colorGradients[Math.floor(Math.random() * colorGradients.length)];
}

// Function to animate a button
const animateButton = (id) => {
    const button = document.getElementById(id);
    if (button) {
        button.style.background = getRandomGradient();
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 400); // Duration of the animation
        console.log(`Button ${id} clicked`);

        // Increment the counter and update the display
        counter++;
        counterDisplay.textContent = counter;
    }
};

// Event listener for each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        animateButton(button.id);
    });
});

// Keydown event listener
window.addEventListener('keydown', (event) => {
    let keyId;

    switch (event.key) {
        case " ":
            keyId = "space";
            break;
        case "Enter":
            keyId = "enter";
            break;
        case "Shift":
            keyId = event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT ? "shiftRight" : "shift";
            break;
        case "Control":
            keyId = event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT ? "ctrlRight" : "ctrl";
            break;
        case "Alt":
            keyId = event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT ? "altGr" : "alt";
            break;
        case "F1":
        case "F2":
        case "F3":
        case "F4":
        case "F5":
        case "F6":
        case "F7":
        case "F8":
        case "F9":
        case "F10":
        case "F11":
        case "F12":
            keyId = event.key;
            break;
        case "+":
            keyId = "plus";
            break;
        case "-":
            keyId = "minus";
            break;
        case ",":
            keyId = ",";
            break;
        case ".":
            keyId = ".";
            break;
        default:
            keyId = event.key.toUpperCase(); // Handle other alphanumeric keys and characters
    }

    animateButton(keyId);
});
