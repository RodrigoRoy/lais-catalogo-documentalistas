/**
 * Borrar una documentalista de la base de datos
 */
export default defineEventHandler(async (event) => {
    try {
        return await Documentalista.findByIdAndDelete(event.context.params.id)
    }
    catch (error) {
        throw createError({ statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message })
    }
})