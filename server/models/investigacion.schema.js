import { defineMongooseModel } from '#nuxt/mongoose'
import { Types } from 'mongoose'

// Definición del modelo para representar a investigador/a (a.k.a. terceros aportantes)

export const Investigacion = defineMongooseModel({
    name: 'Investigacion',

    schema: {
        nombre: {type: 'string', trim: true}, // nombre propio
        url: {type: 'string', trim: true}, // identificador URL (ej.: lilia-garcia, felipe-morales, etc.)
        semblanza: {type: 'string', trim: true}, // máximo de 30 palabras
        imagen: {type: 'string', trim: true}, // referencia a fotografía (ej.: "nombre-propio.jpg")
    },
    
    // Opciones adicionales del modelo
    options: {
        // Habilita propiedades 'createdAt' y 'updatedAt'
        timestamps: false,
        // Nombre en la base de datos (por convención se pluraliza)
        collection: 'investigacion',
    },
})