const modalOverlay = document.getElementById('edit-modal');
const modalCloseButton = modalOverlay.querySelector('.modal-close');
const editForm = modalOverlay.querySelector('#edit-form');
const appNameInput = document.getElementById('app-name');
const appLinkInput = document.getElementById('app-link');

let currentToolId = null;

function showModal(tool) {
    // Preenche os campos do formulário com os dados da ferramenta
    appNameInput.value = tool.name;
    appLinkInput.value = tool.link;
    currentToolId = tool.id;

    // Adiciona a classe 'active' para exibir o modal
    modalOverlay.classList.add('active');
}

function hideModal() {
    // Remove a classe 'active' para esconder o modal
    modalOverlay.classList.remove('active');
}

function handleFormSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    const newLink = appLinkInput.value;
    
    // TODO: Implementar a lógica para salvar o novo link.
    // Por enquanto, vamos apenas logar a informação no console.
    console.log(`Salvando novo link para a ferramenta ${currentToolId}: ${newLink}`);
    
    // Você pode atualizar o link na própria página se desejar
    const toolLinkElement = document.querySelector(`a[data-app="${currentToolId}"]`);
    if (toolLinkElement) {
        toolLinkElement.href = newLink;
    }
    
    hideModal();
}

function initializeModalHandler() {
    // Adiciona evento de clique para o botão de fechar do modal
    modalCloseButton.addEventListener('click', hideModal);

    // Adiciona evento de clique no overlay para fechar o modal
    modalOverlay.addEventListener('click', (event) => {
        // Se o clique foi no overlay, mas não no conteúdo do modal, feche-o
        if (event.target === modalOverlay) {
            hideModal();
        }
    });

    // Adiciona evento de 'submit' no formulário
    editForm.addEventListener('submit', handleFormSubmit);

    // Adiciona evento de clique em todos os links 'Editar Link'
    document.addEventListener('click', async (event) => {
        if (event.target.tagName === 'A' && event.target.textContent === 'Editar Link') {
            event.preventDefault();
            const toolId = event.target.dataset.app;
            
            // Carrega os dados para encontrar a ferramenta correta
            const toolsData = await fetchJson('assets/js/tools.json');
            const toolToEdit = toolsData.find(tool => tool.id === toolId);
            
            if (toolToEdit) {
                showModal(toolToEdit);
            }
        }
    });
}