const request = require('request-promise-native');


const option = {
    headers: {
        'Content-Type' : 'application/json',
        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    json: true
};

const endpoint = 'https://api.dev.nx.bezahl.de/nxt/v1/';
console.log({endpoint})


function get(uri,_options){
    console.log(uri)
    return request({
    method: 'GET',
    ..._options,
    ...option,
    uri: `${endpoint}${uri}`,
    });
};

function post(uri,body){
    console.log('post')
    return request({
    method: 'POST',
    ...option,
    uri:`${endpoint}${uri}`,
    body,
    });
};

module.exports = {get,post}