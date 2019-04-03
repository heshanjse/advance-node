// var delay = (seconds) => new Promise((resolves, reject) => {
//     throw new Error('argh')

//     setTimeout(() => {
//         resolves('the long delay has ended')
//     }, seconds * 1000);
// });
// delay(1)
//     .then(() => 42)
//     .then((number) => console.log(`hello: ${number}`))
//     .catch((error) => console.log(`error: ${error.message}`))
// console.log('end first tick');

var delay = (seconds) => new Promise((resolves, reject) => {
    if (seconds > 3) {
        reject(new Error(`${seconds} is too long!`))
    }
    setTimeout(() => {
        resolves('the long delay has ended')
    }, seconds * 1000);
});
delay(4)
    .then(() => 42)
    .then((number) => console.log(`hello: ${number}`))
    .catch((error) => console.log(`error: ${error.message}`))
console.log('end first tick');