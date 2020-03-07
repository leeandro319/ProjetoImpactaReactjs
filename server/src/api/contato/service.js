const model = require('./model');

model.methods(['get', 'post']);
model.updateOptions({ new : true, runValidator : true})

module.exports = model;