const restfull = require('node-restful');
const {Schema} = restfull.mongoose;

const contatos = new Schema({
    date: { type: Date, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true},
    assunto: { type: String, required: true },
});

module.exports = restfull.model('contatos', contatos);