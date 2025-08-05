// Aguarda o DOM estar completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', async () => {
    const jsonUrl = 'assets/js/tools.json';
    
    try {
        const toolsData = await fetchJson(jsonUrl);
        renderDashboard(toolsData);
        
        // Inicializa a lógica do modal após o painel ser renderizado
        initializeModalHandler();
        
        console.log('Painel de ferramentas carregado com sucesso!');
    } catch (error) {
        console.error('Falha ao inicializar o painel:', error);
    }
});