document.querySelector(".ekle").onclick = function () {
  const liste = document.querySelector(".liste");
  const satir = document.querySelector(".textAl").value;
  const yeniLi = document.createElement("li");
  const textNode = document.createTextNode(satir);
  yeniLi.appendChild(textNode);
  liste.appendChild(yeniLi);

  document.querySelector(".textAl").value = "";
};

document.querySelector("input").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.querySelector(".ekle").click();
  }
});
document.querySelector("input").addEventListener("keyup", function (event) {
  if (event.keyCode === 46) {
    document.querySelector(".sil").click();
  }
});

document.querySelector(".sil").onclick = function () {
  const liste = document.querySelector(".liste");
  liste.removeChild(liste.lastElementChild);
};

// let enter = document.querySelector(".ekle").onclick;
//     enter.addEventListener('keydown', (e) => {
//       if (e.keyCode === 13) {

//         document.querySelector(".ekle").onclick;
//       }
//     });

window.addEventListener("key", checkKeyPress, true);

function checkKeyPress(key) {
  if (key.keyCode === 13) {
    document.querySelector(".ekle");
  }

  if (key.keyCode === 46) {
    document.querySelector(".sil");
  }
}

console.log(checkKeyPress.value);
// document.querySelector(".ekle").onkeydown = function (event) {
//   if (event.keyCode == 13) {
//     document.querySelector(".ekle").click();
//   }

//   if (event.keyCode == 46) {
//     document.querySelector(".sil").click();
//   }
// };
