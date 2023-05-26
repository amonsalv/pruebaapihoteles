import express from 'express'
import cors from 'cors'
import {rutas} from './routes/rutas.js'
import { establecerConexion } from './database/conexion.js'

export class API{
    constructor(){
        this.app = express() //app es express
        this.conectarBD()
        this.enrutarPeticiones()
    }
    despertarServidor(){
        this.app.listen(3000,()=>console.log("Servidor encendido..."))
    }
    enrutarPeticiones(){
        this.app.use(cors())
        this.app.use(express.json()) //habilitamos la recepcion de datos desde el body de la peticion
        this.app.use('/',rutas) //habilitamos las rutas o endpoints
    }
    conectarBD(){
        establecerConexion()
    }
}