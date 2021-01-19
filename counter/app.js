const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secodsEl = document.getElementById('seconds')

const newYears = '31 dec 2021';

const coutdown = () => {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalseconds/3600 / 24);
    const hours = Math.floor(totalseconds / 3600 % 24);
    const minutes = Math.floor(totalseconds / 60) % 24;
    const seconds = Math.floor(totalseconds  % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime (minutes);
    secodsEl.innerHTML = formatTime (seconds);
}

//function format seconds
const formatTime = (time) => time < 10 ? `0${time}` : time;

//initial call
coutdown();
 
setInterval(coutdown, 1000)