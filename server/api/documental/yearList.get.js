/**
* Obtener los años de los documentales
*/
export default defineEventHandler( async (event) => {
    try {
        return await Documental.distinct('identificacion.fecha').exec()
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})