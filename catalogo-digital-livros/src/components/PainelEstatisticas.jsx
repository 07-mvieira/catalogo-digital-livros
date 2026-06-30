function PainelEstatisticas () {
    const estatisticas = ['Livros cadastrados', 'Resultado atual', 'Favoritos', 'Categorias']
    return (
        <nav class="painel-estatisticas">
            {estatisticas.map((estatistica) => (

            ))}
        </nav>
    )
}

export default PainelEstatisticas