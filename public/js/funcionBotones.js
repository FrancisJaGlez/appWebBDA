function obtenerDatos(){
//obtendra datos y los modificara en la tabla de informacion
    //Obtener los datos de la base de datos

    const funkoActual = document.getElementById("imgPcl")
    const nombreFunko = document.getElementById("nombreFunko")
    const modeloFunko = document.getElementById("modeloFunko")
    const categoriaFunko = document.getElementById("modeloFunko")
    const precioFunko = document.getElementById("modeloFunko")
    const tipoFunko = document.getElementById("modeloFunko")
    const descripcionFunko = document.getElementById("modeloFunko")
    const licenciaFunko = document.getElementById("modeloFunko")

    if ( funkoActual.getAttribute("alt") == "appaFunko"){
        nombreFunko.innerHTML = "APPA - AVATAR: THE LAST AIRBENDER"
        modeloFunko.innerHTML = "Modelo: 36468"
    } else if (  funkoActual.getAttribute("alt") == "carnageFunko") {
        nombreFunko.innerHTML = "CARNAGE - VENOM: LET THERE BE CARNAGE"
        modeloFunko.innerHTML = "Modelo: 56303"
    } else if (  funkoActual.getAttribute("alt") == "groguFunko") {
        nombreFunko.innerHTML = "GROGU WITH COOKIES - THE MANDALORIAN"
        modeloFunko.innerHTML = "Modelo: 54531"
    } else {

    }
}

function funkoAnterior(){
    const funkoActualImage1 = document.getElementById("imgPcl")
    const funkoActualImage2 = document.getElementById("imgPcl2")
    if ( funkoActualImage1.getAttribute("alt") == "appaFunko"){

    } else if (funkoActualImage1.getAttribute("alt") == "carnageFunko") {
        funkoActualImage1.src = "images/appa_1.jpg"
        funkoActualImage2.src = "images/appa_2.jpg"
        funkoActualImage1.setAttribute("alt", "appaFunko")
        funkoActualImage2.setAttribute("alt", "appaFunko")
        obtenerDatos()
        
    } else if (funkoActualImage1.getAttribute("alt") == "groguFunko") {
        funkoActualImage1.src = "images/carnage_1.jpg"
        funkoActualImage2.src = "images/carnage_2.jpg"
        funkoActualImage1.setAttribute("alt", "carnageFunko")
        funkoActualImage2.setAttribute("alt", "carnageFunko")
        obtenerDatos()
        
    } else {

    }
}

function funkoSiguiente(){
    const funkoActualImage1 = document.getElementById("imgPcl")
    const funkoActualImage2 = document.getElementById("imgPcl2")
    if ( funkoActualImage1.getAttribute("alt") == "appaFunko"){
        funkoActualImage1.src = "images/carnage_1.jpg"
        funkoActualImage2.src = "images/carnage_2.jpg"
        funkoActualImage1.setAttribute("alt", "carnageFunko")
        funkoActualImage2.setAttribute("alt", "carnageFunko")
        obtenerDatos()
    } else if (funkoActualImage1.getAttribute("alt") == "carnageFunko") {
        funkoActualImage1.src = "images/grogu_1.jpg"
        funkoActualImage2.src = "images/grogu_2.jpg"
        funkoActualImage1.setAttribute("alt","groguFunko")
        funkoActualImage2.setAttribute("alt","groguFunko")
        obtenerDatos()
    } else if (funkoActualImage1.getAttribute("alt") == "groguFunko") {
        
    } else {

    }
}
