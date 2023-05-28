import styled from "styled-components";
import { Form, Field } from "formik";
import { BiShow } from 'react-icons/bi';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

const Container = styled.div`
    position: absolute;
    top: 305px;
    border-radius: ${p => p.theme.radii.large};
    background-color: ${p => p.theme.colors.bgAccentColor};
    & {
        @media screen and (max-width: 767px) {
            width: 320px;
            top: 305px;
            left: 50%;
            transform: translate(-50%);
            padding: ${p => p.theme.space[5]}px;
        };

        @media screen and (min-width: 768px) and (max-width: 1439px) {
            width: 500px;
            top: 443px;
            left: 50%;
            transform: translate(-50%);
            padding: ${p => p.theme.space[6]}px;
        };

        @media screen and (min-width: 1440px) {
            width: 500px;
            top: 122px;
            right: 180px;
            padding: ${p => p.theme.space[6]}px;
        };
    }
`;

const Title = styled.h2`
    color: ${p => p.theme.colors.textAccent};
    font-weight: ${p => p.theme.fontWeights.average};
    & {
        @media screen and (max-width: 767px) {
            font-size: ${p => p.theme.fontSizes.m};
            margin-bottom: ${p => p.theme.space[4]}px;
        };

        @media screen and (min-width: 768px) {
            font-size: 28px;
            margin-bottom: ${p => p.theme.space[5]}px;
        };

        @media screen and (min-width: 1440px) {
            font-size: 28px;
            margin-bottom: ${p => p.theme.space[5]}px;
        };
    }
`;

const SignForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Label = styled.label`
    position: relative;
    width: 100%;
    color: ${p => p.theme.colors.textAccent};
    & {
        @media screen and (max-width: 767px) {
            font-size: ${p => p.theme.fontSizes.s};
            margin-bottom: ${p => p.theme.space[4]}px;
        };

        @media screen and (min-width: 768px) and (max-width: 1439px) {
            font-size: 18px;
            margin-bottom: 24px;
        };

        @media screen and (min-width: 1440px) {
            font-size: 18px;
            margin-bottom: 24px;
        };
    }
`;

const Input = styled(Field)`
    width: 100%;
    height: 45px;
    color: ${p => p.theme.colors.textAccent};
    background-color: ${p => p.theme.colors.bgActiveColor};
    border: 1px solid ${p => p.theme.colors.textAccent};
    border-radius: ${p => p.theme.radii.normal};
    padding-left: ${p => p.theme.space[5]}px;
    &::placeholder {
        color: ${p => p.theme.colors.textAccent};
        @media screen and (max-width: 767px) {
            font-size: ${p => p.theme.fontSizes.s};
        };

        @media screen and (min-width: 768px) and (max-width: 1439px) {
            font-size: 18px;
        };
    }   
    &:hover,
    :focus {
        outline: none;
        border:  1px solid #8BAA36;
    }
`;

const BtnSub = styled.button`
    width: 100%;
    height: 45px;
    background-color: ${p => p.theme.colors.btnPrimeryColor};
    border-radius: ${p => p.theme.radii.normal};
    border: none;
    font-weight: ${p => p.theme.fontWeights.normal};
    color: ${p => p.theme.colors.textAccent};
    cursor: pointer;
`;

const BtnVisibilety = styled.button`
    position: absolute;
    color: ${p => p.theme.colors.textAccent};
    background-color: transparent;
    border: none;
    padding: 0;
    top: 13px;
    right: 10px;
`;

const Visibilety = styled(BiShow)`
    width: 25px;
    height: 20px;
`;

const VisibiletyOff = styled(AiOutlineEyeInvisible)`
    width: 25px;
    height: 20px;
`;

const ImgHiOutlineMail = styled(HiOutlineMail)`
    position: absolute;
    top: 15px;
    left: 10px;
    width: 15px;
    height: 15px;
`;

const ImgFiLock = styled(FiLock)`
    position: absolute;
    top: 15px;
    left: 10px;
    width: 15px;
    height: 15px;
`;

export { Container, Title, SignForm, Label, Input, BtnSub, BtnVisibilety, Visibilety, VisibiletyOff, ImgHiOutlineMail, ImgFiLock };