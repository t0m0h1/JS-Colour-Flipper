document.addEventListener('DOMContentLoaded', (event) => {
    const colours = ["red", "green", "blue", "yellow", "pink", "purple", "orange", "brown", "black", "white"];
    const btn = document.getElementById("btn");
    const colour = document.querySelector(".colour");

    btn.addEventListener("click", function() {
        const randomNumber = getRandomNumber();
        document.body.style.backgroundColor = colours[randomNumber];
        colour.textContent = colours[randomNumber];
    });

    function getRandomNumber() {
        return Math.floor(Math.random() * colours.length);
    }
});