const m = require('./dist').ApiService;

const api = new m('VALID-KEY', 'es', 'm');

/* api.findByName('Madrid', 'es')
    .then(data => console.log(data))
    .catch(err => console.log(err));*/
/* api.findByGeolocation({ lat: 43.2633534, lon: -2.951074 })
    .then(data => console.log(data))
    .catch(err => console.log(err));*/
/* api.findByGeolocation(null)
    .then(data => console.log(data))
    .catch(err => console.log(err));*/
api.findByZipCode('28048', 'es')
    .then(data => console.log(data))
    .catch(err => console.log(err));