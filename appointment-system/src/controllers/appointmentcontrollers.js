const service = require("../services/appointmentService");

exports.getSlots = (req, res) => {
  res.json(service.getSlots());
};

exports.bookAppointment = (req, res) => {
  res.json(service.bookAppointment(req.body));
};

