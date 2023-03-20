const express = require('express');
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(cors());
require("dotenv").config({ path: "./.env" });
app.use(express.json());
swaggerJsdoc = require("swagger-jsdoc");
swaggerUi = require("swagger-ui-express");

app.use('/api', require('./routes'));

app.get('/', (req, res) => {
     res.send('Todo ok Javier!')
 })

 const options = {
    definition: {
      swagger: "2.0",
      info: {
        title: "Url shortener",
        version: "0.1.0",
        description:
          "",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "LogRocket",
          url: "https://logrocket.com",
          email: "javier.rico.moreno@email.com",
        },
      },
      servers: [{
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );



//configuración del servidor
app.listen( process.env.PORT || 5000, function () {
    console.log('Servidor corriendo en http://localhost:5000');
})