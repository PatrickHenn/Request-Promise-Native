const {post,get} = require('./request.js');


//add order
post('order/',
{
    "orgId": "Hgza28rQ-",
    "name": "test anna lol",
    "price": 209555
  }
).then(console.log);
/*
//paymentplan
post('order/plan',

).then(console.log);

//entwurf
post('order',

).then(console.log);

//upload attachment
post('order/0AFjtieAX/attachment',

).then(console.log);

//add recipient
post('order/0AFjtieAX/recipient',

).then(console.log);

//remove recipient
post('order/edgM8r9Ya/recipient/delete',

).then(console.log);

//update price and assets for order 
post('order/edgM8r9Ya/update/price',

).then(console.log);

//update name of order 
post('order/edgM8r9Ya/update/name',

).then(console.log);

//update contactperson of order 
post('order/edgM8r9Ya/update/contactperson',

).then(console.log);

//add or update duedate of order 
post('order/edgM8r9Ya/update/duedate',

).then(console.log);

//delete duedate of order 
post('order/edgM8r9Ya/update/duedate/delete',

).then(console.log);

//add or update pickupdate of order 
post('order/edgM8r9Ya/update/pickupdate/',

).then(console.log);

//delete pickupdate of order 
post('order/edgM8r9Ya/delete/pickupdate/',

).then(console.log);

//add or update metafields of order 
post('order/edgM8r9Ya/update/metafields/',

).then(console.log);

//archive or archive and close order 
post('order/edgM8r9Ya/hide',

).then(console.log);
*/


//user
get('user').then(console.log);



//get orders
get('order?orgId=Hgza28rQ-').then(console.log);
get('order/Hzp7ewk-u').then(console.log);
//offline get('order/Hzp7ewk-u/offline').then(console.log);



//organisation
get('organization/').then(console.log);
get('organization/Hgza28rQ-').then(console.log);
post('organization',
{
    "name": "Test Autohaus Schnee",
    "nick": "string",
    "contact": {
      "email": "patrick.henn+66@nx-technologies.com",
      "street": "Blzardusstraße",
      "streetnumber": "66",
      "zip": "string",
      "city": "Dalaran"
    },
    "paymentoptions": {
      "cash": true,
      "sepa": true,
      "fts": true
    }
  }
).then(console.log);



//webhook
get('webhook?orgId=Hgza28rQ-').then(console.log);

post('webhook?orgId=Hgza28rQ-',
{
    "orgId": "Hgza28rQ-",
    "url": "https://api.dev.nx.bezahl.de/nxt/v1/webhook?orgId=Hgza28rQ-",
    "secret": "string"
  }
).then(console.log);

/*del('',

).then(console.log);*/