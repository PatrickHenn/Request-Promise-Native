const {post,get} = require('./lib/request.js');
const orgaId = 'Hgza28rQ-';
const orderId = 'ryLwAq0AT';


//add order
post('order/',
{
    "orgId": `{orgaId}`,
    "name": "test lol",
    "price": 209555
  }
).then(console.log);

//paymentplan
post('order/plan',
{
    "orgId": "string",
    "order": {
      "name": "string",
      "price": 0,
      "pickupdate": "2019-08-24",
      "contactperson": "user@example.com",
      "recipient": "user@example.com",
      "reminder": "disabled",
      "unique": "string",
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
  }
).then(console.log);

//entwurf
post('order',
{
    "orgId": "Hgza28rQ-",
    "name": "Entwurf über Postman1",
    "attachment": "",
    "draft": true,
    "assets": [
        {
            "label": "Kaufpreis",
            "amount": 2000000
        },
        {
            "label": "Sportreifen, MB",
            "amount": 0
        }
    ],
    "payments": [
        {
            "label": "Inzahlungnahme",
            "amount": 800000,
            "confirmed": false,
            "received": true
        },
        {
            "label": "Finanzierung",
            "amount": 250000,
            "confirmed": true,
            "received": true
        }
    ],
    "paymentoptions": {
        "fts": true
    },
    "reminder": "7d",
    "pickupdate": "2020-10-30",
    "duedate": "2023-10-30",
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
        "email": "patrick.henn+87@nx-technologies.com"
    }

}   
).then(console.log);

//remove recipient
post(`order/${orderId}/recipient/delete`,
{
    "email": "patrick.henn+87@nx-technologies.com"
  
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
    "name": "änderung test"
  }
).then(console.log);

//update contactperson of order 
post(`order/${orderId}/update/contactperson`,
{
    "contactperson": "patrick.henn+13@nx-technologies.com",
    "orgId": `${orgaId}`
  }
).then(console.log);

//add or update duedate of order 
post(`order/${orderId}/update/duedate`,
{
    "duedate": "2020-08-24"
  }
).then(console.log);

//delete duedate of order 
post(`order/${orderId}/update/duedate/delete`,
{
    "responsekey": "order.duedate.delete.success",
    "responsemessage": "Erfolgreich gespeichert"
  }
).then(console.log);

//add or update pickupdate of order 
post(`order/${orderId}/update/pickupdate/`,
{
    "pickupdate": "2020-09-24"
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