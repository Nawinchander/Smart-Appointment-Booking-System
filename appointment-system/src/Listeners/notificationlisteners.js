const eventBus = require("../services/eventBus");

eventBus.on("APPOINTMENT_BOOKED", (appointment) => {
  console.log(`Notification sent to ${appointment.name}`);
});

 