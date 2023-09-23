import './style/App.css';
import heroes from './heroes.json'
import Hero from './components/Hero';



function App() {
  return (
    <div className='heroes-container'>
      {heroes.map((hero, index) => (
        <Hero name = {hero.name}
        universe = {hero.universe}
        alterego = {hero.alterego}
        occupation = {hero.occupation}
        friends = {hero.friends}
        superpowers = {hero.superpowers}
        url = {hero.url}
        info = {hero.info}
        key ={index} />
      ))}
    </div>
  );
}

export default App;
