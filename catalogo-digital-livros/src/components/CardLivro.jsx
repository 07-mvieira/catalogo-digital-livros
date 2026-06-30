import Botao from "./Botao"

function CardLivro ({id, abrev, livro, categoria, autor, descricao, favorito, aoAlternarFavorito}) {
    return (
        <div>
            <div>
                <strong>{abrev}</strong>
            </div>
            <span class="etiqueta">{categoria}</span>
            <Botao texto="Favoritar"></Botao>
            <p>{livro}</p>
            <p>{autor}</p>
            <p>{descricao}</p>

        </div>
    )
}

export default CardLivro