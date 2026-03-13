import { DetailedCard } from "./DetailedCard";
import { DnaIcon } from "../icons/DnaIcon";
import { LifeIcon } from "../icons/LifeIcon";

// Renderiza la información de cada personaje en una tarjeta
export function MiniCard(obj) {

    // Desestructuro los datos del JSON en variables
    const { image, name, species, status } = obj;
    const container = document.createElement('article');

    container.innerHTML = `
        <div class="mini-card">
            <img src=${image} />
            <div class="content">
                <h3>${name}</h3>
                <ul>
                    <li>
                        ${DnaIcon()}
                        <span>${species}</span>
                    </li>
                    <li>
                        ${LifeIcon()}
                        <span>${status}</span>
                    </li>
                </ul>
            </div>
            <button id="miniCardBtn" class="btn">View details</button>
        </div>
    `

    // Selecciono el boton por su id, para generar el envento de click,
    // y desplegar el componente de DetailedCard
    const btn = container.querySelector('#miniCardBtn');

    // Evento que llama y activa el modal
    btn.addEventListener('click', () => {
        DetailedCard(obj);
    })

    return container;
}