require("dotenv").config();
const { log } = require("console");
const express = require("express");
const ultramsg = require("ultramsg-whatsapp-api");
const instance_id = process.env.INSTANCE_ID; // Ultramsg.com instance id
const ultramsg_token = process.env.TOKEN; // Ultramsg.com token
const api = new ultramsg(instance_id, ultramsg_token);
(async function () {
  var to = "50671842430";
  var body = "Hello world";
  const response = await api.sendChatMessage(to, body);
  console.log(response);
})();

// const app = express();
// app.use(express.static(__dirname));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/static/home.html");
//   //   res.send("<h1>This is the new Home Page</h1>");
// });
// app.listen(3000, function () {
//   console.log("Running in the port 3000");
// });
