/**
* Obtener todos los documentales en base de datos
*/
export default defineEventHandler( async (event) => {
    try {
        return await Documental.find()
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})