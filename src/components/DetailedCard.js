// Se usan iconos como svg, se separan en funciones externas
// para manterner un codigo mas limpio
import { DnaIcon } from "../icons/DnaIcon";
import { CloseIcon } from "../icons/CloseIcon";
import { LifeIcon } from "../icons/LifeIcon";
import { GenderIcon } from "../icons/GenderIcon";
import { MapIcon } from "../icons/MapIcon";
import { PlanetIcon } from "../icons/PlanetIcon";
import { ClapperIcon } from "../icons/ClapperIcon";

// Componente encargado del modal. Amplía la información de los personajes
export function DetailedCard(obj) {
    // Desestructura los datos en variables individuales
    const { name, status, species, gender, origin, episode, image, location } = obj;

    // Crea un elemento HTML, se le asigna su id y sus clases CSS.
    const modal = document.createElement('dialog');
    modal.id = 'modal-detailed-card';
    modal.className = 'modal';

    modal.innerHTML = `
        <div class="modal-container">
            ${CloseIcon()}
            <div class="modal-info">
                <img src="${image}" alt="${name}">
                <div class="modal-text">
                    <h2>${name}</h2>
                    <ul>
                        <li>
                            ${DnaIcon()}
                            ${species}
                        </li>
                        <li>
                            ${LifeIcon()}
                            ${status}
                        </li>
                        <li>
                            ${GenderIcon()}
                            ${gender}
                        </li>
                        <li>
                            ${PlanetIcon()}
                            Originally from ${origin.name}
                        </li>
                        <li>
                            ${MapIcon()}
                            Last seen in ${location.name}
                        </li>
                        <li>
                            ${ClapperIcon()}
                            <span>
                                Appears in ${episode.length} ${episode.length > 1 ? 'episodes' : 'episode'}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `

    // Se agrega el html al body
    document.body.appendChild(modal);

    // Muestra el modal.
    modal.showModal();

    const closeBtn = document.querySelector('#closeModal');

    // Evento que escucha el click del boton cerrar, para efectivamente cerrar el modal y removerlo del documento.
    closeBtn.addEventListener('click', () => {
        modal.close();
        modal.remove();
    })

    // Esta función se ejecuta cuando desde el componente MiniCard, se da click en un botón.
}