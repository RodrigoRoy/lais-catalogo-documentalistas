/**
* Obtener documentalistas en base de datos
* @param {string} req.query.sortBy Ordenamiento opcional por campo (ej.: fechaNacimiento, -fechaNacimiento, nombre, -nombreCompleto)
* @param {boolean} req.query.principales Filtra documentalistas por tipo "principales" (con imagen en index/portada)
*/
export default defineEventHandler( async (event) => {
    const query = getQuery(event)
    
    // Construir query base para MongoDB
    let dbQuery = Documentalista.find()

    // Filtrar por documentalistas principales
    if(query?.principales && query?.principales === 'true')
        dbQuery = Documentalista.find({principal: true})
    else if(query?.principales && query?.principales === 'false')
        dbQuery = Documentalista.find({principal: false})

    // Aplicar ordenamiento (por default es orden alfabético)
    dbQuery = query?.sortBy ? dbQuery.sort(query?.sortBy) : dbQuery.sort('nombre')

    // Incluir referencias de documentales
    dbQuery = dbQuery.populate('documentales')

    try {
        return await dbQuery.exec()
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})