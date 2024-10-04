document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('cim').innerHTML = localStorage.getItem('cim')
    localStorage.setItem('cim', "")
    var d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    minutes += 30;
    var minutesfixed = ""
    if (minutes < 10) {
        minutesfixed = "0"+String(minutes)
    } else {
        minutesfixed = String(minutes)
    }
    document.getElementById('ido').innerHTML = String(hours) + ":" + minutesfixed
})