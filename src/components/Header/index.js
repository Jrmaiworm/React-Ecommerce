import { Link } from "react-router-dom";
import { MenuButton } from "../../styledComponents/BotaoMenu/styles";
import { Menu } from "../../styledComponents/Menu/styles";
import {Nav,DropdownItem,NavItem,NavLink,Dropdown,DropdownToggle,DropdownMenu}  from "reactstrap";

function Header () {
    
    return (
        <>

<div>
  <Nav tabs>
    <NavItem>
      <NavLink
        active
        href="/"
      >
        Menu Principal
      </NavLink>
    </NavItem>
    <Dropdown
      nav
      toggle={function noRefCheck(){

      }}
    >
      <DropdownToggle
        caret
        nav
      >
        Categorias
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>
          Sobre
        </DropdownItem>
        <DropdownItem disabled>
          Contato
        </DropdownItem>
        <DropdownItem>
          Another Action
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          Another Action
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <NavItem>
      <NavLink href="/sobre">
       Sobre
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/contato">
       Contato
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        disabled
        href="#"
      >
        
      </NavLink>
    </NavItem>
  </Nav>
</div>
       
        </>
    );
}

export default Header;