const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// const currentDate = new Date().getDate();
// const newMonth = currentDate + 15;

// console.log(currentDate);
// console.log(newMonth);

setInterval(() => {
    const currentDate = new Date();
    const futureDate = new Date("August 14,2024 00:00:00");
    const myDate = (futureDate - currentDate) / 1000;

    const daysLeft = Math.floor(myDate / 3600 / 24);
    const hoursLeft = Math.floor(myDate / 3600) % 24;
    const minutesLeft = Math.floor(myDate / 60) % 60;
    const secondsLeft = Math.floor(myDate) % 60;
    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft;
    minutes.innerHTML = minutesLeft;
    seconds.innerHTML = secondsLeft;
}, 1000);