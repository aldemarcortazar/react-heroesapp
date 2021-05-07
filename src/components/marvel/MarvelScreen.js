import React from 'react';
import HeroesList from './../heroes/HeroesList';
const MarvelScreen = () => {

    return (
        <>
            <h2>Marvel</h2>
            <HeroesList publisher='Marvel Comics'/>
        </>
    );
}

export default MarvelScreen;