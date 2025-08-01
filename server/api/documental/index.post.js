/**
 * Guardar la información de un documental en base de datos
 * @see /server/models/documental.schema.js
 */
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    try {
        return await new Documental(body).save()
    }
    catch (error) {
        throw createError({ statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})