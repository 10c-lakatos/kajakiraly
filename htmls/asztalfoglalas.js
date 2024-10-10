let asztalokszama = 25 // asztalok száma
let sorokszama = 0
function asztalfoglalas() {
    
}
document.addEventListener('DOMContentLoaded', function() {
    var sorok = {
        
    }
    if (asztalokszama%6 == 0) {
        sorokszama = asztalokszama/6
    } else {
        sorokszama = asztalokszama/6+1
        sorokszama = Math.trunc(sorokszama)
    }
    if (asztalokszama%5 ==0) {
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
    console.log(sorok)
    let asztalok = 1
    for (let i=1; i <= sorokszama; i++) {
        
        var table = document.getElementById('asztaloktablabody')
        var ujsor = document.createElement("tr")
        ujsor.id = String(i)+".sor"
        
        table.appendChild(ujsor)
        for (let h=1; h <= sorok[String(i)+".sor"]; h++) {
            var ujcella = document.createElement("td")
            ujcella.id = String(asztalok)+".asztal"
            ujcella.innerHTML = String(asztalok) + ". asztal"
            document.getElementById(String(i)+".sor").appendChild(ujcella)
            asztalok += 1
        }   
    }
})
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