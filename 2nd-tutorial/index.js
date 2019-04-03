// var delay = (seconds) => new Promise((resolves, reject) => {
//     setTimeout(resolves, seconds * 1000);
// });
// function delay(seconds, callback) {
// };
// delay(1).then(() => console.log('delay has ended'));
// console.log('end first tick');

// var delay = (seconds) => new Promise((resolves, reject) => {
//     setTimeout(() => {
//         resolves('the long delay has ended')
//     }, seconds * 1000);
// });
// delay(1)
// .then((message) => console.log(message))
// .then(()=>console.log("hello"));
// console.log('end first tick');

var delay = (seconds) => new Promise((resolves, reject) => {
    setTimeout(() => {
        resolves('the long delay has ended')
    }, seconds * 1000);
});
delay(1)
.then(() => 42)
.then((number)=>console.log(`hello: ${number}`));
console.log('end first tick');