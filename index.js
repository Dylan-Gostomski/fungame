
const monkeyButton = document.getElementById("monkey-butt");
const chickenButton = document.getElementById("chicken-butt");
const loveButton = document.getElementById("i-love-you");
const resultText = document.getElementById("result");
const container = document.querySelector(".container");

function triggerAnimation(animationClass) {
  container.classList.add(animationClass);
  setTimeout(() => {
    container.classList.remove(animationClass);
  }, 1000);
}

monkeyButton.addEventListener("click", () => {
  resultText.textContent = "Nope Chicken Butt! 🐣";
  triggerAnimation("shake-animation"); 
});

chickenButton.addEventListener("click", () => {
  resultText.textContent = "Nope Monkey Butt! 🐒";
  triggerAnimation("egg-crack-animation");
});

loveButton.addEventListener("click", () => {
  resultText.textContent = "Nope! Chicken Butt! 🐤";
  const existingClickMeButton = document.getElementById("new-click-me");
  if (existingClickMeButton) {
    existingClickMeButton.remove();
  }

  const newButton = document.createElement("button");
  newButton.textContent = "Click Me!";
  newButton.className = "fun-button new-click-me";
  newButton.id = "new-click-me";
  document.querySelector(".container").appendChild(newButton);

  triggerAnimation("heart-explosion-animation"); 

  newButton.addEventListener("click", () => {
    resultText.textContent = "I love you too! ♥ :)";
    newButton.remove(); 
  });
});
