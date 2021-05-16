import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

function AddMovie() {

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState([]);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log(title, poster, description);
        console.log('clicked');
        //dispatch({ type: 'ADD_MOVIE', payload: {title: title, poster: poster, description: description}})
    }

    const goBack = () => {
        history.push('/');
    }

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
                <button>Save</button>
            </form>
        </div>
    );
}

export default AddMovie;