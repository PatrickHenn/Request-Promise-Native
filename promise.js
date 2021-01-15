const myPromise = new Promise ((resolve, reject) => {
    let connection = false; // api

    if(connection){
        resolve('Verbindung steht');
    }else {
        reject('Verbindung fehlgeschlagen');
    }
});

myPromise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});