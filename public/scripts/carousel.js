
/* Credits to Dainelle's website: https://daniele63.com/ */
// Duplicate buttons in Carousel
document.addEventListener("DOMContentLoaded", function () {
  const ORIGINAL_BUTTONS = document.querySelectorAll(
    "#button-list > a"
  );
  const BUTTONS_CONTAINER = document.querySelector("#button-list");

  // Loop through original buttons and clone anchor elements
  ORIGINAL_BUTTONS.forEach(function (button) {
    const CLONED_BUTTON = button.cloneNode(true);
    BUTTONS_CONTAINER.appendChild(CLONED_BUTTON);
    console.log("Cloned button:", CLONED_BUTTON);
  });
});
