//Importando la biblioteca para realizar aplicaciones web
const express = require("express")
const path = require("path")

const bodyParser = require("body-parser")

const {config, engine} = require('express-edge')

const Mongo = require("mongoose")
Mongo.connect(`mongodb://localhost:27017/funkosDB`)
  .then(()=>console.log("Conexion a DB exitosa"))
  .catch(err=>console.log(err))

const Funko = require("./models/funko")

//Creación de la aplicación web
const app = express();
//renderiza archi html como ejs
//app.engine("html",require('ejs').renderFile)
//app.set("view engine","ejs")

//edge
app.use(engine);
app.set('views', `${__dirname}/views`);


//Configurar el servidor y que sepa que es un json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//Atender una petición del recurso mipagina
app.get('/inicio',(request,response)=>{
    response.sendFile(path.join(__dirname,'views','index.html'))
})

app.get('/miColeccion', async(request,response)=>{
    //response.sendFile(path.join(__dirname,'views','miColeccion.html'))
    const funkos = await Funko.find({})
    console.log(funkos)
    
    response.render('miColeccion', {
        funkos
    })
})

app.get('/agregaFunko',(request,response)=>{
    response.sendFile(path.join(__dirname, 'views', 'agregaFunko.html'))
})

app.post("/agregarFunko/guardar", (req, res)=>{
    console.log(req.body)
    Funko.create(req.body, (error, usuario) =>{ //agrega a la base de datos el nuevo funko
        res.redirect("/miColeccion")
    })
})

app.get("/miColeccion/borrarFunko/:id",  async(req,res)=> {
    const funko = await Funko.findByIdAndDelete(req.params.id)
    console.log(funko)
    console.log("Funko Eliminado")
    res.redirect("/miColeccion")
})

//Que la aplicación escuche peticiones
app.listen(8080,()=>{
    console.log("Aplicación web en línea localhost:8080/inicio")
})


