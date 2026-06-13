// DOM Elements
const openPopupBtn = document.getElementById("openPopupBtn");
const popupOverlay = document.getElementById("popupOverlay");
const closePopupBtn = document.getElementById("closePopupBtn");
const cancelPopupBtn = document.getElementById("cancelPopupBtn");
const confirmPopupBtn = document.getElementById("confirmPopupBtn");

// Configuration Inputs
const popupTitleInput = document.getElementById("popupTitle");
const popupMessageInput = document.getElementById("popupMessage");
const confirmTextInput = document.getElementById("confirmText");
const cancelTextInput = document.getElementById("cancelText");
const accentColorInput = document.getElementById("accentColor");
const popupWidthSelect = document.getElementById("popupWidth");
const blurAmountInput = document.getElementById("blurAmount");
const blurValueSpan = document.getElementById("blurValue");
const animationTypeSelect = document.getElementById("animationType");

// Display Elements
const popupTitleDisplay = document.getElementById("popupTitleDisplay");
const popupMessageDisplay = document.getElementById("popupMessageDisplay");
const confirmPopupBtnElement = document.getElementById("confirmPopupBtn");
const cancelPopupBtnElement = document.getElementById("cancelPopupBtn");

// Create scroll to top button (optional feature)
const scrollTopBtn = document.createElement("button");
scrollTopBtn.className = "scroll-top-btn";
scrollTopBtn.innerHTML = "↑";
scrollTopBtn.setAttribute("aria-label", "Scroll to top");
document.body.appendChild(scrollTopBtn);

// Update blur value display
blurAmountInput.addEventListener("input", function () {
  const blurValue = this.value;
  blurValueSpan.textContent = blurValue + "px";
  updateBackdropBlur(blurValue);
});

// Update backdrop blur
function updateBackdropBlur(blurValue) {
  popupOverlay.style.backdropFilter = `blur(${blurValue}px)`;
}

// Update accent color for buttons
function updateAccentColor(color) {
  const primaryButtons = document.querySelectorAll(".btn-primary");
  primaryButtons.forEach((btn) => {
    btn.style.backgroundColor = color;
  });

  const existingStyle = document.getElementById("dynamic-hover-style");
  if (existingStyle) existingStyle.remove();

  const style = document.createElement("style");
  style.id = "dynamic-hover-style";
  style.textContent = `
    .btn-primary:hover {
      background-color: ${color}dd !important;
    }
  `;
  document.head.appendChild(style);
}

// Update popup width
function updatePopupWidth(width) {
  const popupContainer = document.querySelector(".popup-container");
  popupContainer.style.width = width;
  popupContainer.style.maxWidth = width;
}

// Update animation class
function updateAnimation(animationType) {
  popupOverlay.classList.remove(
    "fade-animation",
    "slide-animation",
    "scale-animation",
  );
  popupOverlay.classList.add(`${animationType}-animation`);
}

// Update popup content from config panel
function updatePopupContent() {
  popupTitleDisplay.textContent = popupTitleInput.value;
  popupMessageDisplay.textContent = popupMessageInput.value;
  confirmPopupBtnElement.textContent = confirmTextInput.value;
  cancelPopupBtnElement.textContent = cancelTextInput.value;
}

// Live preview updates when config changes
popupTitleInput.addEventListener("input", updatePopupContent);
popupMessageInput.addEventListener("input", updatePopupContent);
confirmTextInput.addEventListener("input", updatePopupContent);
cancelTextInput.addEventListener("input", updatePopupContent);

accentColorInput.addEventListener("input", function () {
  updateAccentColor(this.value);
});

popupWidthSelect.addEventListener("change", function () {
  updatePopupWidth(this.value);
});

animationTypeSelect.addEventListener("change", function () {
  updateAnimation(this.value);
});

// Open popup with current settings
function openPopup() {
  updatePopupContent();
  updateAccentColor(accentColorInput.value);
  updatePopupWidth(popupWidthSelect.value);
  updateBackdropBlur(blurAmountInput.value);
  updateAnimation(animationTypeSelect.value);

  popupOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close popup
function closePopup() {
  popupOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Handle confirm action
function handleConfirm() {
  console.log("Confirmed:", {
    title: popupTitleDisplay.textContent,
    message: popupMessageDisplay.textContent,
    action: confirmTextInput.value,
  });

  showNotification("Action completed successfully");
  closePopup();
}

// Show temporary notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #10b981;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-family: Inter, sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    z-index: 2000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    animation: slideInRight 0.3s ease;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add animation keyframes
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(styleSheet);

// Scroll to top functionality
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Event Listeners
openPopupBtn.addEventListener("click", openPopup);
closePopupBtn.addEventListener("click", closePopup);
cancelPopupBtn.addEventListener("click", closePopup);
confirmPopupBtn.addEventListener("click", handleConfirm);

// Close popup when clicking outside
popupOverlay.addEventListener("click", function (e) {
  if (e.target === popupOverlay) {
    closePopup();
  }
});

// Escape key closes popup
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && popupOverlay.classList.contains("active")) {
    closePopup();
  }
});

// Initialize default styles
updateBackdropBlur(blurAmountInput.value);
updateAccentColor(accentColorInput.value);
updatePopupWidth(popupWidthSelect.value);
updateAnimation(animationTypeSelect.value);

// Store user preferences in localStorage
function savePreferences() {
  const preferences = {
    title: popupTitleInput.value,
    message: popupMessageInput.value,
    confirmText: confirmTextInput.value,
    cancelText: cancelTextInput.value,
    accentColor: accentColorInput.value,
    popupWidth: popupWidthSelect.value,
    blurAmount: blurAmountInput.value,
    animationType: animationTypeSelect.value,
  };
  localStorage.setItem("popupPreferences", JSON.stringify(preferences));
}

function loadPreferences() {
  const saved = localStorage.getItem("popupPreferences");
  if (saved) {
    const prefs = JSON.parse(saved);
    popupTitleInput.value = prefs.title;
    popupMessageInput.value = prefs.message;
    confirmTextInput.value = prefs.confirmText;
    cancelTextInput.value = prefs.cancelText;
    accentColorInput.value = prefs.accentColor;
    popupWidthSelect.value = prefs.popupWidth;
    blurAmountInput.value = prefs.blurAmount;
    animationTypeSelect.value = prefs.animationType;

    updatePopupContent();
    updateAccentColor(prefs.accentColor);
    updatePopupWidth(prefs.popupWidth);
    updateBackdropBlur(prefs.blurAmount);
    updateAnimation(prefs.animationType);
    blurValueSpan.textContent = prefs.blurAmount + "px";
  }
}

// Save preferences when changes are made
const configInputs = [
  popupTitleInput,
  popupMessageInput,
  confirmTextInput,
  cancelTextInput,
  accentColorInput,
  popupWidthSelect,
  blurAmountInput,
  animationTypeSelect,
];

configInputs.forEach((input) => {
  input.addEventListener("change", savePreferences);
  input.addEventListener("input", savePreferences);
});

// Load saved preferences on startup
loadPreferences();
