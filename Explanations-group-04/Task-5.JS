let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 3;

document.write(`<p><strong> ### Show ${showCount} Products </strong></p>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<p><strong> [${i + 1}] ${products[i]} </strong></p>`);
  for (let j = 0; j < showCount; j++) {
    document.write(`<p> ${colors[j]} </p>`);
  }
  document.write(`<p> ${colors.join(" | ")} </p>`);
}

// Show 3 Products

// [1] Keyboard

// Red

// Green

// Blue

// Red | Green | Blue

// [2] Mouse

// Red

// Green

// Blue

// Red | Green | Blue

// [3] Pen

// Red

// Green

// Blue

// Red | Green | Blue
