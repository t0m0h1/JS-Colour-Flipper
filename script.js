const colours = ["red", "green", "blue", "yellow", "pink", "purple", "orange", "brown", "black", "white"];
const btn = document.getElementById("btn");
const colour = document.querySelector(".color");

btn.addEventListener("click", function() {
  console.log(document.body);
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colours[randomNumber];
  colour.textContent = colours[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colours.length);
}
