let userNameIn = document.querySelector("#myName");
let myClock = document.getElementById('myClock');

function showTime(){
    var date = new Date();
    var seconds = date.getSeconds();
    var minute = date.getMinutes();
    var hours = date.getHours();
    let weekday = [' Pazar', ' Pazartesi', ' Salı', ' Çarşamba', ' Perşembe', ' Cuma', ' Cumartesi'][new Date().getDay()];
    myClock.textContent = 
    ("0" + hours).substr(-2) + ":" + ("0" + minute).substr(-2) + ":" + ("0" + seconds).substr(-2) + weekday;

}
setInterval(showTime);

let userName = prompt("Adınız Nedir?");

    if (userName.length === 0){
        userNameIn.innerHTML = `Guest! `;
    }
    else{
        userNameIn.innerHTML = ` ${userName}! `;
    };