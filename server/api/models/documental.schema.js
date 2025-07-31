import { defineMongooseModel } from '#nuxt/mongoose'
import { Types } from 'mongoose'

// Definición del modelo para representar un registro de video (unidad documental)
export const Documental = defineMongooseModel({
    name: 'Documental',

    schema: {
        identificacion: {
            codigoReferencia: {type: 'string', required: true, trim: true, unique: true },
            referenciaProcedencia: {type: 'string', trim: true},
            titulo: {type: 'string', trim: true},
            fecha: {type: 'string', trim: true},
            tituloSerie: {type: 'string', trim: true},
            numeroPrograma: {type: 'string', trim: true},
            pais: {type: 'string', trim: true},
            duracion: {type: 'number'}, // total de minutos
            realizacion: {type: 'string', trim: true},
            investigacion: {type: 'string', trim: true},
            ideaOriginal: {type: 'string', trim: true},
            guion: {type: 'string', trim: true},
            camara: {type: 'string', trim: true},
            sonido: {type: 'string', trim: true},
            fotografia: {type: 'string', trim: true},
            animacion: {type: 'string', trim: true},
            musicaOriginal: {type: 'string', trim: true},
            musicalizacion: {type: 'string', trim: true},
            direccionActuacion: {type: 'string', trim: true},
            direccion: {type: 'string', trim: true},
            voces: {type: 'string', trim: true},
            otrosColaboracion: {type: 'string', trim: true},
        },
        contexto: {
            entidadProductora: {type: 'string', trim: true},
            produccion: {type: 'string', trim: true},
            distribuidora: {type: 'string', trim: true},
            historiaInstitucional: {type: 'string', trim: true},
            resenaBiografica: {type: 'string', trim: true},
        },
        contenidoEstructura: {
            sinopsis: {type: 'string', trim: true},
            descriptorOnomastico: {type: 'string', trim: true},
            descriptorToponimico: {type: 'string', trim: true},
            descriptorTopografico: {type: 'string', trim: true},
            fuentes: {type: 'string', trim: true},
            recursos: {type: 'string', trim: true},
        },
        condicionesAccesoUso: {
            idiomaOriginal: {type: 'string', trim: true},
            subtitulaje: {type: 'string', trim: true},
            color: {type: 'string', enum: ['Color', 'Blanco y negro']},
            soporteOriginal: {type: 'string', enum: ['Betacam', 'Hi8', 'DVCAM', 'MiniDV', 'VHS']},
        },
        documentacionAsociada: {
            originales: {type: 'string', trim: true},
            unidadesRelacionadas: {type: 'string', trim: true},
            notasPublicacion: {type: 'string', trim: true},
        },
        notas: {
            notas: {type: 'string', trim: true},
        },
        controlDescripcion: {
            nombreCatalogacion: {type: 'string', trim: true},
        },
        adicional: {
            imagen: {type: 'string', trim: true}, // referencia a la portada
            clipVideo: {type: 'string', trim: true}, // referencia al clip de video
        },
    },
    
    // Opciones adicionales del modelo
    options: {
        // Habilita propiedades 'createdAt' (fecha de creación) y 'updatedAt' (fecha de última modificación)
        timestamps: true,
        // Nombre en la base de datos (por convención se pluraliza)
        collection: 'documentales',
    },

    // Schema Hooks Function to customize Model
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