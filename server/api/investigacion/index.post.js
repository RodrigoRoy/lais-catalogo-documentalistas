/**
 * Guardar la información de un investigador/a en base de datos
 * @see /server/models/investigacion.schema.js
 */
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    try {
        return await new Investigacion(body).save()
    }
    catch (error) {
        throw createError({ statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})