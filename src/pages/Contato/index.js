import { Link } from "react-router-dom";
import { Button } from "../../styledComponents/Home/styles"

function Contato() {
    return (
        <>
            <h1>Contato Page</h1>

            <Link to="/">
                <Button>Nome Completo</Button>
            </Link>
            <Link to="/home">
                <Button>Email</Button>
            </Link>
            <Link to="/produtos">
                <Button>Telefone</Button>
            </Link>
            <Link to="/sobre">
                <Button>Mensagem</Button>
            </Link>
        </>
    )
}

export default Contato;