const Alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const docbody = document.querySelector("body");
docbody.addEventListener("click", (event) => {
  const mytext = document.createElement("div");
  mytext.classList = "mytext";
  docbody.appendChild(mytext);
  mytext.innerText = Alphabet[Math.floor(Math.random() * 26)];
  mytext.style.color = `#${colors[Math.floor(Math.random()*colors.length)]}${colors[Math.floor(Math.random()*colors.length)]}${colors[Math.floor(Math.random()*colors.length)]}${colors[Math.floor(Math.random()*colors.length)]}${colors[Math.floor(Math.random()*colors.length)]}${colors[Math.floor(Math.random()*colors.length)]}`;
  mytext.style.top = event.clientY + 10 + "px";
  mytext.style.left = event.clientX + 10 + "px";
  setTimeout(() => {
    mytext.style.transform = "scale(0)";
  }, 3000);
});