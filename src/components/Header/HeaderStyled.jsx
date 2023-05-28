import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

const Conteiner = styled.header`
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: transparent;
    @media screen and (max-width: 767px) {
        padding: ${p => p.theme.space[4]}px;
    };
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        padding-top: ${p => p.theme.space[4]}px;
        padding-bottom: ${p => p.theme.space[4]}px;
        padding-left: ${p => p.theme.space[5]}px;
        padding-right: ${p => p.theme.space[5]}px;
    };
    @media screen and (min-width: 1440px)  {
        padding-top: ${p => p.theme.space[4]}px;
        padding-bottom: ${p => p.theme.space[4]}px;
        padding-left: 100px;
        padding-right: 100px;
        width: 1440px;
    }
`;

const Logo = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: ${p => p.theme.radii.average};
    background-color: ${p => p.theme.colors.btnPrimeryColor};
    color: ${p => p.theme.colors.textAccent};
    @media screen and (max-width: 767px) {
        width: 40px;
        height: 40px;
    };
    @media screen and (min-width: 768px) {
        width: 44px;
        height: 44px;
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    background-color: transparent;

`;

const WrappMenu = styled.div`
    @media screen and (max-width: 1439px) {
        display: ${({ open }) => (open ? 'flex' : 'none')};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: ${p => p.theme.colors.bgAuxiliaryColor};
    };
    @media screen and (max-width: 767px) {
        
    }
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        
    }
    @media screen and (min-width: 1440px) {
        display: flex;
        margin-right: 235px;
    }
`;

const ItemList = styled.ul`
    @media screen and (max-width: 1439px) {
        position: absolute;
        top: 182px;
        left: 50%;
        transform: translate(-50%);
    };
    @media screen and (min-width: 1440px) {
        display: flex;
    }
`;

const Item = styled.li`
    font-weight: ${p => p.theme.fontWeights.middle};
    color: ${p => p.theme.colors.textPrimery};
    &:hover {
            color: ${p => p.theme.colors.btnPrimeryColor};
        };
    @media screen and (max-width: 1439px) {
        font-size: ${p => p.theme.fontSizes.m};
        margin-bottom: ${p => p.theme.space[5]}px;
        &:last-child {
            margin-bottom: 0;
        }
    };
    @media screen and (min-width: 1440px) {
        margin-right: ${p => p.theme.space[5]}px;
        font-size: ${p => p.theme.fontSizes.s};
        &:last-child {
            margin-right: 0;
        }
    }
`;

const LinkItem = styled.a`
    text-decoration: none;
`;

const CloseBtn = styled.button`
    @media screen and (max-width: 1439px) {
        position: absolute;
        display: block;
        border: none;
        padding: 0;
        width: 32px;
        height: 32px;
        background: none;
    };
    @media screen and (max-width: 767px) {
        top: 32px;
        right: 26px;
    };
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        top: 34px;
        right: 42px;
    };
    @media screen and (min-width: 1440px) {
        display: none;
    }
`;

const LogoMenu = styled(NavLink)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: ${p => p.theme.radii.average};
    background-color: ${p => p.theme.colors.btnPrimeryColor};
    color: ${p => p.theme.colors.textAccent};
    @media screen and (max-width: 767px) {
        top: 18px;
        left: 16px;
        width: 40px;
        height: 40px;
    };
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        top: 18px;
        left: 32px;
        width: 44px;
        height: 44px;
    };
    @media screen and (min-width: 1440px) {
        display: none;
    }
`;

const SwitchConteiner = styled.div`
        position: absolute;
        display: inline-flex;
        width: 61px;
        height: 27px;

        input {
            width: 0;
            height: 0;
            opacity: 0;
        };

        label {
            display: flex;
            align-items: center;
            justify-content: start;
            width: 100%;
            padding-left: ${p => p.theme.space[1]}px;
            padding-right: ${p => p.theme.space[1]}px;
            background-color: ${p => p.theme.colors.bgPrimeryColor};
            box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
            border-radius: ${p => p.theme.radii.extraLarge};
        };

        input:checked {
            &+label {
                background-color: ${p => p.theme.colors.btnPrimeryColor};
                justify-content: end;
            }
        }

        label::before {
            content: '';
            width: 21px;
            height: 21px;
            border-radius: 50%;
            background-color: #fff;
        }

    @media screen and (max-width: 767px) {
        left: 16px;
        bottom: 18px;
    };
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        left: 32px;
        bottom: 32px;
    };
    @media screen and (min-width: 1440px) {
        top: 27px;
        right: 100px;
    }
`;

const UserBtn = styled.button`
    display: flex;
    align-items: center;
    margin-right: ${p => p.theme.space[5]}px;
    border: none;
    padding: 0;
    background-color: transparent;
    color: ${p => p.theme.colors.textPrimery};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.average};
`;

const UserAva = styled.span`
    display: block;
    background-color: blue;
    border-radius: 50%;
    margin-right: ${p => p.theme.space[4]}px;
    @media screen and (max-width: 767px) {
        width: 34px;
        height: 34px;
    };
    @media screen and (min-width: 768px) {
        width: 44px;
        height: 44px;
    }
`;

const OpenBtn = styled.button`
    @media screen and (max-width: 1439px) {
        display: block;
        width: 28px;
        height: 28px;
        border: none;
        padding: 0;
        background: none;
    };
    @media screen and (min-width: 1440px) {
        display: none;
    }
`;
const Burger = styled(RxHamburgerMenu)`
    width: 100%;
    height: 100%;
    fill: 0;
`;

const Cross = styled(RxCross2)`
    width: 100%;
    height: 100%;
    fill: 0;
`;
 
export {
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
}