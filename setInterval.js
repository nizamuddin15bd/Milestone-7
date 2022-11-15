console.log('First');
// setInterval(() => {
//     console.log('tk tk tk tk');
// }, 1000);

let seconds = 0;

const timeId = setInterval(() => {
    // seconds++;
    console.log(seconds++);
    if (seconds > 15) {
        clearInterval(timeId);
    }
}, 1000)
console.log('second');