const repo = require("../repositories/appointmentRepository");
const cache = require("../cache/slotCache");
const eventBus = require("./eventBus");

const availableSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM"
];

exports.getSlots = () => {
  const cached = cache.get("slots");

  if (cached) {
    console.log("Returning slots from cache");
    return cached;
  }

  cache.set("slots", availableSlots);
  return availableSlots;
};

exports.bookAppointment = (data) => {
  const appointment = repo.save(data);

  eventBus.emit("APPOINTMENT_BOOKED", appointment);

  return appointment;
};

