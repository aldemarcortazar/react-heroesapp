import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';
import { useMemo } from 'react';

const HeroesList = ( { publisher } ) => {
    
    // const heroes = getHeroesByPublisher( publisher );
    //utilizamos un hook usememo

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher] );
    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {   
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        { ...hero }
                    />                
                ))
            }
        </div>
    );
}

export default HeroesList;