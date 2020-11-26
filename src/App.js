import './App.css';
import React, {useState} from 'react';

function App() {
    const [page, setPage] = useState(1);

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
                    if (page < 2) setPage(page + 1)
                }}>
                    NEXT
                </button>
            </div>
        </div>
    );
}

export default App;
