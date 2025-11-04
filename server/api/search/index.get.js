/**
 * Búsqueda textual de documentales y documentalistas en base de datos
 * @param {string} req.query.q Texto de búsqueda
 * @return {Object} Listas de resultados de documentales y documentalistas
 */
export default defineEventHandler( async (event) => {
    const query = getQuery(event)
    const searchQuery = query?.q ? query.q : ''

    try {
        // Listas de resultados de la búsqueda (se envian los datos mínimos necesarios para mostrar resultados)
        const documentales = await Documental.find({$text: {$search: searchQuery}}, {score: {$meta: "textScore"}}).sort({score: { $meta: "textScore" }}).select({ 'identificacion.titulo': 1, 'identificacion.fecha': 1, 'identificacion.duracion': 1, 'adicional.imagen': 1, 'adicional.url': 1 })

        const documentalistas = await Documentalista.find({$text: {$search: searchQuery}}, {score: {$meta: "textScore"}}).sort({score: { $meta: "textScore" }}).select({ nombre: 1, mencionResponabilidad: 1, url: 1, imagen: 1 })

        return { 
            documentales: documentales, 
            documentalistas: documentalistas
        }
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})