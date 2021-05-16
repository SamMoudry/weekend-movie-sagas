import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Details() {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState([]);
    const movieDetails = useSelector(store => store.details);

    const map = () => {
        movieDetails.map(item => {
            setTitle(item.title);
            setPoster(item.poster);
            setDescription(item.description);
            setGenre(genre.concat(item.name));
        })
    }


    useEffect(() => {
        map();
    }, []);

    const handleSubmit = () => {
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