let elTitle = document.querySelector(".heading");
let elSpan = document.querySelector(".span");

let userName = prompt("Enter your username");
let userMoney = prompt("Enter your all money for the travel");
let ticketPrice = 500;
let hotelPrice = 250;
let museumPrice = 120;

let total = (hotelPrice + ticketPrice + museumPrice) * 11225;
// console.log(total);
if (userMoney >= total) {
  elTitle.textContent = `🎈🏝 Enjoy your journey`;
  //   Styles
  elTitle.style.display = "inline";
  elSpan.style.color = "red";
  elSpan.style.textDecoration = "underline";
  //   Styles
  elSpan.textContent = userName;
} else {
  elTitle.textContent = `You have to work harder to travel`;
  elSpan.textContent = userName;
  //   Styles
  elTitle.style.display = "inline";
  elSpan.style.color = "red";
  elSpan.style.textDecoration = "underline";
  //   Styles
}
