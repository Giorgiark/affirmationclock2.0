const time = document.getElementById("time");
const ampm = document.getElementById("ampm");
const day = document.getElementById("day");
const text = document.getElementById("text");
const settingsBtn = document.getElementById("settings-btn");
const settingsModal = document.getElementById("settings-modal");
const closeBtn = document.querySelector(".close-btn");
const saveBtn = document.getElementById("save-btn");
const backgroundColorSelect = document.getElementById("background-color");
const fontColorSelect = document.getElementById("font-color");
const fontFamilySelect = document.getElementById("font-family");
const customTextInput = document.getElementById("custom-text");

// Load saved settings
function loadSettings() {
  const backgroundColor = localStorage.getItem('background-color') || '#FFFFFF';
  const fontColor = localStorage.getItem('font-color') || '#292623';
  const fontFamily = localStorage.getItem('font-family') || 'Karla';
  const customText = localStorage.getItem('custom-text') || 'Be kind';
  
  document.body.style.backgroundColor = backgroundColor;
  text.style.color = fontColor;
  time.style.color = fontColor;
  ampm.style.color = fontColor;
  day.style.color = fontColor;
  text.style.fontFamily = fontFamily;
  time.style.fontFamily = fontFamily;
  ampm.style.fontFamily = fontFamily;
  day.style.fontFamily = fontFamily;
  text.textContent = customText;
  backgroundColorSelect.value = backgroundColor;
  fontColorSelect.value = fontColor;
  fontFamilySelect.value = fontFamily;
  customTextInput.value = customText;
    settingsBtn.style.color = fontColor; // Update the button color
  settingsBtn.querySelector('i').style.color = fontColor; // Update the icon color

}



// Save settings to localStorage
function saveSettings() {
  localStorage.setItem('background-color', backgroundColorSelect.value);
  localStorage.setItem('font-color', fontColorSelect.value);
  localStorage.setItem('font-family', fontFamilySelect.value);
  localStorage.setItem('custom-text', customTextInput.value);
  
  loadSettings(); // Apply settings
  settingsModal.style.display = 'none'; // Hide modal
}

// Event listeners
settingsBtn.addEventListener('click', () => {
  settingsModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  settingsModal.style.display = 'none';
});

saveBtn.addEventListener('click', saveSettings);

// Update the clock every second
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampmValue = "AM";
  
  if (hours >= 12) {
    ampmValue = "PM";
    hours -= 12;
  }
  
  if (hours === 0) {
    hours = 12;
  }
  
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  
  time.innerHTML = `${hours}:${minutes}:${seconds}`;
  ampm.innerHTML = ampmValue;
  day.innerHTML = now.toLocaleDateString('en-US', { weekday: 'long' });
}

setInterval(updateClock, 1000);

// Initial settings load
loadSettings();