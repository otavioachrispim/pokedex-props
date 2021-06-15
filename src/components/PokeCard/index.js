import { props } from 'bluebird';
import React from 'react';
import './styles.css';

export default function PokeCard(props){
    return(
        <div className="container">
            <h1>{props.name}</h1>

            <img src={props.image} alt={props.name} />

            <p>{props.power}</p>
        </div>

    );
}