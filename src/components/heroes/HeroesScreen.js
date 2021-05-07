import React , { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import getHeroeById from './../../selectors/getHeroesById';

const HeroesApp = ( { history } ) => {

    const { heroeId } = useParams();

    // const hero = getHeroeById( heroeId );
    // utilizamos el useMemo
    const hero = useMemo( () => getHeroeById( heroeId ) , [heroeId] );
    if( !hero ){
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        ( history.length <= 2 )
          ? history.push('/')
          : history.goBack();
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return(
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src= { `../assets/heroes/${ hero.id }.jpg` }
                    alt = { superhero }
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>

            <div className="col-8">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> first apperance: </b> { first_appearance } </li>
                </ul>

                <h5> characters </h5>
                <p> { characters } </p>

                <button
                    onClick={ handleReturn }
                    className="btn btn-outline-info"
                >
                    return
                </button>
            </div>
        </div>
    );
}

export default HeroesApp;