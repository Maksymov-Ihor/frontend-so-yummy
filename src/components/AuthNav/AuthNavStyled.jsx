import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Wellcom1x from '../../images/bg-mobile/Wellcom1x.jpg';
import WellcomT1x from '../../images/bg-table/WellcomT1x.jpg';
import WellcomD1x from '../../images/bd-desk/WellcomD1x.jpg';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    flex-direction: column;
    align-items: center;
    padding-top: ${p => p.theme.space[8]}px;
    & {
        @media screen and (max-width: 767px) {
            background-image: url(${Wellcom1x});
        };

        @media screen and (min-width: 768px) and (max-width: 1439px) {
            background-image: url(${WellcomT1x});
        };

        @media screen and (min-width: 1440px) {
            background-image: url(${WellcomD1x});
        };
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & {
        @media screen and (max-width: 767px) {
            width: 305px;
        }

        @media screen and (min-width: 768px) and (max-width: 1439px) {
            width: 505px;
        };

        @media screen and (min-width: 1440px) {
            width: 540px;
        };
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
    & {
        @media screen and (max-width: 767px) {
            width: 54px;
            height: 54px;
            margin-bottom: ${p => p.theme.space[5]}px;
        }

        @media screen and (min-width: 768px) {
            width: 68px;
            height: 68px;
            margin-bottom: ${p => p.theme.space[6]}px;
        };
    }
`;

const Title = styled.h2`
    font-weight: ${p => p.theme.fontWeights.average};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.textAccent};
    margin-bottom: ${p => p.theme.space[4]}px;
`;

const Text = styled.p`
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.textAccent};
    text-align: center;
    margin-bottom: ${p => p.theme.space[5]}px;
    & {
        @media screen and (max-width: 767px) {
            font-size: ${p => p.theme.fontSizes.s};
        }

        @media screen and (min-width: 768px) {
            font-size: 18px;
        };
    }
`;

const LinkWrapp = styled.div`
    display: flex;
`;

const RegisterLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 132px;
    height: 45px;
    text-decoration: none;
    background-color: ${p => p.theme.colors.btnPrimeryColor};
    color: ${p => p.theme.colors.textAccent};
    border-radius: 24px 44px;
    margin-right: ${p => p.theme.space[4]}px;
    &:active {
        background-color: transparent;
        border: 2px solid #fafafa;
    }

    & {
        @media screen and (max-width: 767px) {
            font-size: ${p => p.theme.fontSizes.s};
            width: 132px;
            height: 45px;
        }

        @media screen and (min-width: 768px) {
            font-size: 16px;
            width: 184px;
            height: 67px;
        };
    }
`;

const SignupLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95px;
    height: 45px;
    text-decoration: none;
    background-color: ${p => p.theme.colors.btnPrimeryColor};
    color: ${p => p.theme.colors.textAccent};
    border-radius: 24px 44px;
    &:active {
        background-color: transparent;
        border: 2px solid #fafafa;
    }

    & {
        @media screen and (max-width: 767px) {
            font-size: ${p => p.theme.fontSizes.s};
            width: 95px;
            height: 45px;
        }

        @media screen and (min-width: 768px) {
            font-size: 16px;
            width: 141px;
            height: 67px;
        };
    }
`;

export { Wrapper, Container, Logo, Title, Text, LinkWrapp, RegisterLink, SignupLink };