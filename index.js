var text = document.querySelector("p");
var amogus = document.querySelector("img");
var drippnes = 0;

amogus.onclick = function () {
  drippnes++;
  text.innerHTML =
    drippnes <= 69
      ? `YoU hAVe ${drippnes} drip<br> SUS`
      : `you have 69 + ${drippnes - 69} dripness <br> sus king`;
};
