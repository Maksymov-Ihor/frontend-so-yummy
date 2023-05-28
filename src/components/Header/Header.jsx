import { useState } from "react";

import {
    Conteiner,
    Logo,
    Nav,
    WrappMenu,
    ItemList,
    Item,
    LinkItem,
    CloseBtn,
    LogoMenu,
    SwitchConteiner,
    UserBtn,
    UserAva,
    OpenBtn,
    Burger,
    Cross
} from "./HeaderStyled";

const Header = () => {

    const [menuActive, setMenuActive] = useState(false);

    console.log(menuActive)

    return (
        <Conteiner>
            <Logo>Logo</Logo>
            <Nav>
                <WrappMenu open={menuActive}>
                    <LogoMenu>Logo</LogoMenu>
                    <ItemList>
                        <Item><LinkItem>Categories</LinkItem></Item>
                        <Item><LinkItem>Add recipes</LinkItem></Item>
                        <Item><LinkItem>My recipes</LinkItem></Item>
                        <Item><LinkItem>Favorites</LinkItem></Item>
                        <Item><LinkItem>Shopping list</LinkItem></Item>
                        <Item><LinkItem>Search</LinkItem></Item>
                    </ItemList>
                    <SwitchConteiner>
                        <input type='checkbox' id='ch1' />
                        <label for={'ch1'} />
                    </SwitchConteiner>
                    <CloseBtn type='button' onClick={() => setMenuActive(menuActive => !menuActive)}><Cross /></CloseBtn>
                </WrappMenu>
                <UserBtn>
                    <UserAva></UserAva>
                    user name
                </UserBtn>
                <OpenBtn type='button' onClick={() => setMenuActive(menuActive => !menuActive)}><Burger /></OpenBtn>
            </Nav>
        </Conteiner>
    )
}

export default Header;