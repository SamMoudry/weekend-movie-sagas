import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Details() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState([]);
    const movieDetails = useSelector(store => store.details);

    const organize = (movieDetails) => {
        console.log('in organize');
        movieDetails.map(item => {
            console.log('in map');
            setTitle(item.title);
            setPoster(item.poster);
            setDescription(item.description);
            setGenre(genre.concat(item.name));
        })
    }

    useEffect(() => {
        console.log(movieDetails);
        organize(movieDetails);
        console.log(title);
    }, [movieDetails]);

    const handleSubmit = () => {
        dispatch({type: 'SET_DETAILS', payload: []})
        history.push('/');
    }

    return (
        <>
        <div>
        { movieDetails ? 
                (
                    <div>
                        <div>{title}</div>
                        <img src={poster} alt={title} />
                        <div>{description}</div>
                    </div>
                ) : ''
            }
        </div>
        <form onSubmit={handleSubmit}>
            <button>Back to List</button>
        </form>
        </>
    );
}

export default Details;