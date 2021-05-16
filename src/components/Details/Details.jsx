import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Details() {
    const history = useHistory();
    const movieDetails = useSelector(store => store.details);

    const handleSubmit = () => {
        history.push('/');
    }
    return (
        <>
        <div>Movie Details here.</div>
        <form onSubmit={handleSubmit}>
            <button>Back to List</button>
        </form>
        </>
    );
}

export default Details;