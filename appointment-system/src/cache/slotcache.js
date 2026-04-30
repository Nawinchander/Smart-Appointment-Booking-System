const cache = {};

exports.get = (key) => cache[key];
exports.set = (key, value) => cache[key] = value;

