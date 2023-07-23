const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

let mouseDown = false
document.body.onmousedown = () => (mouseOut = true)
document.body.onmouseup = () => (mouseOut = false)


// Get the container Grid in your HTML 
const gridElement = document.getElementById("grid")

// Function to create a grid of Square divs
function gridCreation (gridSize) {
    // Calculate the total number of Squares in the grid
    const totalSquares = gridSize * gridSize

    // Set the grid style on the container to display the squares in a grid format
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    // Loop to create the individual Squares & append them to the container
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div")
        // Add style to your Squares 
        square.classList.add("grid-square")
        gridElement.appendChild(square)
        // Set an Hover effect on the Squares when your mouse enters a div and ends when your mouse leaves it. //
        square.addEventListener("mouseover", changeColor);
        square.addEventListener("mouseout", changeColor);
    

    }}

// Function to change the Colour
function changeColor(e) {
    // Get the current colour of the square
    let currentColour = e.target.style.backgroundColor;
    
    // Generate a random number between 0 and 255 for each RGB value
    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);

    // If the square is not already coloured, change the colour randomly
    if (currentColour === "") {
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === "color") {
        e.target.style.backgroundColor = currentColour
    }
    else if (currentMode === "eraser") {
        e.target.style.backgroundColor = DEFAULT_COLOR
    }
}


// Function to Clear the Grid
function clearGrid() {
    // Remove all the Squares from the container
    grid.innerHTML = ""
}

gridCreation(16);


