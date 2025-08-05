/**
 * Búsqueda textual de documentales y documentalistas en base de datos
 * @param {string} req.query.q Texto de búsqueda
 * @return {Object} Listas de resultados de documentales y documentalistas
 */
export default defineEventHandler( async (event) => {
    const query = getQuery(event)
    const searchQuery = query?.q ? query.q : ''

    try {
        // Listas de resultados de la búsqueda
        const documentales = await Documental.find({$text: {$search: searchQuery}}, {score: {$meta: "textScore"}}).sort({score: { $meta: "textScore" }})
        const documentalistas = await Documentalista.find({$text: {$search: searchQuery}}, {score: {$meta: "textScore"}}).sort({score: { $meta: "textScore" }})

        return { 
            documentales: documentales, 
            documentalistas: documentalistas
        }
    }
    catch (error) {
        throw createError({statusCode: 500, statusMessage: 'Error en BD', message: error})
    }
})