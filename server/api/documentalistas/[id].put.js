/**
 * Actualizar información de documentalista en base de datos
 * @see /server/models/documentalista.schema.js
 * @param Object Datos de la documentalista
 */
export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    // Verificar que el contenido no sea vacio
    if (!body)
        throw createError({ statusCode: 400, statusMessage: 'Empty body', message: 'Can\'t update without data in body request. Check definition of Documental in /server/api/models/documental.schema'})

    // Actualizar información en base de datos
    try {
        return await Documentalista.findByIdAndUpdate(
            // busqueda por id
            event.context.params.id, 
            // reemplazar con el nuevo objeto (body)
            body, 
            // options
            { new: true} // devuelve documento DESPUÉS de la actualización
        )
    }
    catch (error) {
        throw createError({ statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.statusMessage })
    }
})