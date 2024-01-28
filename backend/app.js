const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middlewares/error");
const fileUpload = require("express-fileupload");
// const dotenv = require('dotenv')

const path = require('path')
const cloudinary = require('cloudinary')

config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// import all routes
const products = require("./routes/product");
const auth = require("./routes/auth");
const payment = require("./routes/payments");
const order = require("./routes/order");

app.use("/api/v2", products);
app.use("/api/v2", auth);
app.use("/api/v2", payment);
app.use("/api/v2", order);

if(process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    } )
}

app.use(errorMiddleware);

module.exports = app;
