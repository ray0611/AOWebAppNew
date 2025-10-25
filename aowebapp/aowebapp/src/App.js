import { Link } from "react-router-dom";
import CardList from './components/CardListSearch';

function App() {
return (
    <div className="App container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">AOWebApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to="/Home">Home</Link>
                        <Link className="nav-link" to="/Contact">Contact</Link>
                        <Link className="nav-link" to="/Products">Products</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
);
}

export default App;