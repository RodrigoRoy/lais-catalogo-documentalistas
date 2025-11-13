import { defineMongooseModel } from '#nuxt/mongoose'

// Definición del modelo para representar una opinión del Catálogo
export const Opinion = defineMongooseModel({
    name: 'Opinion',

    schema: {
        nombre: {type: 'string', trim: true}, // nombre de quien redacta la opinión/comentario
        fecha: {type: 'date'}, // fecha del comentario / opinión
        texto: {type: 'string', trim: true}, // comentario / opinión
    },
    
    // Opciones adicionales del modelo
    options: {
        // Habilita propiedades 'createdAt' y 'updatedAt'
        timestamps: true,
        // Nombre en la base de datos (por convención se pluraliza)
        collection: 'opinion',
    },
})