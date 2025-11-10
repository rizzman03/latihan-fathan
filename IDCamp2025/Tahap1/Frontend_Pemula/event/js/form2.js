//fieldName
document.addEventListener("DOMContentLoaded", function () {
  const inputMaxLengthOnLoad = document.getElementById("inputNama").maxLength;
  document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;

  //Sisa karkter di konsol
  document.getElementById("inputNama").addEventListener("input", function () {
    const jumlahKarakterDiketik =
      document.getElementById("inputNama").value.length;
    const jumlahMaksimalKarakter =
      document.getElementById("inputNama").maxLength;

    console.log("jumlahKarakterDiketik: ", jumlahKarakterDiketik);
    console.log("jumlahMaksimalKarakter: ", jumlahMaksimalKarakter);
    const sisaKarakter = jumlahMaksimalKarakter - jumlahKarakterDiketik;
    document.getElementById("sisaKarakter").innerText = sisaKarakter.toString();

    //Sisa Karakter di fieldName
    document.getElementById("inputNama").addEventListener("focus", function () {
      console.log("inputNama: focus");
      document.getElementById("notifikasiSisaKarakter").style.visibility =
        "visible";
    });
  });
});
