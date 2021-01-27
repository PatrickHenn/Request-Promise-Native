const request = require('request-promise-native');


let option = {
    headers: {
        'Content-Type' : 'application/json',
        //'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFqdzYxQ08wUyIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiNzFlZmNjM2YtOTE0NC00ZTJiLWE4NWQtNjMzMTQxYWRkYmQwIiwiaWF0IjoxNjAwMjYxODEwLCJleHAiOjE3MjY0OTIyMTB9.hwM1xoVQc5Ge9bphMg5hqQzwUc3xDTMK2Sck4xYHzkw'
        //'NX-Token' : ''
    },
    json: true
};

let endpoint = '';
console.log({endpoint});
console.log('env Stack:',process.env.STACK);

if (process.env.STACK === 'dev'){
    endpoint = 'https://api.dev.nx.bezahl.de/nxt/v1/'
    option['headers'['NX-TOKEN']] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    console.log('after:',{endpoint});
    console.log('token:',option['headers'['NX-TOKEN']])
};

if (process.env.STACK === 'int'){
    endpoint = 'https://api.int.nx.bezahl.de/nxt/v1/'
    option['headers'['NX-TOKEN']] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFqdzYxQ08wUyIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiNzFlZmNjM2YtOTE0NC00ZTJiLWE4NWQtNjMzMTQxYWRkYmQwIiwiaWF0IjoxNjAwMjYxODEwLCJleHAiOjE3MjY0OTIyMTB9.hwM1xoVQc5Ge9bphMg5hqQzwUc3xDTMK2Sck4xYHzkw'
    console.log('after:',{endpoint});
    console.log('token:',option['headers'['NX-TOKEN']])
};

if (process.env.STACK === 'test'){
    endpoint = 'https://api.test.nx.bezahl.de/nxt/v1/'
    option['headers'['NX-TOKEN']] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IklTVVNDLTlUTCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiMTgwNDBhNGUtMTBlNi00NGJiLTg3ZTEtMjNlOTdmOGMyNGMzIiwiaWF0IjoxNTk4NTM0MTgwLCJleHAiOjE3MjQ3NjQ1ODB9.AFrxYCSMONTLGUTuHkXxFH_SbI2NmuTbCLAg55ekiOo'
    console.log('after:',{endpoint});
    console.log('token:',option['headers'['NX-TOKEN']])
};


function get(uri,_options){
    console.log('get',uri)
    return request({
    method: 'GET',
    ..._options,
    ...option,
    uri: `${endpoint}${uri}`,
    });
};

function post(uri,body){
    console.log('post',uri)
    return request({
    method: 'POST',
    ...option,
    uri:`${endpoint}${uri}`,
    body,
    });
};

function del(uri,body){
    console.log('del',uri)
    return request({
    method: 'DELETE',
    ...option,
    uri:`${endpoint}${uri}`,
    body,
    });
};

module.exports = {get,post,del}