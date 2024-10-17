document.addEventListener('DOMContentLoaded', function() {
    /*let user = prompt("Felhasználónév:")
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
    }*/
    // utána
    loadRendelesek()
})
function loadRendelesek() {
  let rendelesek = JSON.parse(localStorage.getItem('rendelesek')) || [];

  rendelesek.forEach((item, index) => {
    var ujbutton = document.createElement('button')
    ujbutton.type = "button"
    ujbutton.id = String(index)+".rendeles"
    ujbutton.innerHTML = "Név: "+item.name
    document.getElementById('rendelesek').appendChild(ujbutton)
  });
}
