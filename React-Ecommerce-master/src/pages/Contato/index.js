import { Link } from "react-router-dom";
import { Button } from "../../styledComponents/Home/styles"
import global from "../../styles/global";
import "./StyleC.css"

function Contato() {
    return (
        
       <form>
                    <label id="Contatos" for="Contatos">Forma de contato</label>
                    
                    <label for="nomeSobrenome">Nome e Sobrenome</label>
                    <input type="text" id="nomeSobrenome" class="input-padrao" required
                        placeholder="Seu nome e Sobrenome"/>

                    <label for="email">Email</label>
                    <input type="email" id="email" class="input-padrao" required placeholder="seuemail@dominio.com"/>

                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" class="input-padrao" required placeholder="(XX) XXXXX-XXXX"/>

                    <label for="mensagem">Mensagem</label>
                    <textarea id="mensagem" class="input-padrao" cols="36" rows="10" required
                        placeholder="Coloque sua mensagem"></textarea>
                
                    <section>
                    <legend>Como prefere o nosso contato?</legend>
                    <label for="radio-email"><input name="contato" type="radio" value="email"
                            id="radio-email"/>Email</label>

                    <label for="radio-telefone"><input name="contato" type="radio" value="telefone"
                            id="radio-telefone"/>Telefone</label>

                    <label for="radio-whatsapp"><input name="contato" type="radio" value="whatsapp" id="radio-whatsapp"
                            checked/>WhatsApp</label>
                    </section>

                    <div id="horario">
                        <fieldset>
                            <legend>Qual horario prefere ser atendido?</legend>
                            <select>
                                <option>Manha</option>
                                <option>Tarde</option>
                                <option>Noite</option>
                            </select>
                        </fieldset>
                    </div>

                    <label class="checkbox"> <input type="checkbox" checked/> Gostaria de receber nossas novidades por
                        email?</label>

                    <div id="botao">
                        <input type="submit" value="Enviar formulario" class="enviar"/>
                    </div>
            </form>
    )
    
}

export default Contato;