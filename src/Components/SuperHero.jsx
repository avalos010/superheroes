import React from 'react'
import {useParams} from 'react-router-dom';


function SuperHero(props) {
    return (
        <div>
            <h1>SuperHero</h1>
            {useParams()}
        </div>
    )
}

export default SuperHero;