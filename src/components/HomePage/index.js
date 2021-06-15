import React from 'react';
import './styles.css';
import PokeCard from '../PokeCard';

export default function HomePage(){
    return(
        <div className="content">
            <header>
                Pokedex - Treinamento props
            </header>
            <main>
                <PokeCard name="Bulbasaur" power="Grass" image="assets/bulbasaur.png" color="#9AE6B4"/>
                <PokeCard name="Ivysaur" power="Grass" image="assets/ivysaur.png"/>
                <PokeCard name="Venusaur" power="Grass" image="assets/venusaur.png"/>
                <PokeCard name="Charmander" power="Fire" image="assets/charmander.png"/>
                <PokeCard name="Charmeleon" power="Fire" image="assets/charmeleon.png"/>
                <PokeCard name="Charizard" power="Fire" image="assets/charizard.png"/>
                <PokeCard name="Squirtle" power="Water" image="assets/squirtle.png"/>
                <PokeCard name="Wartotle" power="Water" image="assets/wartotle.png"/>
                <PokeCard name="Blastoise" power="Water" image="assets/blastoise.png"/>
            </main>
        </div>
    );
}