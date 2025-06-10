//making a bubble

document.body.addEventListener("click", (event) => {
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.textContent = "hi";

  const x = event.clientX;
  const y = event.clientY;

  circle.style.left = `${x - 25}px`;
  circle.style.top = `${y - 25}px`;

  const Colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "cyan",
    "lime",
    "brown",
  ];

  circle.style.backgroundColor =
    Colors[Math.floor(Math.random() * Colors.length)];
  const words = ["hi", "hello", "great", "sumit", "you", "bye", "he"];
  circle.textContent = words[Math.floor(Math.random() * words.length)];

  document.body.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 5000);
});
