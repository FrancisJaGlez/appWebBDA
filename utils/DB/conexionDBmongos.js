const mongoose = require("mongoose")
const Funko = require("../../models/funko")

//user password
mongoose.connect(`mongodb://localhost:27017/funkosDB`)
  .then(()=>console.log("conexion exitosa"))
  .catch(err=>console.log(err))


  //Agregar un documento
  const funko = new Funko({
    nombreFunko: "Prueba",
    modeloFunko: "12365",
    categoriaFunko: "Prueba",
    precioFunko: "11.00",
    tipoFunko: "Prueba",
    licenciaFunko: "licenciaprueba",
    descripcion: "este es la prueba"
    
  })

  //CREATE
  Funko.create(funko)
  .then(()=>{
    console.log(funko)
    console.log("funko agregado")
  })
  .catch(err=>console.log(err))

  
/*funko.find({})
  .then(resultado=>{
    console.log(resultado)
  })
  .catch(err=>console.log(err))*/

  //READ
  /*Pokemon.find({nombre:"Charmander"})  //todos los que cumplen con... vacio para todo
  .then(resultado=>{
    console.log(resultado) //imprime el tipo del segundo elemento resultado[2].tipo[0]
  })
  .catch(err=>console.log(err))

  */

  //UPDATE
  /*async function actualizar(){
    try{
      //condicion y cambio  await:primero haz la busqueda y despues guardalo
      await Pokemon.findOneAndUpdate({nombre:"Charmander"},{descripcion:"dragon de fuego"})
      let pok = await Pokemon.findOne({nombre:"Charmander"})
      console.log(pok)
    }catch(err){
      console.log(err)
    }
  }

  actualizar()

  //DELETE
  const eliminar = async ()=>{
    await Pokemon.findByIdAndRemove("61678b869c49f62cd4e327c2")
    console.log("Pokemon eliminado")
    let todos = await Pokemon.find()
    console.log(todos)
  }

  eliminar()*/