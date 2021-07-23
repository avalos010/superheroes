import React,{useEffect} from 'react'
import {getAllSuperheroes} from '../Api/Api'
import {Switch,Link,Route,useParams} from 'react-router-dom';


function SuperHero(props) {

    useEffect(() => {
        // getAllSuperheroes()
    }, [])
    return (
        <div>
            <h1>SuperHero</h1>
            {useParams()}
        </div>
    )
}

export default SuperHero;