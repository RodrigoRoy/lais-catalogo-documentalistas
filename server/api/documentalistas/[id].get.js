/**
* Obtener documentalista por su id o url en base de datos
*/
export default defineEventHandler( async (event) => {
    // Verificar si el parámetro "id" es de MongoDB o el identificador URL de la documentalista
    const isMongoId = /^[a-f0-9]{24}$/.test(event.context.params.id)
    const isDocumentalistaURL = /^[a-z]+(\-[a-z]+)*$/.test(event.context.params.id)

    // Error en caso de que no sea Id de Mongo o URL de documentalista
    if(!isMongoId && !isDocumentalistaURL)
        throw createError({statusCode: 400, statusMessage: 'Invalid Id', message: 'Valid MongoDB Id or valid URL from Documentalista needed. Check definition of Documentalista URL in /server/api/models/documentalista.schema'})

    // Buscar por Id
    if(isMongoId){
        try {
            return await Documentalista.findById(event.context.params.id).populate('documentales')
        }
        catch (error) {
            throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
        }
    }
    
    // Buscar por URL de la documentalista
    try {
        return await Documentalista.findOne({ url: event.context.params.id }).populate('documentales')
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }

})