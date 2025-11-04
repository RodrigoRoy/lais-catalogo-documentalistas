import { defineMongooseModel } from '#nuxt/mongoose'
import { Types } from 'mongoose'

// Definición del modelo para representar a una mujer documentalista

export const Documentalista = defineMongooseModel({
    name: 'Documentalista',

    schema: {
        nombre: {type: 'string', trim: true}, // nombre propio
        nombreCompleto: {type: 'string', trim: true}, // nombre propio
        url: {type: 'string', trim: true}, // identificador URL (ej.: rosa-martha-fernandez, trinidad-langarica, bertha-navarro, etc.)
        fechaNacimiento: {type: 'date'},
        fechaDefuncion: {type: 'date'},
        semblanza: {type: 'string', trim: true}, // máximo de 400 palabras
        semblanzaHTML: {type: 'string', trim: true}, // misma semblanza con formato HTML
        mencionResponsabilidad: {type: 'string', trim: true}, // actividades que realizó (ej.: "Investigación", "Sonidista y fotografía fija")
        documentales: [{type: Types.ObjectId, ref: 'Documental'}], // referencia a documentales donde participó
        colectivos: {type: 'string', trim: true}, // lista de nombres propios
        imagen: {type: 'string', trim: true}, // referencia a retrato (ej.: "documentalista_1.jpg")
        clipVideo: {type: 'string', trim: true}, // referencia a video de presentación (ej.: "documentalista_1.mp4")
        galeria: [{
            imagen: {type: 'string', trim: true}, // referencia a fotografía (ej.: "acervo_1.jpg")
            descripcion: {type: 'string', trim: true}, // breve pie de página (1-2 líneas de texto)
        }],
        principal: {type: 'boolean', default: false}, // indica si se tiene suficiente información de ella
    },
    
    // Opciones adicionales del modelo
    options: {
        // Habilita propiedades 'createdAt' y 'updatedAt'
        timestamps: true,
        // Nombre en la base de datos (por convención se pluraliza)
        collection: 'documentalistas',
    },

    // Schema Hooks para personalización del modelo
    hooks(schema){
        // Creación de índices para búsqueda textual
        schema.index( {'$**': 'text'}, {
            name: 'documentalistaTextSearch',
            weights: {
                'nombre': 3,
                'nombreCompleto': 3,
                'semblanza': 2,
            },
        })
    },
})