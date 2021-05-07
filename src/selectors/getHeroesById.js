import { heroes } from './../data/heroes.js';

const getHeroById = ( id ) => {

    return heroes.find( hero => hero.id === id);
}

export default getHeroById;