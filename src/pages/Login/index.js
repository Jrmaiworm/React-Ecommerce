import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <h1 style={{ color: "red" }}>Login Page</h1>

            <Link to="/home">
                <button>Go to Home</button>
            </Link>
            <Link to="/produtos">
                <button>Go to Produtos</button>
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

export default Login;