# Instrucciones Openweathermap api library
Vamos a obtener la respuesta del tiempo actual de un lugar seleccionado usando diferentes opciones de filtro

## Instalación
Tenemos que seguir estas instrucciones de instalación
```
npm install anartz-proyecto-2-openweather-api
```
## Uso

### Como añadir

```
JS
const lib = require('modulo');
TS
import lib from 'modulo';
```

### Como usarlo

* Obtener por Nombre 

```
const m = lib.ApiService;


const api = new m('APIKEY', 'es', 'm');


// Buscar por Barcelona
api.buscarPorNombre('Barcelona', 'es').then(
    data => console.log(data)
);

// Buscar por localización geográfica de Sidney
api.buscarPorLocalizacionGeografica({ lat: -33.8473567, lon: 150.6517943 }).then(
    data => console.log(data)
);


// Buscar por zip de Mexicali (Méjico)
api.buscarPorZipCodigoPostal('21260' , 'mx').then(
    data => console.log(data)
);

// Espera una respuesta de este estilo
{ coord: { lon: 2.18, lat: 41.38 },
  weather:
   [ { id: 801,
       main: 'Clouds',
       description: 'algo de nubes',
       icon: '02d' } ],
  base: 'stations',
  main:
   { temp: 14.51,
     pressure: 1015,
     humidity: 72,
     temp_min: 12.78,
     temp_max: 16.11 },
  visibility: 10000,
  wind: { speed: 2.6, deg: 130 },
  clouds: { all: 20 },
  dt: 1552844551,
  sys:
   { type: 1,
     id: 6398,
     message: 0.0056,
     country: 'ES',
     sunrise: 1552802430,
     sunset: 1552845544 },
  id: 3128760,
  name: 'Barcelona',
  cod: 200 }
```