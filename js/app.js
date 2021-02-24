//RELOG CIRCULAR
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

});

//RELOG HIRIZONTAL
const showTime = document.querySelector('.clock-country h2');
const showTimeTop = document.querySelector('.time p');

setInterval(() => {
    let time = new Date(),
        hh = time.getHours(),
        ampm,
        mm = time.getMinutes();

    if (hh >= 12) {
        hh = hh - 12;
        ampm = 'PM';
    } else {
        ampm = 'AM'
    }
    if (hh == 0) {
        hh = 12;
    }
    if (hh < 10) {
        hh = "0" + hh;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    showTime.innerHTML = `${hh}:${mm} ${ampm}`;
    showTimeTop.innerHTML = `${hh}:${mm} ${ampm}`;
});