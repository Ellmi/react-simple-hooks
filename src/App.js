import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=1")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setItems(result.data);
                    setMaxPage(result.total_pages);
                }
            )
    }, [])
    if (!isLoaded) {
        return <div className="App">Loading...</div>;
    } else {
        return (
            <div className="App">
                <div>
                    <button onClick={() => {
                        if (page > 1) setPage(page - 1)
                    }}>
                        PREV
                    </button>
                    <p>Current Page: {page}</p>
                    <button onClick={() => {
                        if (page < maxPage) setPage(page + 1)
                    }}>
                        NEXT
                    </button>
                </div>
                <div>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.first_name} {item.last_name}
                                {item.email}
                                <img alt="avatar" src={item.avatar}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
