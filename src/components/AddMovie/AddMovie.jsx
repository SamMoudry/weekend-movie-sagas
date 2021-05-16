import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';

function AddMovie() {

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState(1);
    const displayedGenres = useSelector(store => store.genres);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        event.preventDefault();
        console.log(title, poster, description, genre);
        console.log('clicked');
        dispatch({ type: 'ADD_MOVIE', payload: {title: title, poster: poster, description: description, genre_id: genre}})
    }

    const goBack = () => {
        history.push('/');
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    return (
        <div>
            <form onSubmit={goBack}>
                <button>Cancel</button>
            </form>
            <form onSubmit={handleClick}>
                <input placeholder="Title" 
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)} /> 
                <input placeholder="Poster" 
                    value={poster} 
                    onChange={(event) => setPoster(event.target.value)} />
                <input placeholder="Description" 
                    value={description} 
                    onChange={(event) => setDescription(event.target.value)} />
                <select name="genres" id="genres" onChange={(event) => setGenre(event.target.value)}>
                    {displayedGenres.map(item => {
                        return <option key={item.id} 
                                    value={item.id} 
                                    >
                                {item.name}
                                </option>
                    })}
                </select>
                <button>Save</button>
            </form>
        </div>
    );
}

export default AddMovie;