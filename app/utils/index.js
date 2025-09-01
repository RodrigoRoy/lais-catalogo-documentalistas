// Cualquier función o constante definida aquí se auto-importa en componentes y páginas del proyecto.

/**
 * Cambia el formato camelCase a lenguaje natural en español.
 * Útil para mostrar correctamente cualquier área o campo definido en el modelo de la base de datos.
 * @param {string} uriField Nombre de la propiedad, área o campo
 * @returns {string} Formato correcto en español
 */
export function format(uriField){
    const dictionary = {
        identificacion: 'Identificación',
        codigoReferencia: 'Código de referencia',
        referenciaProcedencia: 'Referencia de procedencia',
        titulo: 'Título',
        fecha: 'Fecha',
        tituloSerie: 'Título de la serie',
        numeroPrograma: 'Número de programa',
        pais: 'País',
        duracion: 'Duración',
        realizacion: 'Realización',
        investigacion: 'Investigación',
        ideaOriginal: 'Idea original',
        guion: 'Guión',
        edicion: 'Edición',            
        camara: 'Cámara',
        sonido: 'Sonido directo',
        fotografia: 'Fotografía fija',
        animacion: 'Animación',
        musicaOriginal: 'Música original',
        musicalizacion: 'Musicalización',
        direccionActuacion: 'Dirección de actores',
        actuacion: 'Actuación',
        voces: 'Voces',
        otrosColaboracion: 'Otros colaboradores',
        
        contexto: 'Contexto',
        entidadProductora: 'Entidad productora',
        produccion: 'Producción',
        distribuidora: 'Distribución',
        historiaInstitucional: 'Historia institucional',
        resenaBiografica: 'Reseña biográfica',

        contenidoEstructura: 'Contenido y estructura',
        sinopsis: 'Sinópsis',
        descriptorOnomastico: 'Descriptor onomástico',
        descriptorToponimico: 'Descriptor toponímico',
        descriptorCronologico: 'Descriptor cronológico',
        fuentes: 'Fuentes',
        recursos: 'Recursos',

        condicionesAccesoUso: 'Condiciones de acceso y uso',
        idiomaOriginal: 'Idioma original',
        subtitulaje: 'Subtitulajes disponibles',
        color: 'Color',
        soporteOriginal: 'Soporte original',

        documentacionAsociada: 'Documentación asociada',
        unidadesRelacionadas: 'Unidades de descripción relacionadas',
        notasPublicacion: 'Notas de publicación',
        
        notas: 'Notas',

        controlDescripcion: 'Control de la descripción',
        nombreCatalogacion: 'Persona que documenta',
        fechaDescripcion: 'Fecha de descripción',
    }
    
    if(!dictionary.hasOwnProperty(uriField))
        return ''

    return dictionary[uriField]
}