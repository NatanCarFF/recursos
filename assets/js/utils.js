/**
 * Fetches JSON data from a given URL.
 * @param {string} url - The URL of the JSON file.
 * @returns {Promise<any>} A promise that resolves with the parsed JSON data.
 */
async function fetchJson(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao carregar o arquivo: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Falha ao buscar JSON:', error);
        return []; // Retorna um array vazio em caso de erro para evitar quebrar a aplicação
    }
}

/**
 * Creates an HTML element with optional attributes and children.
 * @param {string} tag - The HTML tag name (e.g., 'div', 'h3').
 * @param {object} [attributes={}] - An object of key-value pairs for attributes.
 * @param {Array<HTMLElement|string>} [children=[]] - An array of child elements or strings.
 * @returns {HTMLElement} The created HTML element.
 */
function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    
    for (const key in attributes) {
        if (key === 'className') {
            element.className = attributes[key];
        } else {
            element.setAttribute(key, attributes[key]);
        }
    }

    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof HTMLElement) {
            element.appendChild(child);
        }
    });

    return element;
}