import { Link } from "react-router-dom";

function Sobre() {
    return (
        <>
            <h1>Sobre Page</h1>

            <Link to="/">
                <button>Go to Login</button>
            </Link>
            <Link to="/home">
                <button>Go to Home</button>
            </Link>
            <Link to="/produtos">
                <button>Go to Produtos</button>
            </Link>
            <Link to="/contato">
                <button>Go to Contato</button>
            </Link>
        </>
    )
}

export default Sobre;