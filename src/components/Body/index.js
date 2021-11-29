import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Produtos from "../../pages/Produtos";
import Produto from "../../pages/Produto";
import Sobre from "../../pages/Sobre";
import Contato from "../../pages/Contato";
import Login from "../../pages/Login";
import Cadastro from "../../pages/Cadastro";
import Header from "../Header";


function Body () {

    return (
        <>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/produto" exact component={Produto} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/contato" component={Contato} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
            </Switch>
        </BrowserRouter>
        
        </>
    );
}
export default Body;