import React,{useEffect,useState} from 'react'
import { getSuperHeroDetails } from '../Api/Api'
import {Switch,Link,Route,useParams} from 'react-router-dom';


function SuperHero(props) {
    const [param] = useState(useParams())
    const [details,setDetails] = useState()

    useEffect(() => {
        if(param) {
            getSuperHeroDetails(param.id).then(data => setDetails(data))
        }
    }, [param])
    if(details) {
    return (
        <div className="hero-item">
            <Link className="link" to="/">&#8592; Back</Link>
            <h1>Name: {details.name}</h1>
            <img src={details.images.lg} alt={details.name} width={150}/>
            <div className="flex">
                <div>
            <h3>Power Stats:</h3>
            <ul className="detail-list">
                <li>combat: {details.powerstats.combat}</li>
                <li>durability: {details.powerstats.durability}</li>
                <li>intelligence: {details.powerstats.intelligence}</li>
                <li>power: {details.powerstats.power}</li>
                <li>speed: {details.powerstats.speed}</li>
                <li>strength: {details.powerstats.strength}</li>
            </ul>
            </div>
            </div>
        </div>
    )
    }
    else {
        return <h2>Fetching Data...</h2>
    }
}

export default SuperHero;