/**
* Obtener los tags/palabras clave de los documentales
*/
export default defineEventHandler( async (event) => {
    try {
        return await Documental.distinct('adicional.etiquetas').exec()
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})