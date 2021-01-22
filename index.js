const {post,get,del} = require('./lib/request.js');
const orgaId = 'Hgza28rQ-';
const orderId = '7HfFzusar';

/*
//add order
post('order/',
{
    "orgId": `${orgaId}`,
    "name": "test lol",
    "price": 209555
  }
).then(console.log);

//paymentplan
post('order/plan',
{
    "orgId": `${orgaId}`,
    "order": {
      "name": "Coding test",
      "price": 40400,
      "pickupdate": "2021-01-23",
      "contactperson": "patrick.henn+code@nx-technologies.com",
      "recipient": "patrick.henn+code@nx-technologies.com",
      "reminder": "disabled",
      "paymentoptions": {
  
        "cash": false,
        "sepa": false,
        "fts": true },
        "metafields": [
          {
            "type": "string",
            "desc": "Test"
          }
        ],
        "customer": {
          "id": "string",
          "company": "CarRent",
          "firstname": "Max",
          "lastname": "Reiner",
          "street": "Am Rosenberg",
          "streetnumber": "41",
          "zip": "51101",
          "city": "Köln",
          "country": "Deutschland",
          "email": "example@mail.com",
          "phone": "0123 1234567"
        },
        "invoice": [
          {
            "desc": "string",
            "invoice": "dev_test",
            "debitor": "Herr Lang",
            "name": "string",
            "amount": 20000,
            "duedate": "2021-01-25"
          }
        ],
        "draft": false,
        "tags": [
          "string"
        ]
      },
      "assets": [
        {
          "label": "Zusatz",
          "amount": 100000
        }
      ],
      "payments": [
        {
          "label": "Vorzahlung",
          "amount": 200000,
          "confirmed": true,
          "received": true
        }
      ]
    }
).then(console.log);

//entwurf
post('order',
{
    "orgId": `${orgaId}`,
    "name": "Entwurf über Code",
    "attachment": "",
    "draft": true,
    "assets": [
        {
            "label": "Kaufpreis",
            "amount": 900000
        },
        {
            "label": "Sportreifen, MB",
            "amount": 0
        }
    ],
    "payments": [
        {
            "label": "Inzahlungnahme",
            "amount": 200000,
            "confirmed": false,
            "received": true
        },
        {
            "label": "Finanzierung",
            "amount": 49999,
            "confirmed": true,
            "received": true
        }
    ],
    "paymentoptions": {
        "fts": true
    },
    "reminder": "7d",
    "pickupdate": "2021-02-20",
    "duedate": "2021-10-30",
    "pickupWithoutPayment": true,
    "recipient": "patrick.henn+1@nx-technologies.com",
    "contactperson": "patrick.henn@nx-technologies.com",
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
        "id": "i38iKq",
        "company": "",
        "firstname": "Marlin",
        "lastname": "Freeze",
        "street": "Freiheisstraße",
        "streetnumber": "60",
        "zip": "51001",
        "city": "Köln",
        "country": "Deutschland",
        "email": "siegfried.obenauer+12@nx-technologies.com",
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
            "invoiceNo": "2020-30",
            "debitor": "Marlin Freeze",
            "name": "Marlin Freeze",
            "amount": 100000,
            "duedate": "2020-10-15"
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
}
).then(console.log);

//upload attachment
//post(`order/${orderId}/attachment`,

//).then(console.log);

//add recipient
post(`order/${orderId}/recipient`,
{

    "recipient": 

    {
        "email": "patrick.henn+codingRecipient@nx-technologies.com"
    }

}   
).then(console.log);

//remove recipient
post(`order/${orderId}/recipient/delete`,
{
    "email": "patrick.henn+codingRecipient@nx-technologies.com"
  
}
).then(console.log);

//update price and assets for order 
post(`order/${orderId}/update/price`,
{
    "price": 87654,
    "assets": [
      {
        "label": "string",
        "amount": 0
      }
    ]
  }
).then(console.log);

//update name of order 
post(`order/${orderId}/update/name`,
{
    "name": "änderung coding test"
  }
).then(console.log);

//update contactperson of order 
post(`order/${orderId}/update/contactperson`,
{
    "contactperson": "patrick.henn+updatecontactperson@nx-technologies.com",
    "orgId": `${orgaId}`
  }
).then(console.log);    

//add or update duedate of order 
post(`order/${orderId}/update/duedate`,
{
    "duedate": "2021-08-24"
  }
).then(console.log);

//delete duedate of order 
post(`order/${orderId}/duedate/delete`,
{
    "responsekey": "order.duedate.delete.success",
    "responsemessage": "Erfolgreich gespeichert"
  }
).then(console.log);

//add or update pickupdate of order 
post(`order/${orderId}/update/pickupdate/`,
{
    "pickupdate": "2021-09-24"
  }
).then(console.log);

//delete pickupdate of order 
post(`order/${orderId}/delete/pickupdate/`,
{
    "responsekey": "order.delete.pickupdate.success",
    "responsemessage": "Erfolgreich gespeichert"
  }
).then(console.log);

//add or update metafields of order 
post(`order/${orderId}/update/metafields/`,
{
    "metafields": [
      {
        "type": "string",
        "desc": "string"
      }
    ],
    "override": false
  }
).then(console.log);

//archive or archive and close order 
post(`order/${orderId}/hide`,
{
    "closed": true
  }
).then(console.log);



//user
get('user').then(console.log);



//get orders
get(`order?orgId=${orgaId}`).then(console.log);
get(`order/${orgaId}`).then(console.log);
get('order/PFkr9UXRs/offline?link=true').then(console.log);
get('order/PFkr9UXRs/offline',{qs:{link:true}}).then(console.log);

 

//organisation
get('organization/').then(console.log);
get(`organization/${orgaId}`).then(console.log);
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


*/
//webhook
//get(`webhook?orgId=${orgaId}`).then(console.log);

post(`webhook?orgId=${orgaId}`,
{
    "orgId": `${orgaId}`,
    "url": `https://api.dev.nx.bezahl.de/nxt/v1/webhook?orgId=${orgaId}`,
    "secret": "string"
  }
).then(console.log);

del(`webhook?orgId=${orgaId}`,
{
    "orgId": `${orgaId}`,
    "id": `7nB3ZDB7q`
  }
).then(console.log);
