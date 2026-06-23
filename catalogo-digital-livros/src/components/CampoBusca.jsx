function CampoBusca({valor, aoAlterar}) {
    return (
        <label class="campo-busca">
            <span>Buscar por título, autor, categoria ou tag</span>
            <input
            type="search"
            value={valor}
            onChange={(e) =>
                aoAlterar(e.target.value)
            }
            placeholder="Exemplo: ciência, matemática e tecnologia"
            />
        </label>
    )
}

export default CampoBusca