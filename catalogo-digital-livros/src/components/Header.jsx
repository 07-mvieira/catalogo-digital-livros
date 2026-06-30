import Menu from "./Menu"

function Header ({paginaAtiva, aoMudarPagina}) {
    return (
        <Menu paginaAtiva={paginaAtiva} aoMudarPagina={aoMudarPagina} />
    )
}

export default Header