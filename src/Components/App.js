import React,{useEffect,useState} from 'react'
import {getAllSuperheroes} from '../Api/Api'
import {Switch,Link,Route} from 'react-router-dom';
import SuperHero from './SuperHero';

import '../App.css';

function App() {

  const [superHeroes, setSuperHeroes] = useState([])
  
  useEffect(() => {
    getAllSuperheroes().then(data => setSuperHeroes(data))
}, [])

  return (
    <div className="heroes flex mx-auto flex-wrap">
        
        <Switch>
          <Route path="/" component={App} />
          <Route path="/:id" children={<SuperHero />} />
        </Switch>
        {superHeroes && superHeroes.map(hero => {
          return (
            <div className='hero-item flex flex-column' key={hero.id}>
                <h3>{hero.name}</h3>
                <img src={hero.images.lg} alt={hero.name} width={150}/>
                <button className="hero-item-btn">
                  <Link path={`/${hero.id}`}>More Details</Link>
                  </button>
            </div>
          )
        })}
    </div>
  );
}

export default App;
