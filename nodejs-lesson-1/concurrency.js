
// Callback and Promises
let promise = new Promise((resolve, reject) => {

    let a = 10;
    reject(`${a} is too small`);

    if(a > 10){
        resolve(`${a} is big`);

    }else{
        reject(`${a} is too small`);
    }
});
promise.then((value)=> {
    console.log(`Promise 1 success: ${value} : ${promise}`, promise);

}, (error)=> {
    console.log(`Promise 1 error: ${error} : ${promise}`, promise);
});


    
    
let promise2 = new Promise((resolve, reject) => {
    let a = 20;
    if(a > 10){
        resolve(`${a} is big`);

    }else{
        reject(`${a} is too small`);
    }
}).then((value)=> {
    console.log(`Promise 2 success: ${value} : ${promise2}`, promise2);

}, (error)=> {
    console.log(`Promise 2 success: ${error} : ${promise2}`, promise2);

});




let promise3 = new Promise((resolve, reject) => {
    // let a = 300;
    // if(a > 10){
    //     resolve(`${a} is big`);

    // }else{
    //     reject(`${a} is too small`);
    // }
}).then((value)=> {
    console.log(value);
    console.log(`Promise 3 success: ${value} : ${promise3}`, promise3);

}, (error)=> {
    console.log(error);
    console.log(`Promise 3 error: ${error} : ${promise3}`, promise3);

}).catch(() =>{
    console.log("catch: promise pending");
    console.log(`Promise 1 success: ${value} : ${promise}`, promise);
    console.log(`Promise 2 success: ${value} : ${promise2}`, promise2);
    console.log(`Promise 3 success: ${value} : ${promise3}`, promise3);
});
    




let promise4 = new Promise((resolve, reject) => {
    let a = 400;
    if(a > 10){
        resolve(`${a} is big`);

    }else{
        reject(`${a} is too small`);
    }
}).then((value)=> {
    console.log(`Promise 1 success: ${value} : ${promise4}`, promise4);

}, (error)=> {
    console.log(`Promise 1 error: ${error}: ${promise4}`, promise4);

}).catch(() =>{
    console.log("catch: promise pending");
    console.log(`Promise 1: ${promise}`);
    console.log(`Promise 2: ${promise2}`);
    console.log(`Promise 3: ${promise3}`);
    
});




console.log(`Promise 1: ${promise}`);
console.log(`Promise 2: ${promise2}`);
console.log(`Promise 3: ${promise3}`);



// async and await
function apiData(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('something: ' + x);
        }, 2000);
    });

}
async function result(x){
    const data =  await apiData(x);
    console.log(data);
}
result(20);
result(40);


var globalValue = 0;
function myApi(x) {
    return new Promise(resolve => {
        console.log(globalValue);
        setTimeout(() => {
            globalValue = globalValue + x;
            console.log(globalValue);
            resolve('something: ' + globalValue);
        }, 3000);
    });

}
async function myResult(x){
    const data =  await myApi(x);
    console.log(data);
}
myResult(10);
myResult(10);