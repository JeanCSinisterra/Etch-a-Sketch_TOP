const DEFAULT_COLOR = "#59d509"
const DEFAULT_MODE = "color"
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


// Get the container Grid in your HTML 
const gridElement = document.getElementById("grid")

// Function to create a grid of Square divs
function gridCreation (currentSize) {
    let totalSquares = currentSize * currentSize

    // Set the grid style on the container to display the squares in a grid format
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;

    // Loop to create the individual Squares & append them to the container
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div")
        // Add style to your Squares 
        square.classList.add("grid-square")
        gridElement.appendChild(square)
        // Set an Hover effect on the Squares when your mouse enters a div and ends when your mouse leaves it. //
        square.addEventListener("mouseover", changeColor);
        square.addEventListener("mousedown", changeColor);
    }}

// Function to change the Colour
function changeColor(e) {
    // If the square is not already coloured, change the colour randomly
    if (e.type === "mouseover" && !mouseDown) return
    if (currentMode === "rainbow") {
        // Generate a random number between 0 and 255 for each RGB value
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === "color") {
        e.target.style.backgroundColor  = currentColor
    }
    else if (currentMode === "clear") {
        e.target.style.backgroundColor = "#fefe"
    }
}

// Get the Buttons in your HTML
const colorPicker = document.getElementById("colorPicker");
const colorBtn = document.getElementById("colorBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const clearBtn = document.getElementById("clearBtn");

// Add Event Listeners to those Buttons. 
colorPicker.oninput = (e) => setCurrentColor(e.target.value)
colorBtn.onclick = () => setCurrentMode('color')
rainbowBtn.onclick = () => setCurrentMode('rainbow')

clearBtn.onclick = () => reloadGrid()


// Function to Set Current Color
function setCurrentColor(newColor) {
    currentColor = newColor
}

// function to Set Current Mode
function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
}

// Activate button Function
function activateButton(newMode) {
    if (currentMode === "rainbow") {
        rainbowBtn.classList.remove("active")
    } else if (currentMode === "color") {
        colorBtn.classList.remove("active")
    } else if (currentMode === "clear") {
        clearBtn.classList.remove("active")
    }

    if (newMode === "rainbow") {
        rainbowBtn.classList.add("active")
    } else if (newMode === "color") {
        colorBtn.classList.add("active")
    } else if (newMode === "clear") {
        clearBtn.classList.add("active")
    }
}

// Function to Reload the Grid
function reloadGrid() {
    clearGrid()
    gridCreation(currentSize)
}

// Function to Clear the Grid
function clearGrid() {
    // Remove all the Squares from the container
    grid.innerHTML = ""
}

window.onload = () => {
    gridCreation(DEFAULT_SIZE)
    activateButton(DEFAULT_MODE)
}

