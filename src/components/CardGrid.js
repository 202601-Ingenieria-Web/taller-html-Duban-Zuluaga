import { MiniCard } from "./MiniCard";

// Componente encargado de generar el grid con las targetas de los personajes
export function CardGrid(json, section) {
    // Borra el contenido anterior, limpia el contenedor
    section.innerHTML = '';
    // Se añade una clase de CSS
    section.classList.add('cards-container');

    // Se verifica que los datos recibidos (json) no son nulos y si es un array
    if (!json || !Array.isArray(json)) {
        return '<p>Cargando...</p>'
    }

    // Usa un bucle, que toma cada elemento del array, Micicard aplica su magia
    // y obtenemos cada minicard del personaje
    json.forEach(character => {
        section.appendChild(MiniCard(character));
    });

    return section;
}