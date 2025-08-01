/**
* Obtener documental por su id en base de datos
*/
export default defineEventHandler( async (event) => {
    try {
        return await Documental.findById(event.context.params?.id)
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})