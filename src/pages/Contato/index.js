import { Link } from "react-router-dom";
import { Button } from "../../styledComponents/Home/styles"

function Contato() {
    return (
        <>
            <h1>Contato Page</h1>

            <Link to="/">
                <Button>Go to Login</Button>
            </Link>
            <Link to="/home">
                <Button>Go to Home</Button>
            </Link>
            <Link to="/produtos">
                <Button>Go to Produtos</Button>
            </Link>
            <Link to="/sobre">
                <Button>Go to Sobre</Button>
            </Link>
        </>
    )
}

export default Contato;