/**
* Obtener documentales en base de datos
* @param {string} req.query.filterBy Tipo de filtrado: fecha, tema, documentalista
* @param {string} req.query.q Valor para filtrar
* @param {string} req.query.sortBy Tipo de ordenamiento: fecha, -fecha, titulo, -titulo
*/
export default defineEventHandler( async (event) => {
    const query = getQuery(event)

    // Construir query base para MongoDB
    let dbQuery = Documental.find()

    // Filtrar por fecha
    if(query?.filterBy && query?.filterBy === 'fecha' && query?.q)
        dbQuery = Documental.find({'identificacion.fecha': query.q})
    // Filtrar por tema (tag, palabra clave)
    else if(query?.filterBy && query?.filterBy === 'tema' && query?.q)
        dbQuery = Documental.find({'adicional.etiquetas': query.q})
    // Filtrar por nombre de documentalista
    else if(query?.filterBy && query?.filterBy === 'documentalista' && query?.q)
        dbQuery = Documental.find({'adicional.mujeres': {$elemMatch: {nombre: query.q} } })

    // Aplicar ordenamiento (por default es orden cronológico)
    if(query?.sortBy && query?.sortBy === 'fecha')
        dbQuery = dbQuery.sort('identificacion.fecha')
    else if(query?.sortBy && query?.sortBy === '-fecha')
        dbQuery = dbQuery.sort('-identificacion.fecha')
    else if(query?.sortBy && query?.sortBy === 'titulo')
        dbQuery = dbQuery.sort('identificacion.titulo')
    else if(query?.sortBy && query?.sortBy === '-titulo')
        dbQuery = dbQuery.sort('-identificacion.titulo')
    else
        dbQuery = dbQuery.sort('identificacion.fecha')

    try {
        return await dbQuery.exec()
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})