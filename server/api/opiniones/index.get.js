/**
* Obtener opiniones
*/
export default defineEventHandler( async (event) => {
    try {
        return await Opinion.find().limit(5).sort('fecha').exec()
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})