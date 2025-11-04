/**
* Obtener documental por su id en base de datos
*/
export default defineEventHandler( async (event) => {
    // Verificar si el parámetro "id" es de MongoDB o el identificador URL de la documentalista
    const isMongoId = /^[a-f0-9]{24}$/.test(event.context.params.id)
    const isDocumentalURL = /^[a-z0-9]+(\-[a-z0-9]+)*$/.test(event.context.params.id)

    // Error en caso de que no sea Id de Mongo o URL de documental
    if(!isMongoId && !isDocumentalURL)
        throw createError({statusCode: 400, statusMessage: 'Invalid Id', message: 'Valid MongoDB Id or valid URL from Documental needed. Check definition of Documental URL in /server/api/models/documental.schema'})


    // Buscar por Id
    if(isMongoId){
        try {
            return await Documental.findById(event.context.params.id).populate('adicional.mujeres.documentalista')
        }
        catch (error) {
            throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
        }
    }
    
    // Buscar por URL de la documental
    try {
        return await Documental.findOne({ 'adicional.url': event.context.params.id }).populate('adicional.mujeres.documentalista')
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})