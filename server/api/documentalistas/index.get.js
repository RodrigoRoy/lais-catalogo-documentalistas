/**
* Obtener documentalistas en base de datos
* @param {string} req.query.sortBy Ordenamiento opcional por campo (ej.: fechaNacimiento, -fechaNacimiento, nombre, -nombreCompleto)
* @param {boolean} req.query.principales Filtra solamente documentalistas principales (el único valor permitido es "true", falso en otro caso)
*/
export default defineEventHandler( async (event) => {
    const query = getQuery(event)
    
    // Construir query base para MongoDB
    let dbQuery = Documentalista.find()

    // Filtrar por documentalistas principales
    if(query?.principales && query?.principales === 'true')
        dbQuery = Documentalista.find({principal: true})

    // Aplicar ordenamiento (por default es orden alfabético)
    dbQuery = query?.sortBy ? dbQuery.sort(query?.sortBy) : dbQuery.sort('nombre')

    try {
        return await dbQuery.exec()
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})