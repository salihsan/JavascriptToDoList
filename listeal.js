document.querySelector(".ekle").onclick = function () {
  // ekleme yapılacak listeyi al
  const liste = document.querySelector(".liste");
  //input elemanina girilen yeni satirin degerini al
  const satir = document.querySelector(".textAl").value;
  // yeni girilen satiri saklamak icin bir li olusturduk.
  const yeniLi = document.createElement("li");
  // yeni li icin textnode olusturduk
  const textNode = document.createTextNode(satir);
  //olusturdugumuz texnode'u yeni li'ye bagladik.
  yeniLi.appendChild(textNode);
  // yeni eklenen satiri var olan listeye (ul) baglayalim.
  liste.appendChild(yeniLi);
};


document.querySelector(".sil").onclick = function () {
  const liste = document.querySelector(".liste");
  liste.removeChild(liste.lastElementChild);
};