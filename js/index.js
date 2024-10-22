var items2 = [
    {name:"kola", displayname: "Kóla", amount: 1, price: 1400, leiras: "Coca-Cola product", img: "img/cocacolanagy.png", type: "italok"},
    {name:"gulyas", displayname: "Gúlyásleves", amount: 1, price: 1790, leiras: "Hagyományos marhahúsos gulyásleves friss zöldségekkel, csipetkével.", img: "img/gulyás.jpg", type: "etelek"},
    {name:"horthusos", displayname: "Hortobágyi húsos palacsinta", amount: 1, price: 2490, leiras: "Marhapörkölttel töltött palacsinta, tejfölös mártással leöntve.", img: "img/hortobagyi-husos-palacsinta.jpg", type: "etelek"}
]
var items = [
    {name: "gulyas", displayname: "Gulyásleves", amount: 1, price: 1790, leiras: "Hagyományos marhahúsos gulyásleves friss zöldségekkel, csipetkével.", img: "img/gulyás.jpg", type: "etelek"},
    {name: "hortobagyihusos", displayname: "Hortobágyi húsos palacsinta", amount: 1, price: 2490, leiras: "Marhapörkölttel töltött palacsinta, tejfölös mártással leöntve.", img: "img/hortobagyi-husos-palacsinta.jpg", type: "etelek"},
    {name: "rantottszeletkrumpli", displayname: "Rántott sertésszelet petrezselymes krumplival", amount: 1, price: 2790, leiras: "Kívül ropogós, belül puha rántott hús, klasszikus petrezselymes krumplival.", img: "img/rantottszelet_petrezselymes_krumplival.jpg", type: "etelek"},
    {name: "porkoltgaluska", displayname: "Pörkölt galuskával", amount: 1, price: 2490, leiras: "Sertéspörkölt, puha galuskával tálalva.", img: "img/porkolt_galuskaval.jpg", type: "etelek"},
    {name: "toltottkaposzta", displayname: "Töltött káposzta", amount: 1, price: 2690, leiras: "Fűszeres hússal és rizzsel töltött savanyított káposztalevelek, tejföllel.", img: "img/toltott_kaposzta.jpg", type: "etelek"},
    {name: "lecsokolbasszal", displayname: "Lecsó kolbásszal", amount: 1, price: 2190, leiras: "Paprika, paradicsom, hagyma és füstölt kolbász klasszikus magyaros módon elkészítve.", img: "img/lecso_kolbasszal.jpg", type: "etelek"},
    {name: "csirkepaprikas", displayname: "Csirkepaprikás nokedlivel", amount: 1, price: 2590, leiras: "Csirkecomb paprikás-tejfölös szószban, házi nokedlivel.", img: "img/paprikas-csirke_nokedlivel.jpg", type: "etelek"},
    {name: "halaszle", displayname: "Halászlé", amount: 1, price: 2990, leiras: "Tüzes, paprikás halleves, friss pontyból készítve.", img: "img/halaszle.jpg", type: "etelek"},
    {name: "turoscsusza", displayname: "Túrós csusza szalonnával", amount: 1, price: 1890, leiras: "Tejföllel, túróval és ropogós szalonnadarabokkal tálalt csuszátészta.", img: "img/turos_csusza_szalonnaval.jpg", type: "etelek"},
    {name: "somloi", displayname: "Somlói galuska", amount: 1, price: 1490, leiras: "Háromféle piskóta, csokoládé öntet, tejszínhab és dió.", img: "img/Somloi_galuska.jfif", type: "etelek"},
    {name: "cola", displayname: "Kóla", amount: 1, price: 1400, leiras: "Coca-Cola product", img: "img/cocacolanagy.png", type: "italok"},
    {name: "aszvanyviz_szensavas", displayname: "Szénsavas Ásványvíz", amount: 1, price: 700, leiras: "Frissítő, enyhén szénsavas ásványvíz, amely felfrissít bármely étkezés mellé.", img: "img/szensavas_asvanyviz.jpg", type: "italok"},
    {name: "aszvanyviz_szensavmentes", displayname: "Szénsavmentes Ásványvíz", amount: 1, price: 700, leiras: "Tiszta és lágy ásványvíz, tökéletes választás, ha frissességre vágyik.", img: "img/szensavmentes_asvanyviz.jpg", type: "italok"},
    {name: "limonade", displayname: "Házi Limonádé", amount: 1, price: 1200, leiras: "Friss citromokból készült házi limonádé, egy kis cukorral és jéggel a tökéletes ízélményért.", img: "img/hazi_limonade.jpg", type: "italok"},
    {name: "gyomber_szorp", displayname: "Gyömbér Szörp Szódával", amount: 1, price: 1300, leiras: "Házi gyömbérszörp hűsítő szódával, frissítő és enyhén fűszeres ízvilág.", img: "img/gyomber_szorp_szodaval.jpg", type: "italok"},
    {name: "narancsle", displayname: "Frissen Facsart Narancslé", amount: 1, price: 1600, leiras: "Tiszta, vitaminban gazdag narancslé frissen facsarva, energizáló napindító.", img: "img/frissen_facsart_narancsle.jpg", type: "italok"},
    {name: "jeges_tea", displayname: "Jeges Tea Citrommal", amount: 1, price: 1100, leiras: "Jól hűtött, citromos jeges tea, amely tökéletes a forró napokra.", img: "img/jeges_tea_citrommal.jpg", type: "italok"},
    {name: "epres_smoothie", displayname: "Epres Smoothie", amount: 1, price: 1800, leiras: "Krémes és frissítő smoothie érett eprek és joghurt felhasználásával.", img: "img/epres_smoothie.jpg", type: "italok"},
    {name: "coca_cola", displayname: "Coca-Cola", amount: 1, price: 700, leiras: "Egy frissítő, szénsavas üdítőital, amely tökéletes kísérője minden étkezésnek.", img: "img/coca_cola.jpg", type: "italok"},
    {name: "fanta", displayname: "Fanta", amount: 1, price: 1500, leiras: "Egy gyümölcsös, szénsavas üdítőital, amely vidám ízével feldobja az étkezéseket.", img: "img/fanta.jpg", type: "italok"},
    {name: "almale", displayname: "Almalé", amount: 1, price: 1000, leiras: "Természetes, friss almából készült gyümölcslé, igazi vitaminbomba.", img: "img/almale.jpg", type: "italok"}
];

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