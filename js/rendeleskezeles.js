let kivalaszottindex = -1
document.addEventListener('DOMContentLoaded', function() {
    let user = prompt("Felhasználónév:")
    let index = -1
    for (let i=0; i < config.sefek.length; i++) {
        if (config.sefek[i].name == user) {
            index = i
        }
    }
    if (index != -1) {
        let lpwd = prompt(config.sefek[index].name+" jelszava:")
        if (config.sefek[index].pwd == lpwd) {
            alert("Sikeres belépés! Üdv a rendeléskezelésben!")
        } else {
            alert("Rossz jelszó!")
            window.location.replace("../index.html");
        }
    } else {
        alert("Nem található ilyen felhasználónév!")
        window.location.replace("../index.html");
    }
    // utána
    loadRendelesek()
})
function loadRendelesek() {
  let rendelesek = JSON.parse(localStorage.getItem('rendelesek')) || [];
  document.getElementById('rendelesek').innerHTML = ""
  document.getElementById('osszeg').innerHTML = ""
  rendelesek.forEach((item, index) => {
    var ujbutton = document.createElement('button')
    ujbutton.type = "button"
    ujbutton.id = String(index)+".rendeles"
    ujbutton.onclick = function() { loadListRendeles(index) };
    ujbutton.innerHTML = "Index: "+index+" | Név: "+item.name+" | E-mail: "+item.email+" | Telefonszám: "+item.telefon+" | Lakcím: "+item.cim+" | Fizetési mód: "+item.paymentmethod+""
    document.getElementById('rendelesek').appendChild(ujbutton)
  });
}
function loadListRendeles(index) {
    let osszeg = 0
    let rendelesek = JSON.parse(localStorage.getItem('rendelesek')) || [];
    let kajalista = rendelesek[index].lista
    kivalaszottindex = index
    const tableBody = document.getElementById('tablazatbody'); 
  tableBody.innerHTML = '';

  kajalista.forEach((item, index) => {
    var tablerow = document.createElement('tr');
    var t1 = document.createElement("th");
    t1.innerHTML = item.name;
    var t2 = document.createElement("td");
    t2.innerHTML = item.ertek + " Ft";
    osszeg += item.ertek * item.mennyiseg;
    var t3 = document.createElement("td");
    t3.innerHTML = item.mennyiseg;
    tableBody.appendChild(tablerow);
    tablerow.appendChild(t1);
    tablerow.appendChild(t2);
    tablerow.appendChild(t3);
    });
    document.getElementById('osszeg').innerText = osszeg;
  if (kajalista == null || kajalista == "") {
    var tablerow = document.createElement('tr');
    var ts1 = document.createElement("td");
    ts1.innerHTML = "Nincs kiválasztva rendelés!";
    ts1.colSpan = "4";
    tableBody.appendChild(tablerow);
    tablerow.appendChild(ts1);
  }
}
function rendelesTorlese() {
    if (kivalaszottindex != -1) {
      removeARendeles(kivalaszottindex)
      alert("Sikeresen kitörölted ezt rendelést!")
      loadRendelesek()
      document.getElementById('tablazatbody').innerHTML = `<tr>
      <td colspan="3">Nincs kiválasztva rendelés!</td>
  </tr>`
    } else {
      alert("Nincs kiválasztva rendelés!")
    }
}
function vissza() {
    window.location.replace('../index.html')
}

function removeARendeles(index) {
  let rendelesek = JSON.parse(localStorage.getItem('rendelesek')) || [];
  rendelesek.splice(index, 1);
  localStorage.setItem('rendelesek', JSON.stringify(rendelesek));
}