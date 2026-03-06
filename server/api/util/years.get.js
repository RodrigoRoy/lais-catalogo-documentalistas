/**
* Obtener los años de los documentales
*/
export default defineEventHandler( async (event) => {
    try {
        const yearList = await Documental.distinct('identificacion.fecha').exec()
        const filteredYearList = yearList.filter(year => year !== '')
        return filteredYearList
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})