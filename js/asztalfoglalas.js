let asztalokszama = 25 // asztalok száma
let sorokszama = 0


// 0 - nem foglalt; 1 - foglalt
var asztalok = {

}
function asztalfoglalas() {
    var indexValue = document.getElementById('asztalnumber').value
    var NameValue = document.getElementById('asztalname').value
    if (indexValue != "" && indexValue != 0) {
        if (indexValue <= asztalokszama) {
            if (NameValue != "") {
                if (asztalok[indexValue+".asztal"] == "0") {
                    AsztalValue(indexValue, "1")
                    alert("Asztal lefoglalva, "+NameValue+" néven!")
                    location.reload()
                } else {
                    alert("Ez az asztal már le van foglalva!")
                }
            } else {
                alert("Nincsen megadva név!")
            }
        } else {
            alert("Túl nagy számot adtál meg!")
        }
    } else {
        alert("Nincsen megfelelő asztalszám!")
    }
}
document.addEventListener('DOMContentLoaded', function() {
    loadAsztals()
    console.log(asztalok)
    var sorok = {
        
    }
    if (asztalokszama%6 == 0) {
        sorokszama = asztalokszama/6
    } else {
        sorokszama = asztalokszama/6+1
        sorokszama = Math.trunc(sorokszama)
    }
    if (asztalokszama%6 ==0) {
        for (let i=1; i <= sorokszama; i++) {
            sorok[String(i)+".sor"] = 6
        }
    } else {
        for (let i=1; i <= sorokszama; i++) {
            if (i<sorokszama) {
                sorok[String(i)+".sor"] = 6
            } else {
                sorok[String(i)+".sor"] = asztalokszama%6
            }
        }
    }

    let asztalokdb = 1
    for (let i=1; i <= sorokszama; i++) {
        var table = document.getElementById('asztaloktablabody')
        var ujsor = document.createElement("tr")
        ujsor.id = String(i)+".sor"
        
        table.appendChild(ujsor)
        for (let h=1; h <= sorok[String(i)+".sor"]; h++) {
            var ujcella = document.createElement("td")
            ujcella.id = String(asztalokdb)+".asztal"
            ujcella.innerHTML = String(asztalokdb) + ". asztal"
            if (asztalok[String(asztalokdb)+".asztal"] == "1") {
                ujcella.style.backgroundColor = "crimson"
            } else {
                ujcella.style.backgroundColor = "green"
            }
            document.getElementById(String(i)+".sor").appendChild(ujcella)
            asztalokdb += 1
        }   
    }
})

// asztalfoglalas admin-ja
function admin() {
    let user = prompt("Felhasználónév:")
    let index = -1
    let sefek = config.sefek
    for (let i=0; i < sefek.length; i++) {
        if (sefek[i].name == user) {
            index = i
        }
    }
    if (index != -1) {
        let lpwd = prompt(sefek[index].name+" jelszava:")
        if (sefek[index].pwd == lpwd) {
            let asztalvalue = prompt("Melyik asztal állapotát szeretnéd módosítani?")
            if (!isNaN(asztalvalue)) {
            if (parseInt(asztalvalue) <= asztalokszama && parseInt(asztalvalue) >= 1) {
                
                let allapot = prompt("Melyik állapot legyen (0,1):")
                if (parseInt(allapot) == 0 || parseInt(allapot) == 1) {                   
                        AsztalValue(asztalvalue, allapot)
                        alert("Sikeres állapotváltás!")
                        location.reload()
                } else {
                    alert("Nem jó érték!")
                }
            
            } else {
                alert("Túl magas, vagy túl alacsony szám!")
            }
            } else {
                alert("Nem szám amit megadtál!")
            }
        } else {
            alert("Rossz jelszó!")
        }
    } else {
        alert("Nem található ilyen felhasználónév!")
    }
}

// database functionok
function AsztalValue(index, value) {
    localStorage.setItem(String(index)+'.asztal', value);
}
function loadAsztals() {
    for (let i=1; i <= asztalokszama; i++) {
        console.log(i)
        asztalok[String(i)+".asztal"] = localStorage.getItem(String(i)+'.asztal') || "0";
    }
}

// key eventek
function onlyNumberKey(evt) {
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function onlyWORDKey(evt) {
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return true;
    return false;
}