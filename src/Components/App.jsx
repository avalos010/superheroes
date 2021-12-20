import React,{useEffect,useState} from 'react'
import {getAllSuperheroes} from '../Api/Api'
import {Link}from 'react-router-dom';
import '../App.css';

function App() {

  const [superHeroes, setSuperHeroes] = useState([])
  
  useEffect(() => {
    document.title = 'Superheroes'
    getAllSuperheroes().then(data => setSuperHeroes(data))
}, [])

  return (
    <div className="heroes flex mx-auto flex-wrap">
        {superHeroes && superHeroes.map(hero => {
          return (
            <div className='hero-item flex flex-column' key={hero.id}>
                <h3>{hero.name}</h3>
                <img src={hero.images.lg} alt={hero.name} width={150}/>
                  <Link className="hero-item-btn" to={`/${hero.id}`}>More Details</Link>
            </div>
          )
        })}
    </div>
  );
}

export default App;
