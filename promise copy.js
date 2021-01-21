var rp = require('request-promise');
   /*
//401 kein zugriff auf diesse funktion
let addNewOrderWithPaymentplan = {
    method: 'POST',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order/plan',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    body: {
        "orgId": "Hgza28rQ",
        "order": {
          "name": "code test",
          "price": 100,
          "pickupdate": "2021-01-24",
          "contactperson": "user@example.com",
          "recipient": "user@example.com",
          "uniquemodus": "error",
          "metafields": [
            {
              "type": "string",
              "desc": "string"
            }
          ],
          "customer": {
            "id": "string",
            "company": "string",
            "firstname": "string",
            "lastname": "string",
            "street": "string",
            "streetnumber": "string",
            "zip": "string",
            "city": "string",
            "country": "string",
            "email": "string",
            "phone": "string"
          },
          "invoice": [
            {
              "desc": "string",
              "invoiceNo": "string",
              "debitor": "string",
              "name": "string",
              "amount": 0,
              "duedate": "2019-08-24"
            }
          ],
          "draft": false,
          "tags": [
            "string"
          ]
        },
        "assets": [
          {
            "label": "string",
            "amount": 0
          }
        ],
        "payments": [
          {
            "label": "string",
            "amount": 0,
            "confirmed": true,
            "received": true
          }
        ]
      },
    json: true // Automatically parses the JSON string in the response
};


rp(addNewOrderWithPaymentplan)
    .then(function (addNewOrderWithPaymentplanResponse) {
        console.log('This is the Organisation', addNewOrderWithPaymentplanResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });



       let deletDuedateOfOrder = {
    method: 'POST',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order/4l1iHX8YV/update/duedate/delete',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    body: {
        "responsekey": "order.duedate.delete.success",
        "responsemessage": "Erfolgreich gespeichert"
      },
    json: true // Automatically parses the JSON string in the response
};


rp(deletDuedateOfOrder)
    .then(function (deletDuedateOfOrderResponse) {
        console.log('Ok',deletDuedateOfOrderResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });
    404
  
    */