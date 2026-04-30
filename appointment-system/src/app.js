const express = require("express");
const controller = require("./controllers/appointmentController");

require("./listeners/notificationListener");

const app = express();
app.use(express.json());

app.get("/slots", controller.getSlots);
app.post("/appointments", controller.bookAppointment);

app.listen(3000, () => {
  console.log("Appointment system running on port 3000");
});

