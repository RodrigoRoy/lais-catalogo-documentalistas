/**
* Obtener tags/palabras clave/etiquetas de los documentales, con conteo de repeticiones.
* @returns [Object] Cada etiqueta con su respectivo conteo
* Ejemplo:
 * [
 *  {
 *    "_id": "Pueblos originarios",
 *    "count": 30
 *  },
 *  {
 *    "_id": "Mujeres",
 *    "count": 19
 *  },
 *  {
 *    "_id": "Movimientos sociales",
 *    "count": 16
 *  }
 * ]
*/
export default defineEventHandler( async (event) => {
    try {
        return await Documental.aggregate([{ $unwind: "$adicional.etiquetas" }, { $sortByCount: "$adicional.etiquetas" }]).exec()
    }
    catch (error) {
        throw createError({statusCode: error.statusCode, statusMessage: error.statusMessage, message: error.message})
    }
})