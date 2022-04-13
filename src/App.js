import { useEffect } from 'react';

import './App.css';

// eslint-disable-next-line
import SearchIcon from './search.svg';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e3e0085";

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className='app'>
            <h1>Movie World</h1>
        </div>
    );
}

export default App;