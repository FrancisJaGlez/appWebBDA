const mongoose = require("mongoose")

//Creamos la estructura del documento de entrada en la coleccion
const FunkoSchema = mongoose.Schema({
  nombreFunko: {
    type: String,
    required: true
  },
  modeloFunko:{
    type: String,
    required: true
  },
  categoriaFunko:{
    type: String,
    required: true
  },
  precioFunko: {
    type: String,
    required: false
  },
  tipoFunko: {
    type: String,
    required: true
  },
  licenciaFunko: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: false
  }
},{collection:"funkos"})

module.exports = mongoose.model("funkosDB", FunkoSchema)