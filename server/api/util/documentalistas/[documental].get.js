/**
* Obtener documentalistas que participan en un documental específico
* @param {string} event.context.params.documental Id del documental
* @return {[Documentalista]} Listas de documentalistas (con datos básicos: nombre, url, mención de responsabilidad, colectivos, imagen)
*/
export default defineEventHandler( async (event) => {
    try {
        return await Documentalista.find({documentales: event.context.params.documental}).select({nombre: 1, url: 1, mencionResponsabilidad: 1, colectivos: 1, imagen: 1}).sort({nombre: 1}).exec()
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})