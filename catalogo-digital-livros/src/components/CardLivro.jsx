import Botao from "./Botao"

function CardLivro ({key, abrev, livro, categoria, favorito, aoAlternarFavorito}) {
    return (
        <div>
            <div>
                <strong>{abrev}</strong>
            </div>
            <span class="etiqueta">{categoria}</span>
            <Botao texto="Favoritar" />

        </div>
    )
}

export default CardLivro