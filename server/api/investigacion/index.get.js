/**
* Obtener equipo de investigación
*/
export default defineEventHandler( async (event) => {
    try {
        return await Investigacion.find().sort('nombre').exec()
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})