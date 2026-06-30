import Header from "./components/Header";
import Hero from "./components/Hero";
import CampoBusca from "./components/CampoBusca";
import livrosBase from "./data/livros.json"

function App() {
  return (
    <>
      <Header/>
      <Hero />
      <CampoBusca></CampoBusca>
    </>
  )
}

export default App
