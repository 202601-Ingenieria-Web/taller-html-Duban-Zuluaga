import './style.css'
import { Search } from './components/Search.js';
import { CardGrid } from './components/CardGrid.js';
import { getApi } from './services/getApi.js';
import { Header } from './components/Header.js'

// El elemento principal del HTML, donde renderizaremos el HTML generado con JS.
// Para los iconos, se crean funciones que retornan el svg.
// Para los llamados a la api, se crea un funcion servicio, que se encarga de solo hacer los llamados HTTP.
const app = document.querySelector('#app');

const cardGrid = document.createElement('section');
cardGrid.classList.add('grid-container');

// Esta función se encarga de obtener el personaje que el usuario
// quiere buscar, realiza la peticion HTTP usando el getApi.js
// y obtiene el json con los datos.
// Estos datos los pasamos al componente CarGrid, que a su vez,
// usa MiniCard para crear las tarjetas y organizarlas en una grilla.
// Si se presenta algun error, se crea un parrafo informandolo.
const onSearch = async (name) => {
  try {
    let data = await getApi(name);
    app.append(CardGrid(data.results, cardGrid));

  } catch (e) {
    cardGrid.innerHTML = `<p class="p_error">${e.message}</p>`;
  }

}

// Agregamos al elemento app, todos nuestros elementos.
// El header, es el encargado del titulo
// Search es el encargado de obtener los datos del usuario
// CardGrid se encarga de renderizar las tarjetas de los personajes
app.append(Header({text: "Search for your favorite Rick and Morty character"}));
app.append(Search(onSearch));
app.append(cardGrid);