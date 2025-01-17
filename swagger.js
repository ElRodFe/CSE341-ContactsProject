const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts Project',
    description: 'CSE341 - W01-W02 Project - BYU Idaho - Elias Rodríguez'
  },
  host: 'localhost:5500'
};

const outputFile = './swagger.json';
const routes = ['./Routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);