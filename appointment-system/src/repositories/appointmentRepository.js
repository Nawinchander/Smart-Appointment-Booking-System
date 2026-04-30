const appointments = [];

exports.save = (appointment) => {
  appointments.push(appointment);
  return appointment;
};

