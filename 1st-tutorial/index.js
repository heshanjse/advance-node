// function hideString(str){
//     return str.replace(/[a-zA-Z]/g,'X');

// }
// var hidden = hideString("Hello World");
// console.log(hidden);

// function hideString(str, done) {
//     done(str.replace(/[a-zA-Z]/g, 'X'));
// }
// hideString("Hello World sss", (hidden) => {
//     console.log(hidden);
// });
// console.log("kkkkk");

// function hideString(str, done) {
//     process.nextTick(() => {
//         done(str.replace(/[a-zA-Z]/g, 'X'));
//     });
// }
// hideString("Hello World sss", (hidden) => {
//     console.log(hidden);
// });
// console.log("kkkkk");

function delay(seconds, callback) {
    setTimeout(callback, seconds * 1000)
}

console.log("starting delay")
delay(2, () => {
    console.log("two seconds")
    delay(1, () => {
        console.log("three seconds")
    })
})
