document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll("nav button[data-target]");
  const sections = document.querySelectorAll("main section");
  const themeCheckbox = document.getElementById("theme-checkbox");
  const fontSizeInput = document.getElementById("font-size-input");
  const fontColorInput = document.getElementById("font-color-input");
  const bgColorInput = document.getElementById("bg-color-input");

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      sections.forEach((section) => {
        section.hidden = section.id !== targetId;
      });
    });
  });

  themeCheckbox.addEventListener("change", () => {
    document.body.dataset.theme = themeCheckbox.checked ? "dark" : "light";
  });

  fontSizeInput.addEventListener("input", () => {
    document.body.style.fontSize = `${fontSizeInput.value}px`;
  });

  fontColorInput.addEventListener("input", () => {
    document.body.style.color = fontColorInput.value;
  });

  bgColorInput.addEventListener("input", () => {
    document.body.style.backgroundColor = bgColorInput.value;
  });
});
