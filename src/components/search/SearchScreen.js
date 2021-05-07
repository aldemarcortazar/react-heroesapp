import React , { useMemo } from 'react';
import queryString from 'query-string';
import useForm from '../../hooks/useForm.js';
import HeroCard from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName.js';

const SearchScreen = ({ history }) => {

    const location = useLocation(); // extraigo el objecto location con un hook de react router dom

    const { q = '' } = queryString.parse( location.search );

    const [ values , handleInputChange ] = useForm({
        searchText: q
    });

    const { searchText } = values;
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [ q ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h3>SearchScreen</h3>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h3>Search form</h3>

                    <form
                        onSubmit ={ (e) => handleSubmit(e) }
                    >
                        <input 
                            type="text"
                            placeholder="find you hero"
                            className="form-control"
                            name="searchText"
                            value={ searchText }
                            autoComplete="off"
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4> results </h4>
                    <hr />

                    {
                        ( q === '')
                            ? 
                            <div className='alert alert-info'>
                                search a hero ...
                            </div>
                            : ( q !== ''  && heroesFiltered.length === 0 )
                              &&
                              <div className="alert alert-danger">
                                  there is no a hero with { q }
                              </div>
                    }

                    {
                        ( heroesFiltered !== '')
                            && heroesFiltered?.map( hero =>(
                                <HeroCard 
                                    key ={ hero.id }
                                    { ...hero }
                                />
                            ))
                    }
                </div>
            </div>
        </div>
    );
}



export default SearchScreen;