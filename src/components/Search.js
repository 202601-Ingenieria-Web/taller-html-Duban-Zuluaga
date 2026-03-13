// Obtiene el personaje que desea buscar el usuario
//  y ejecuta la función que viene onSearch que viene de su padre
export function Search(onSearch) {

    const container = document.createElement('div');

    container.innerHTML = `
        <form id="formSearch" class="formSearch">
            <input type="text" name="search" id="search" placeholder="rick sanches" required/>
            <button class="btn">Search</button>
        </form>
    `

    const form = container.querySelector('#formSearch');

    form.addEventListener('submit', (e) => {
        // Evitamos que se recarge la pagina
        e.preventDefault();
     
        onSearch(e.target.search.value);

        // Limpiamos el input
        e.target.search.value = '';
    })

    return container;
}