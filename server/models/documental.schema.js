import { defineMongooseModel } from '#nuxt/mongoose'
import { Types } from 'mongoose'

// Definición del modelo para representar un documental
export const Documental = defineMongooseModel({
    name: 'Documental',

    schema: {
        identificacion: {
            codigoReferencia: {type: 'string', required: true, trim: true }, // 1 palabra (ej. MXIM-AV-21-1-7)
            referenciaProcedencia: {type: 'string', trim: true}, // nombre propio
            titulo: {type: 'string', trim: true}, // nombre propio
            fecha: {type: 'string', trim: true}, // año, periodo o año aproximado (ej.: 1975, 1977-1978, ca. 1981, c. 1982)
            tituloSerie: {type: 'string', trim: true}, // nombre propio
            numeroPrograma: {type: 'string', trim: true}, // nombre propio
            pais: {type: 'string', trim: true}, // nombre propio
            duracion: {type: 'number'}, // total de minutos
            realizacion: {type: 'string', trim: true}, // nombres de personas
            investigacion: {type: 'string', trim: true}, // nombres de personas
            ideaOriginal: {type: 'string', trim: true}, // nombres de personas
            guion: {type: 'string', trim: true}, // nombres de personas
            edicion: {type: 'string', trim: true}, // nombres de personas
            camara: {type: 'string', trim: true}, // nombres de personas
            sonido: {type: 'string', trim: true}, // nombres de personas
            fotografia: {type: 'string', trim: true}, // nombres de personas
            animacion: {type: 'string', trim: true}, // nombres de personas
            musicaOriginal: {type: 'string', trim: true}, // nombres de personas
            musicalizacion: {type: 'string', trim: true}, // nombres de personas
            direccionActuacion: {type: 'string', trim: true}, // nombres de personas
            actuacion: {type: 'string', trim: true}, // nombres de personas
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
            descriptorCronologico: {type: 'string', trim: true},  // lista de lugares
            fuentes: {type: 'string'}, // ['Entrevistas', 'Grabación de campo', 'Ficción', 'Documentales', 'Registros fílmicos', 'Fotografías', 'Pinturas', 'Grabados', 'Hemerografía', 'Cartografía', 'Testimonios orales', 'Testimonios videorales', 'Noticieros fílmicos', 'Programas de tv', 'Publicidad', 'Videoclips', 'Dibujos', 'Música de época', 'Documentos textuales', 'Registros fonográficos', 'Registros videográficos']
            recursos: {type: 'string'}, // ['Puesta en escena', 'Animación', 'Sonidos incidentales', 'Narración de voz en off', 'Conducción', 'Intertítulos', 'Musicalización', 'Gráficos']
        },
        condicionesAccesoUso: {
            idiomaOriginal: {type: 'string', trim: true}, // default: Español
            subtitulaje: {type: 'string', trim: true},
            color: {type: 'string', trim: true}, // ['Color', 'Blanco y negro']
            soporteOriginal: {type: 'string', trim: true}, // ['35 mm', '16 mm', 'Super 8', 'U-matic', 'Betacam', 'Betamax', 'VHS', 'Hi8', 'DVCAM', 'MiniDV']
        },
        documentacionAsociada: {
            unidadesRelacionadas: {type: 'string', trim: true}, // extensión aproximada de 1 párrafo
            notasPublicacion: {type: 'string', trim: true}, // extensión aproximada de 1 párrafo
        },
        notas: {
            notas: {type: 'string', trim: true}, // extensión máxima de 3 párrafo
        },
        controlDescripcion: {
            nombreCatalogacion: {type: 'string', trim: true}, // nombre propio de una persona
            fechaDescripcion: {type: 'string', trim: true}, // fecha textual (ej.: 3 de febrero de 2024, Abril de 2024, 06/11/24) NOTA: tratar de usar Date datatype
        },
        adicional: {
            imagen: {type: 'string', trim: true}, // referencia a la portada (ej.: "documental_1.jpg")
            clipVideo: {type: 'string', trim: true}, // referencia al clip de video (ej.: "documental_1.mp4")
            mujeres: [{
                documentalista: {type: Types.ObjectId, ref: 'Documentalista'}, // referencia al documental donde participó
                mencionResponsabilidad: {type: 'string', trim: true}, // cargo que desempeñó en el documental (ej.: dirección, cámara, animación, sonido, etc.)
            }],
            etiquetas: {type: ['string'], trim: true}, // lista de 3 etiquetas/tags
            url: {type: 'string', trim: true}, // identificador URL (ej.: mujer-asi-es-la-vida, ayautla, vida-de-angel, etc.)
            externalUrl: {type: 'string', trim: true}, // link externo (ej.: https://www.youtube.com/watch?v=dQw4w9WgXcQ)
            comentario: { // reseña del documental
                texto: {type: 'string', trim: true}, // párrafos de comentario/reseña
                fecha: {type: 'string', trim: true}, // fecha textual (ej.: 3 de febrero de 2024, Abril de 2024, 06/11/24) NOTA: tratar de usar Date datatype
                autoria: {type: Types.ObjectId, ref: 'Documentalista'}, // autor/a del equipo de investigación (modelo investigacion.schema.js)
            },
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