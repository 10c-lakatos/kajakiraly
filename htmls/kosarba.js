var items = {
    itemList: [
        {name:"kola", displayname: "Kóla", amount: 1, price: 1400, img: "img/cocacolanagy.png"}
    ]
}
document.addEventListener('DOMContentLoaded', function(){
    for (let i =0; i < items.itemList.length; i++){
        var cElemDiv = document.createElement('div')
        cElemDiv.id = "elem"
        cElemDiv.className = "elemclass"
        var cElemNev = document.createElement('p')
        cElemNev.className = "elemnev"
        cElemNev.innerHTML = items.itemList[i].displayname
        var cElemAra = document.createElement('p')
        cElemAra.className = "ara"
        cElemAra.innerHTML = "Ár: "+String(items.itemList[i].price)+" Ft"
        var cElemImg = document.createElement('img')
        cElemImg.src = items.itemList[i].img
        cElemImg.alt = items.itemList[i].displayname+" képe"
        cElemImg.className = "imgclass"
        var cElemMenny = document.createElement('p')
        cElemMenny.className = "mennyisegmegado"
        cElemMenny.innerHTML = "Mennyiség:"
        var cElemMennyReal = document.createElement('p')
        cElemMennyReal.id = items.itemList[i].name+"mennyiseg"
        cElemMennyReal.className = "mennyiseg"
        cElemMennyReal.innerHTML = items.itemList[i].amount
        var cElemInputMinusz = document.createElement('input')
        cElemInputMinusz.type = "button"
        cElemInputMinusz.value = "-"
        cElemInputMinusz.className = "mennyisegbuttonok"
        cElemInputMinusz.onclick = function () { amountremove(i) }
        var cElemInputPlusz = document.createElement('input')
        cElemInputPlusz.type = "button"
        cElemInputPlusz.value = "+"
        cElemInputPlusz.className = "mennyisegbuttonok"
        cElemInputPlusz.onclick = function () { amountadd(i) }
        var kakukk = document.createElement('p')
        kakukk.innerHTML = ""
        var cButton = document.createElement('button')
        cButton.type = "button"
        cButton.id = i+"kosarhozadas"
        cButton.className = "kosarbabuttonok"
        cButton.innerHTML = "Kosárba helyezés"
        cButton.onclick = function () { kosarhozadas(i) }
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
})
function amountadd(index) {
    items.itemList[index].amount += 1
    document.getElementById(items.itemList[index].name+'mennyiseg').innerHTML = items.itemList[index].amount
}
function amountremove(index) {
    if (items.itemList[index].amount > 1) {
        items.itemList[index].amount -= 1
        document.getElementById(items.itemList[index].name+'mennyiseg').innerHTML = items.itemList[index].amount
    } 
}
function kosarhozadas(index) {
    addItemToKajalista(items.itemList[index].displayname, items.itemList[index].price, items.itemList[index].amount)
    document.getElementById(index+'kosarhozadas').innerHTML = "Sikeres hozzáadás!"
    setTimeout(() => {
        document.getElementById(index+'kosarhozadas').innerHTML = "Kosárba helyezés" 
    }, 2000)
}
function addItemToKajalista(name, ertek, mennyiseg) {
    let kajalista = JSON.parse(localStorage.getItem('ujkajalista')) || [];
    kajalista.push({ name, ertek, mennyiseg });
    localStorage.setItem('ujkajalista', JSON.stringify(kajalista));
    console.log('Item added to kajalista and saved to localStorage');
    alert("Sikeresen hozzáadtad a kosárhoz az ételt!")
  }