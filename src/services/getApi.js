import { API_BASE_URL } from "../constants"

// Encargado de hacer la petición HTTP GET
// Se toma la url base de una constante
// Se usa promesas
export async function getApi(name) {
    try {
        let url = API_BASE_URL + `/character/?name=${name}`;

        const response = await fetch(url);

        // Si la respuesta HTTP es diferente de 200, se lanza un error
        if (!response.ok) {
            throw new Error('Personaje no encontrado');
        }

        return await response.json();

    } catch (e) {
        throw new Error(e.message);
    }
}