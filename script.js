let button2ClickCount = 0;

function showText(buttonId) {
  const textContainers = document.querySelectorAll(".text-container");
  textContainers.forEach((container) => (container.style.display = "none"));

  const selectedTextContainer = document.getElementById(buttonId + "-text");
  if (selectedTextContainer) {
    selectedTextContainer.style.display = "block";
  }
}

function button2Click() {
  button2ClickCount++;
  if (button2ClickCount > 3) {
    showText("button2");
  }
}
