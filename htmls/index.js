var kajak = {
    itemList: [
        {name:"bolognai", displayname: "Bolognai Spaghetti", amount: 1, price: 3200, img: ""}
    ]
}
var italok = {
    itemList: [
        {name:"kola", displayname: "Kóla", amount: 1, price: 1400, img: "img/cocacolanagy.png"}
    ]
}
document.addEventListener('DOMContentLoaded', function(){
    for (let i =0; i < kajak.itemList.length; i++){
        var cElemDiv = document.createElement('div')
        cElemDiv.id = "elem"
        cElemDiv.className = "elemclass"
        var cElemNev = document.createElement('p')
        cElemNev.className = "elemnev"
        cElemNev.innerHTML = kajak.itemList[i].displayname
        var cElemAra = document.createElement('p')
        cElemAra.className = "ara"
        cElemAra.innerHTML = "Ár: "+String(kajak.itemList[i].price)+" Ft"
        var cElemImg = document.createElement('img')
        cElemImg.src = kajak.itemList[i].img
        cElemImg.alt = kajak.itemList[i].displayname+" képe"
        cElemImg.className = "imgclass"
        var cElemMenny = document.createElement('p')
        cElemMenny.className = "mennyisegmegado"
        cElemMenny.innerHTML = "Mennyiség:"
        var cElemMennyReal = document.createElement('p')
        cElemMennyReal.id = kajak.itemList[i].name+"mennyiseg"
        cElemMennyReal.className = "mennyiseg"
        cElemMennyReal.innerHTML = kajak.itemList[i].amount
        var cElemInputMinusz = document.createElement('input')
        cElemInputMinusz.type = "button"
        cElemInputMinusz.value = "-"
        cElemInputMinusz.className = "mennyisegbuttonok"
        cElemInputMinusz.onclick = function () { amountremove(i, 1) }
        var cElemInputPlusz = document.createElement('input')
        cElemInputPlusz.type = "button"
        cElemInputPlusz.value = "+"
        cElemInputPlusz.className = "mennyisegbuttonok"
        cElemInputPlusz.onclick = function () { amountadd(i, 1) }
        var kakukk = document.createElement('p')
        kakukk.innerHTML = ""
        var cButton = document.createElement('button')
        cButton.type = "button"
        cButton.id = i+"kosarhozadas"
        cButton.className = "kosarbabuttonok"
        cButton.innerHTML = "Kosárba helyezés"
        cButton.onclick = function () { kosarhozadas(i, 1) }
        document.getElementById('elemek').appendChild(cElemDiv)
        cElemDiv.appendChild(cElemNev)
        cElemDiv.appendChild(cElemAra)
        cElemDiv.appendChild(cElemImg)
        cElemDiv.appendChild(cElemMenny)
        cElemDiv.appendChild(cElemMennyReal)
        cElemDiv.appendChild(cElemInputMinusz)
        cElemDiv.appendChild(cElemInputPlusz)
        cElemDiv.appendChild(kakukk)
        cElemDiv.appendChild(cButton)
    }
    for (let i =0; i < italok.itemList.length; i++){
        var cElemDiv = document.createElement('div')
        cElemDiv.id = "elem"
        cElemDiv.className = "elemclass"
        var cElemNev = document.createElement('p')
        cElemNev.className = "elemnev"
        cElemNev.innerHTML = italok.itemList[i].displayname
        var cElemAra = document.createElement('p')
        cElemAra.className = "ara"
        cElemAra.innerHTML = "Ár: "+String(italok.itemList[i].price)+" Ft"
        var cElemImg = document.createElement('img')
        cElemImg.src = italok.itemList[i].img
        cElemImg.alt = italok.itemList[i].displayname+" képe"
        cElemImg.className = "imgclass"
        var cElemMenny = document.createElement('p')
        cElemMenny.className = "mennyisegmegado"
        cElemMenny.innerHTML = "Mennyiség:"
        var cElemMennyReal = document.createElement('p')
        cElemMennyReal.id = italok.itemList[i].name+"mennyiseg"
        cElemMennyReal.className = "mennyiseg"
        cElemMennyReal.innerHTML = italok.itemList[i].amount
        var cElemInputMinusz = document.createElement('input')
        cElemInputMinusz.type = "button"
        cElemInputMinusz.value = "-"
        cElemInputMinusz.className = "mennyisegbuttonok"
        cElemInputMinusz.onclick = function () { amountremove(i, 2) }
        var cElemInputPlusz = document.createElement('input')
        cElemInputPlusz.type = "button"
        cElemInputPlusz.value = "+"
        cElemInputPlusz.className = "mennyisegbuttonok"
        cElemInputPlusz.onclick = function () { amountadd(i, 2) }
        var kakukk = document.createElement('p')
        kakukk.innerHTML = ""
        var cButton = document.createElement('button')
        cButton.type = "button"
        cButton.id = i+"kosarhozadas"
        cButton.className = "kosarbabuttonok"
        cButton.innerHTML = "Kosárba helyezés"
        cButton.onclick = function () { kosarhozadas(i, 2) }
        document.getElementById('italok').appendChild(cElemDiv)
        cElemDiv.appendChild(cElemNev)
        cElemDiv.appendChild(cElemAra)
        cElemDiv.appendChild(cElemImg)
        cElemDiv.appendChild(cElemMenny)
        cElemDiv.appendChild(cElemMennyReal)
        cElemDiv.appendChild(cElemInputMinusz)
        cElemDiv.appendChild(cElemInputPlusz)
        cElemDiv.appendChild(kakukk)
        cElemDiv.appendChild(cButton)
    }
})
function amountadd(index, type) {
    if (type == 2) {
        italok.itemList[index].amount += 1
        document.getElementById(italok.itemList[index].name+'mennyiseg').innerHTML = italok.itemList[index].amount
    } else {
        kajak.itemList[index].amount += 1
        document.getElementById(kajak.itemList[index].name+'mennyiseg').innerHTML = kajak.itemList[index].amount
    }
    
}
function amountremove(index, type) {
    if (type == 1) {
        if (kajak.itemList[index].amount > 1) {
            kajak.itemList[index].amount -= 1
            document.getElementById(kajak.itemList[index].name+'mennyiseg').innerHTML = kajak.itemList[index].amount
        } 
    } else {
        if (italok.itemList[index].amount > 1) {
            italok.itemList[index].amount -= 1
            document.getElementById(italok.itemList[index].name+'mennyiseg').innerHTML = italok.itemList[index].amount
        } 
    }
    
}
function kosarhozadas(index, type) {
    if (type == 1) {
        addItemToKajalista(kajak.itemList[index].displayname, kajak.itemList[index].price, kajak.itemList[index].amount)
    } else {
        addItemToKajalista(italok.itemList[index].displayname, italok.itemList[index].price, italok.itemList[index].amount)
    }
    
}
function addItemToKajalista(name, ertek, mennyiseg) {
    let kajalista = JSON.parse(localStorage.getItem('ujkajalista')) || [];
    kajalista.push({ name, ertek, mennyiseg });
    localStorage.setItem('ujkajalista', JSON.stringify(kajalista));
    console.log('Item added to kajalista and saved to localStorage');
    alert("Sikeresen hozzáadtad a kosárhoz az ételt!")
  }