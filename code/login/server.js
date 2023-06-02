const { connectdb } = require('./connect');
const express = require('express');
const cors = require('cors');
const controller = require('./controller');

const app = express();

app.use(cors());
app.use(express.json());


connectdb()
    .then(() => { console.log('db connected') })
    .catch((err) => { console.log(err) });

    const port = 7000;
    app.listen(port, () => { console.log("Listening at the port " + port) })

    app.post("/api/hotel/customers",controller.insertCustomers);
    app.post("/api/hotel/contact",controller.insertContact);
    app.post("/api/hotel/order",controller.insertOrder);


