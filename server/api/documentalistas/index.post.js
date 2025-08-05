/**
 * Guardar la información de una documentalista en base de datos
 * @see /server/models/documentalista.schema.js
 */
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    try {
        return await new Documentalista(body).save()
    }
    catch (error) {
        throw createError({ statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})