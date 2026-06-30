import Menu from "./Menu"

function Header ({paginaAtiva, aoMudarPagina}) {
    return (
        <Menu class="header" 
        paginaAtiva={paginaAtiva}
        aoMudarPagina={aoMudarPagina} 
        />
    )
}

export default Header