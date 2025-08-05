/**
* Obtener todas las documentalistas en base de datos
*/
export default defineEventHandler( async (event) => {
    try {
        return await Documentalista.find()
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})