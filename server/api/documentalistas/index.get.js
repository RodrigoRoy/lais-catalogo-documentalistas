/**
* Obtener todas las documentalistas en base de datos
* @param {string} req.query.sortBy Ordenamiento opcional por campo (ej.: fechaNacimiento, -fechaNacimiento, nombre, -nombreCompleto)
*/
export default defineEventHandler( async (event) => {
    const query = getQuery(event)
    const sortQuery = query?.sortBy ? query.sortBy : '' // asegurar nombre de campo para ordenar o dejar en blanco

    try {
        if(sortQuery)
            return await Documentalista.find().sort(sortQuery).exec()
        return await Documentalista.find()
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})