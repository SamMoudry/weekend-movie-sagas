import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    const handleClick = (id) => {
        event.preventDefault();
        dispatch({type: 'FETCH_MOVIE_DETAILS', payload: id});
        history.push('/details');
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                                <img src={movie.poster} alt={movie.title} 
                                onClick={function() {
                                    handleClick(movie.id)}} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;