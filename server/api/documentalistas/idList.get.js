/**
* Obtener documentalistas con sus respectivos Id
*/
export default defineEventHandler( async (event) => {
    try {
        return await Documentalista.find().select({nombre: 1, _id: 1}).sort({nombre: 1}).exec()
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})