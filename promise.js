const myPromise = new Promise ((resolve, reject) => {
    let connection = true; // api

    if(connection){
        resolve('Verbindung steht');
    }else {
        reject('Verbindung fehlgeschlagen');
    }
});

myPromise.then((message) => {
    console.log(message);
});