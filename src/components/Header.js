export function Header({ text = '' }) {
    // Crea un elmento HTML header y le agrega el texto
    const header = document.createElement('header');

    header.innerHTML = `
        <h1>${text}</h1>
    `;

    return header;
}