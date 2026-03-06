/**
* Obtener documentalistas para mostrar en página inicial (index)
* @returns Object - Listas de documentalistas organizadas
* {
*   principales: [Documentalista]
*   preservadoras: [Documentalista]
*   masDocumentalistas: [Documentalista]
*   originales: [Documentalista]
*   sinPreservadoras: [Documentalista]
* }
*/
export default defineEventHandler( async (event) => {
    // Selección de campos necesarios para la página inicial
    const selectedField = 'nombre url imagen mencionResponsabilidad'
    
    try {
        // Selección de documentalistas
        const principales = await Documentalista.find({principal: true, preservadora: false}, selectedField).sort({ nombre: 1 })
        const preservadoras = await Documentalista.find({principal: true, preservadora: true}, selectedField).sort({ nombre: 1 })
        const masDocumentalistas = await Documentalista.find({principal: false}, selectedField).sort({ nombre: 1 })
        const originales = await Documentalista.find({principal: true}, selectedField).sort({ nombre: 1 })
        const sinPreservadoras = await Documentalista.find({preservadora: false}, selectedField).sort({ nombre: 1 })
        
        return {principales: principales, preservadoras: preservadoras, masDocumentalistas: masDocumentalistas, originales: originales, sinPreservadoras: sinPreservadoras }
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})