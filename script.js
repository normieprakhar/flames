function calculateFLAMES() {
  let boy = document.getElementById("boy").value.toLowerCase().replace(/ /g, "");
  let girl = document.getElementById("girl").value.toLowerCase().replace(/ /g, "");
  if (!boy || !girl) {
    alert("Please enter both names! 💔");
    return;
  }
  for (let i = 0; i < boy.length; i++) {
    let ch = boy[i];
    if (girl.includes(ch)) {
      boy = boy.replace(ch, "");
      girl = girl.replace(ch, "");
      i--;
      girl = girl.replace(ch, "");
    }
  }
  let count = boy.length + girl.length;
  const flames = ["Friends 🤝", "Love ❤️", "Affection 💗", "Marriage 💍", "Enemies 💣", "Soulmates 💞"];
  let index = 0;
  for (let i = 0; flames.length > 1; i = (i + count - 1) % flames.length) {
    flames.splice(i, 1);
  }
  document.getElementById("result").innerText = `Result: ${flames[0]} ✨`;
}