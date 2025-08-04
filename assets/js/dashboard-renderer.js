/**
 * Creates a single topic card for the dashboard.
 * @param {object} tool - The tool object from the JSON data.
 * @returns {HTMLElement} The created topic card element.
 */
function createTopicCard(tool) {
    const imgElement = createElement('img', { src: tool.image, alt: tool.name });
    const h3Element = createElement('h3', {}, [tool.name]);
    const linkElement = createElement('a', { href: tool.link, 'data-app': tool.id }, ['Editar Link']);
    const pElement = createElement('p', {}, [linkElement]);
    
    return createElement('section', { className: 'topic', id: `topic-${tool.id}` }, [
        imgElement,
        h3Element,
        pElement
    ]);
}

/**
 * Renders all the topic cards on the dashboard.
 * @param {Array<object>} tools - An array of tool objects.
 */
function renderDashboard(tools) {
    const dashboardContainer = document.querySelector('.dashboard');
    if (!dashboardContainer) {
        console.error('Container do painel não encontrado.');
        return;
    }
    
    // Limpa o conteúdo existente para evitar duplicação em caso de re-renderização
    dashboardContainer.innerHTML = '';
    
    tools.forEach(tool => {
        const card = createTopicCard(tool);
        dashboardContainer.appendChild(card);
    });
}