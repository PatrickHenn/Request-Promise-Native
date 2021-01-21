const rp = require('request-promise');

let getUser = {
    method: 'GET',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/user',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    json: true // Automatically parses the JSON string in the response
};


rp(getUser)
    .then(function (getUserResponse) {
        console.log('User has response', getUserResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });



let getWebhookList = {
    method: 'GET',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/webhook?orgId=Hgza28rQ-',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    json: true // Automatically parses the JSON string in the response
};


rp(getWebhookList)
    .then(function (getWebhookListResponse) {
        console.log('Webhook List is', getWebhookListResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });


let postWebhook = {
    method: 'POST',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/webhook?orgId=Hgza28rQ-',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    body: {
        "orgId": "Hgza28rQ-",
        "url": "https://api.dev.nx.bezahl.de/nxt/v1/webhook?orgId=Hgza28rQ-",
        "secret": "string"
        },
    json: true // Automatically parses the JSON string in the response
};


rp(postWebhook)
    .then(function (postWebhookResponse) {
        console.log('Webhook List is', postWebhookResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });


let delWebhook = {
    method: 'DEL',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/webhook?orgId=Hgza28rQ-',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    body: {
        "orgId": "Hgza28rQ-",
        "id": "string"
        },
    json: true // Automatically parses the JSON string in the response
};


rp(delWebhook)
    .then(function (delWebhookResponse) {
        console.log('Webhook is deleted', delWebhookResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });



let getListOfOrganization = {
    method: 'GET',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/organization',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    json: true // Automatically parses the JSON string in the response
};


rp(getListOfOrganization)
    .then(function (getListOfOrganizationResponse) {
        console.log('User has that many organisations', getListOfOrganizationResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });




let getOneOrganization = {
    method: 'GET',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/organization/Hgza28rQ-',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    json: true // Automatically parses the JSON string in the response
};


rp(getOneOrganization)
    .then(function (getOneOrganizationResponse) {
        console.log('This is the Organisation', getOneOrganizationResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });

    
let createOrganization = {
    method: 'POST',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/organization',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    body: {
        "name": "Test Autohaus Code",
        "nick": "string",
        "contact": {
          "email": "patrick.henn+46@nx-technologies.com",
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
      },
    json: true // Automatically parses the JSON string in the response
};


rp(createOrganization)
    .then(function (createOrganizationResponse) {
        console.log('Created this Organisation', createOrganizationResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });



   let getAllOrders = {
    method: 'GET',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order?orgId=Hgza28rQ-',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    json: true // Automatically parses the JSON string in the response
};


rp(getAllOrders)
    .then(function (getAllOrdersResponse) {
        console.log('This is the Organisation', getAllOrdersResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });


let getAllOrders = {
    method: 'GET',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order?orgId=Hgza28rQ-',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    json: true // Automatically parses the JSON string in the response
};


rp(getAllOrders)
    .then(function (getAllOrdersResponse) {
        console.log('This is the Organisation', getAllOrdersResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });


let addNewOrder = {
    method: 'POST',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order/',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    body: {
        "orgId": "Hgza28rQ-",
        "name": "test add new order code",
        "price": 20555
      },
    json: true // Automatically parses the JSON string in the response
};


rp(addNewOrder)
    .then(function (addNewOrderResponse) {
        console.log('This is the Organisation', addNewOrderResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });
 

let entwurf = {
    method: 'POST',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order',
    headers: {
        'Content-Type': 'application/json',
        'NX-TOKEN': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
      },
    body: {
      "orgId": "Hgza28rQ-",
      "name": "Toyota Yaris 3 ",
      "attachment": "",
      "draft": true,
      "assets": [
        {
            "label": "Kaufpreis",
            "amount": 800000
        },
        {
            "label": "Karosserie",
            "amount": 0
        }
    ],
      "payments": [
          {
              "label": "Inzahlungnahme",
              "amount": 0,
              "confirmed": true,
              "received": true
          },
          {
              "label": "Finanzierung",
              "amount": 0,
              "confirmed": false,
              "received": true
          }
      ],
      "paymentoptions": {
          "fts": true
      },
      "reminder": "7d",
      "pickupdate": "2020-08-31",
      "duedate": "2020-08-28",
      "pickupWithoutPayment": true,
      "recipient": "siegfried.obenauer@nx-technologies.com",
      "contactperson": "siegfried.obenauer+5@nx-technologies.com",
      "header": {
          "url": "www.bezahl.de",
          "description": "Back to Shop (draft)"
      },
      "metafields": [
          {
              "type": "Farbe",
              "desc": "Schwarz"
          },
          {
              "type": "FIN",
              "desc": "WAUZZZFFS666766129"
          }
      ],
      "customer": {
          "id": "i17QrB",
          "company": "",
          "firstname": "Edward",
          "lastname": "Noway",
          "street": "Luxusstraße",
          "streetnumber": "21",
          "zip": "51012",
          "city": "Trüben",
          "country": "Deutschland",
          "email": "siegfried.obenauer+5@nx-technologies.com",
          "phone": "0221/2957427"
      },
      "tags": [
          "Rechnungskunde",
          "Neuwagen",
          "Service"
      ],
      "invoice": [
          {
              "desc": "Inlandsrechnung",
              "invoiceNo": "2020-17",
              "debitor": "12345",
              "name": "Lindsay Way",
              "amount": 0,
              "duedate": "2020-08-24"
          },
          {
              "desc": "Auslandsrechnung",
              "invoiceNo": "2020-16",
              "debitor": "67890",
              "name": "Gerard A. Way",
              "amount": 0,
              "duedate": "2020-08-24"
          }
      ]
  },
    json: true // Automatically parses the JSON string in the response
    };
    
      
      rp(entwurf)
        .then(function (plan) {
            console.log('User has Orga', plan);
        })
        .catch(function (err) {
            // API call failed...
            console.log(err)
        });
 

 
let addRecipient = {
    method: 'POST',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order/4l1iHX8YV/recipient',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    body: {

        "recipient": 
    
        {
            "email": "patrick.henn+87@nx-technologies.com"
        }
    
    },
    json: true // Automatically parses the JSON string in the response
};


rp(addRecipient)
    .then(function (addRecipientResponse) {
        console.log('This is the Organisation', addRecipientResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });


    


   let deletRecipient = {
    method: 'POST',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order/4l1iHX8YV/recipient/delete',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    body: { 
    
            "email": "patrick.henn+87@nx-technologies.com"
    
    },
    json: true // Automatically parses the JSON string in the response
};


rp(deletRecipient)
    .then(function (deletRecipientResponse) {
        console.log('This is the Organisation', deletRecipientResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });
    


let updatePriceAndAssetsForOrder = {
    method: 'POST',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order/4l1iHX8YV/update/price',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    body: {
        "price": 87654,
        "assets": [
          {
            "label": "string",
            "amount": 0
          }
        ]
      },
    json: true // Automatically parses the JSON string in the response
};


rp(updatePriceAndAssetsForOrder)
    .then(function (updatePriceAndAssetsForOrderResponse) {
        console.log('Updated Price and Assets', updatePriceAndAssetsForOrderResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });



 
let updateNameAndOrder = {
    method: 'POST',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order/4l1iHX8YV/update/name',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    body: {
        "name": "ämderung test"
      },
    json: true // Automatically parses the JSON string in the response
};


rp(updateNameAndOrder)
    .then(function (updateNameAndOrderResponse) {
        console.log('New Name', updateNameAndOrderResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });


 
let updateContactPersonOfOrder = {
    method: 'POST',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order/4l1iHX8YV/update/contactperson',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    body: {
        "contactperson": "patrick.henn+13@nx-technologies.com",
        "orgId": "Hgza28rQ-"
      },
    json: true // Automatically parses the JSON string in the response
};


rp(updateContactPersonOfOrder)
    .then(function (updateContactPersonOfOrderResponse) {
        console.log('This is the Organisation', updateContactPersonOfOrderResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });
    



     
   let updateDuedateOfOrder = {
    method: 'POST',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order/4l1iHX8YV/update/duedate',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    body: {
        "duedate": "2021-08-24"
      },
    json: true // Automatically parses the JSON string in the response
};


rp(updateDuedateOfOrder)
    .then(function (updateDuedateOfOrderResponse) {
        console.log(updateDuedateOfOrderResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });

    

     
   let updatePickupdateOfOrder = {
    method: 'POST',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order/4l1iHX8YV/update/pickupdate/',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    body: {
        "pickupdate": "2021-09-24"
      },
    json: true // Automatically parses the JSON string in the response
};


rp(updatePickupdateOfOrder)
    .then(function (updatePickupdateOfOrderResponse) {
        console.log(updatePickupdateOfOrderResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });


let deletPickupdateOfOrder = {
    method: 'POST',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order/4l1iHX8YV/delete/pickupdate/',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    body: {
        "responsekey": "order.delete.pickupdate.success",
        "responsemessage": "Erfolgreich gespeichert"
      },
    json: true // Automatically parses the JSON string in the response
};


rp(deletPickupdateOfOrder)
    .then(function (deletPickupdateOfOrderResponse) {
        console.log('This is the Organisation', deletPickupdateOfOrderResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });


    
   let updateMetafieldsOfOrder = {
    method: 'POST',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order/4l1iHX8YV/update/metafields/',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    body: {
        "metafields": [
          {
            "type": "string",
            "desc": "string"
          }
        ],
        "override": false
      },
    json: true // Automatically parses the JSON string in the response
};


rp(updateMetafieldsOfOrder)
    .then(function (updateMetafieldsOfOrderResponse) {
        console.log( updateMetafieldsOfOrderResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });

    
   let archiveAndCloseOrder = {
    method: 'POST',
    uri: 'https://api.dev.nx.bezahl.de/nxt/v1/order/4l1iHX8YV/hide',
    headers: {
        'Content-Type' : 'application/json',

        'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM'
    },
    body: {
        "closed": true
      },
    json: true // Automatically parses the JSON string in the response
};


rp(archiveAndCloseOrder)
    .then(function (archiveAndCloseOrderResponse) {
        console.log( archiveAndCloseOrderResponse);
    })
    .catch(function (err) {
        console.log('Mission failed',err);// API call failed...
    });


