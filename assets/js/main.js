// Aguarda o DOM estar completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', async () => {
    const jsonUrl = 'assets/js/tools.json';
    const body = document.body;
    const themeSelector = document.getElementById('theme-selector');

    // --- Lógica de Temas ---
    
    /**
     * Define o tema na página e salva a preferência no localStorage.
     * @param {string} themeName - O nome do tema.
     */
    function setTheme(themeName) {
        body.setAttribute('data-theme', themeName);
        localStorage.setItem('theme', themeName);
        themeSelector.value = themeName;
    }

    // Carrega o tema salvo no localStorage, ou usa o padrão 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Adiciona o evento para mudar o tema quando o usuário selecionar uma opção
    themeSelector.addEventListener('change', (event) => {
        setTheme(event.target.value);
    });

    // --- Lógica do Painel e Modal (código existente) ---
    
    try {
        const toolsData = await fetchJson(jsonUrl);
        renderDashboard(toolsData);
        initializeModalHandler();
        
        console.log('Painel de ferramentas carregado com sucesso!');
    } catch (error) {
        console.error('Falha ao inicializar o painel:', error);
    }
});