function Menu ({paginaAtiva, aoMudarPagina}) {
    const paginas = ['Catálogo', 'Filtros', 'Sobre']
    return (
        <nav class="menu">
            {paginas.map((pagina) => (
                <button
                    key={pagina}
                    class={paginaAtiva === pagina ? 'menu-link-ativo' : 'menu-link'}
                    onClick={() => aoMudarPagina(pagina)}
                >
                    {pagina}
                </button>
            ))}
        </nav>
    )
}

export default Menu