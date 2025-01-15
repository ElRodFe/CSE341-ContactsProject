const swaggerAutoGen = require("swagger-autogen");

const doc = {
    info: {
        title: "Contacts API",
        description: "W01 and W02 class activity for BYU Idaho",
    },
    host: "localhost:5500"
};

const outputFile = "./swagger-output.json";
const routes = require("./Routes/index");

swaggerAutoGen(outputFile, routes, doc);