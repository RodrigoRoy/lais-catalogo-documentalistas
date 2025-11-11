/**
* Obtener documentales en base de datos
* @param {string} req.query.tema Valor para filtrar por tema
* @param {string} req.query.year Valor para filtrar por año
* @param {string} req.query.documentalista Valor para filtrar por Id de documentalista
* @param {string} req.query.sortBy Tipo de ordenamiento: fecha, titulo
*/
export default defineEventHandler( async (event) => {
    const query = getQuery(event)

    // Construir query de búsqueda a partir de req.query
    let findQuery = {}

    // Filtrar por tema (tag, palabra clave)
    if(query?.tema)
        findQuery['adicional.etiquetas'] = query.tema
    // Filtrar por fecha
    if(query?.year)
        findQuery['identificacion.fecha'] = query.year
    // Filtrar por nombre de documentalista
    if(query?.documentalista)
        findQuery['adicional.mujeres'] = query.documentalista

    // Query de MongoDB con posibles filtros
    let dbQuery = Documental.find(findQuery)

    // Aplicar ordenamiento
    if(query?.sortBy && query?.sortBy === 'fecha')
        dbQuery = dbQuery.sort('identificacion.fecha')
    else(query?.sortBy && query?.sortBy === 'titulo')
        dbQuery = dbQuery.sort('identificacion.titulo')

    // Incluir referencias a documentalistas y autoría del comentario
    dbQuery = dbQuery.populate('adicional.mujeres').populate('adicional.comentario.autoria')

    try {
        return await dbQuery.exec()
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})