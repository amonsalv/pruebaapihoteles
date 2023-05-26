import mongoose, { mongo } from 'mongoose'

const Schema = mongoose.Schema;

//construimos el esquema persdonalizando la informacion
const Habitacion=new Schema({
    nombre:{
        type:String,
        required:true
    },
    foto:{
        type:[String],
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    precioNoche:{
        type:Number,
        required:true
    },
    cantidadmaxima:{
        type:Number,
        required:true
    }
})

export const modeloHabitacion=mongoose.model('habitacion',Habitacion)