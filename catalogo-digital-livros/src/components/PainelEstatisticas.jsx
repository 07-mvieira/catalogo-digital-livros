function PainelEstatisticas () {
    const estatisticas = [
        {
            number: `test`,
            text: 'Livros cadastrados'
        },
        {
            number: `test`,
            text: 'Resultado atual'
        },
        {
            number: `test`,
            text: 'Favoritos'
        },
        {
            number: `test`,
            text: 'Categorias'
        }
    ]
    return (
        <nav class="painel-estatisticas">
            {estatisticas.map((estatistica) => (
                <div>
                    <p>{estatistica.number}</p>
                    <p>{estatistica.text}</p>
                </div>
            ))}
        </nav>
    )
}

export default PainelEstatisticas