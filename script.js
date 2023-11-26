
const newYears = '1 Jan 2024';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totaltime = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totaltime / (3600 * 24));
    const hours = Math.floor(((totaltime / (3600 * 24)) - Math.floor(totaltime / (3600 * 24))) * 24);
    const minutes = Math.floor(((((totaltime / (3600 * 24)) - Math.floor(totaltime / (3600 * 24))) * 24) - (hours)) * 60);
    const seconds = Math.floor(((((((totaltime / (3600 * 24)) - Math.floor(totaltime / (3600 * 24))) * 24) - (hours)) * 60) - (minutes)) * 60);
    // // console.log(totaltime)
    // console.log(days);
    // console.log(hours)
    // console.log(minutes)
    // console.log(seconds)
    document.getElementById('days').innerHTML = formatTime(days);
    document.getElementById('hours').innerHTML = formatTime(hours);
    document.getElementById('mins').innerHTML = formatTime(minutes);
    document.getElementById('secs').innerHTML = formatTime(seconds);

}
countdown()
function formatTime(time) {
    if (time < 10) {
        return `0${time}`;
    }
    else {
        return time;
    }
}
setInterval(countdown, 1000);
