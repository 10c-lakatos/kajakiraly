document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('cim').innerHTML = localStorage.getItem('cim')
    localStorage.setItem('cim', "")
    let perc = getRndInteger(25, 59)
    document.getElementById('ido').innerHTML = String(perc) + " perc múlva érkezik."
})
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}