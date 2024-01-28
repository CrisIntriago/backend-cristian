import express from "express"


const app= express();

console.log("Inicio mi proyectito");

app.listen(4000, ()=>{
    console.log("Servidor MERN escuchando desde puerto 4000");
})