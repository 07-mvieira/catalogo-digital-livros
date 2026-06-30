import Header from "./components/Header";
import Hero from "./components/Hero";
import CampoBusca from "./components/CampoBusca";
import livrosBase from "./data/livros.json";
import PainelEstatisticas from "./components/PainelEstatisticas";
import ListaLivros from "./components/ListaLivros";

function App() {
  return (
    <>
      <Header/>
      <Hero />
      <CampoBusca></CampoBusca>
      <PainelEstatisticas />
      <ListaLivros>
        
      </ListaLivros>
    </>
  )
}

export default App
