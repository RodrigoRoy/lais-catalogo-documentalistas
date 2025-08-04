import { defineMongooseModel } from '#nuxt/mongoose'

// Definición del modelo para representar un documental

export const Documental = defineMongooseModel({
    name: 'Documental',

    schema: {
        identificacion: {
            codigoReferencia: {type: 'string', required: true, trim: true }, // 1 palabra (ej. MXIM-AV-21-1-7)
            referenciaProcedencia: {type: 'string', trim: true}, // nombre propio
            titulo: {type: 'string', trim: true}, // nombre propio
            fecha: {type: 'string', trim: true},
            tituloSerie: {type: 'string', trim: true}, // nombre propio
            numeroPrograma: {type: 'string', trim: true}, // nombre propio
            pais: {type: 'string', trim: true}, // nombre propio
            duracion: {type: 'number'}, // total de minutos
            realizacion: {type: 'string', trim: true}, // nombres de personas
            investigacion: {type: 'string', trim: true}, // nombres de personas
            ideaOriginal: {type: 'string', trim: true}, // nombres de personas
            guion: {type: 'string', trim: true}, // nombres de personas
            camara: {type: 'string', trim: true}, // nombres de personas
            sonido: {type: 'string', trim: true}, // nombres de personas
            fotografia: {type: 'string', trim: true}, // nombres de personas
            animacion: {type: 'string', trim: true}, // nombres de personas
            musicaOriginal: {type: 'string', trim: true}, // nombres de personas
            musicalizacion: {type: 'string', trim: true}, // nombres de personas
            direccionActuacion: {type: 'string', trim: true}, // nombres de personas
            direccion: {type: 'string', trim: true}, // nombres de personas
            voces: {type: 'string', trim: true}, // nombres de personas
            otrosColaboracion: {type: 'string', trim: true}, // nombres de personas
        },
        contexto: {
            entidadProductora: {type: 'string', trim: true}, // nombre propio
            produccion: {type: 'string', trim: true}, // nombre propio
            distribuidora: {type: 'string', trim: true}, // nombre propio
            historiaInstitucional: {type: 'string', trim: true}, // sinopsis (1 o más párrafos)
            resenaBiografica: {type: 'string', trim: true}, // sinopsis (1 o más párrafos)
        },
        contenidoEstructura: {
            sinopsis: {type: 'string', trim: true}, // 1 o más párrafos
            descriptorOnomastico: {type: 'string', trim: true}, // lista de nombres propios
            descriptorToponimico: {type: 'string', trim: true}, // lista de fechas
            descriptorTopografico: {type: 'string', trim: true},  // lista de lugares
            fuentes: {type: 'string', trim: true}, // TO DO: Definir lista
            recursos: {type: 'string', trim: true}, // TO DO: Definir lista
        },
        condicionesAccesoUso: {
            idiomaOriginal: {type: 'string', trim: true}, // default: Español
            subtitulaje: {type: 'string', trim: true},
            color: {type: 'string', enum: ['Color', 'Blanco y negro']},
            soporteOriginal: {type: 'string', enum: ['Betacam', 'Hi8', 'DVCAM', 'MiniDV', 'VHS']},
        },
        documentacionAsociada: {
            originales: {type: 'string', trim: true}, // extensión aproximada de 1 párrafo
            unidadesRelacionadas: {type: 'string', trim: true}, // extensión aproximada de 1 párrafo
            notasPublicacion: {type: 'string', trim: true}, // extensión aproximada de 1 párrafo
        },
        notas: {
            notas: {type: 'string', trim: true}, // extensión máxima de 3 párrafo
        },
        controlDescripcion: {
            nombreCatalogacion: {type: 'string', trim: true}, // nombre propio de una persona
        },
        adicional: {
            imagen: {type: 'string', trim: true}, // referencia a la portada (ej.: "documental_1.jpg")
            clipVideo: {type: 'string', trim: true}, // referencia al clip de video (ej.: "documental_1.mp4")
        },
    },
    
    // Opciones adicionales del modelo
    options: {
        // Habilita propiedades 'createdAt' y 'updatedAt'
        timestamps: true,
        // Nombre en la base de datos (por convención se pluraliza)
        collection: 'documentales',
    },

    // Schema Hooks para personalización del modelo
    hooks(schema){
        // Creación de índices para búsqueda textual
        schema.index( {'$**': 'text'}, {
            name: 'documentalTextSearch',
            weights: {
                'identificacion.titulo': 4,
                'contenidoEstructura.sinopsis': 5,
                'contenidoEstructura.descriptorOnomastico': 3,
                'contenidoEstructura.descriptorToponimico': 3,
                'contenidoEstructura.descriptorTopografico': 3,
                'notas.notas': 2,
            },
        })
    },
})