import "./App.scss";
import Hero from "../Components/Hero/Hero";
import superheroes from "../data/superheroes.json"


function App() {
  return (
    <div className="heroes-container">
      {superheroes.map((item, index) => (
        <Hero {...item} key={index} />
      ))}
    </div>
  )
}

export default App
