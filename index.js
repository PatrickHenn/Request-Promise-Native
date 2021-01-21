const {post,get} = require('./request.js');

//get('https://api.dev.nx.bezahl.de/nxt/v1/user').then(console.log);

post('https://api.dev.nx.bezahl.de/nxt/v1/order/',
{
    "orgId": "Hgza28rQ-",
    "name": "test lol 12",
    "price": 209555
  }).then(console.log);