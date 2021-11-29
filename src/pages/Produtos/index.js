import { Link } from "react-router-dom";

function Produtos() {
    return (
        <>
            <h1>Produtos Page</h1>

            <Link to="/">
                <button>Go to Login</button>
            </Link>
            <Link to="/home">
                <button>Go to Home</button>
            </Link>
            <Link to="/contato">
                <button>Go to Contato</button>
            </Link>
            <Link to="/sobre">
                <button>Go to Sobre</button>
            </Link>
        </>
    )
}

export default Produtos;