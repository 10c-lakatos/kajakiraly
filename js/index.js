var items = [
    {name:"kola", displayname: "Kóla", amount: 1, price: 1400, leiras: "Coca-Cola product", img: "img/cocacolanagy.png", type: "italok"},
    {name:"bolognai", displayname: "Bolognai Spaghetti", amount: 1, price: 3200, leiras: "Bolognai spaghetti xd", img: "", type: "etelek"}
]
document.addEventListener('DOMContentLoaded', function(){
    for (let i =0; i < items.length; i++){
        var cElemDiv = document.createElement('div')
        cElemDiv.id = "elem"
        cElemDiv.className = "elemclass"
        var cElemNev = document.createElement('p')
        cElemNev.className = "elemnev"
        cElemNev.innerHTML = items[i].displayname
        var cElemAra = document.createElement('p')
        cElemAra.className = "ara"
        cElemAra.innerHTML = "Ár: "+String(items[i].price)+" Ft"
        var cElemLeirasa = document.createElement('p')
        cElemLeirasa.className = "leirasa"
        cElemLeirasa.innerHTML = items[i].leiras
        var cElemImg = document.createElement('img')
        cElemImg.src = items[i].img
        cElemImg.alt = items[i].displayname+" képe"
        cElemImg.className = "imgclass"
        var cElemMenny = document.createElement('p')
        cElemMenny.className = "mennyisegmegado"
        cElemMenny.innerHTML = "Mennyiség:"
        var cElemMennyReal = document.createElement('p')
        cElemMennyReal.id = items[i].name+"mennyiseg"
        cElemMennyReal.className = "mennyiseg"
        cElemMennyReal.innerHTML = items[i].amount
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
        document.getElementById(items[i].type).appendChild(cElemDiv)
        cElemDiv.appendChild(cElemNev)
        cElemDiv.appendChild(cElemAra)
        cElemDiv.appendChild(cElemLeirasa)
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
    items[index].amount += 1
    document.getElementById(items[index].name+'mennyiseg').innerHTML = items[index].amount
}
function amountremove(index) {
    items[index].amount -= 1
    document.getElementById(items[index].name+'mennyiseg').innerHTML = items[index].amount
}
function kosarhozadas(index) {
    addItemToKajalista(items[index].displayname, items[index].price, items[index].amount)
}
function addItemToKajalista(name, ertek, mennyiseg) {
    let kajalista = JSON.parse(localStorage.getItem('ujkajalista')) || [];
    kajalista.push({ name, ertek, mennyiseg });
    localStorage.setItem('ujkajalista', JSON.stringify(kajalista));
    console.log('Item added to kajalista and saved to localStorage');
    alert("Sikeresen hozzáadtad a kosárhoz az ételt!")
  }