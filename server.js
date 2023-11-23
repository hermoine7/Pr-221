const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'shravyashankar07@gmail.com',
        pass: 'eqzd pdve nqsr vyxv',
    },
    secure: true,
});

server.listen(process.env.PORT || 3030);