import express from 'express'
import cors from 'cors'
import {rutas} from './routes/rutas.js'
import { establecerConexion } from './database/conexion.js'

export class API{
    constructor(){
        this.app = express() //app es express
        this.conectarBD()
        this.enrutarPeticiones()
        this.manejarErrores()
    }
    despertarServidor(){
        const PORT = process.env.PORT || 3000;
        this.app.listen(PORT,()=>console.log(`Servidor encendido en el puerto ${PORT}...`))
    }
    enrutarPeticiones(){
        this.app.get('/', (req, res) => {
            res.send('¡Bienvenido a mi API!');
        });
    
        this.app.use(cors())
        this.app.use(express.json()) //habilitamos la recepcion de datos desde el body de la peticion
        this.app.use('/',rutas) //habilitamos las rutas o endpoints
    }
    manejarErrores(){
        this.app.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).send('¡Algo salió mal!');
        });
    }
    async conectarBD(){
        try {
            await establecerConexion();
            console.log('Conexión a la base de datos establecida con éxito');
        } catch (error) {
            console.error('No se pudo conectar a la base de datos', error);
            process.exit(1);
        }
    }
}