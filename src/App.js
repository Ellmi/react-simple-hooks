import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=" + page)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setItems(result.data);
                    setMaxPage(result.total_pages);
                }
            )
    }, [page])

    if (!isLoaded) {
        return <div className="App">Loading...</div>;
    } else {
        return (
            <div className="App">
                <div className="navigator">
                    <button onClick={() => {
                        if (page > 1) setPage(page - 1)
                    }}>
                        PREV
                    </button>
                    <p>Current Page : {page}</p>
                    <button onClick={() => {
                        if (page < maxPage) setPage(page + 1)
                    }}>
                        NEXT
                    </button>
                </div>
                <div className="persons">
                    {items.map(item => (
                        <div className="person" key={item.id}>
                            <p className="name"> Name: {item.first_name} {item.last_name}</p>
                            <p className="email"> Email: {item.email}</p>
                            <img alt="avatar" src={item.avatar}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
