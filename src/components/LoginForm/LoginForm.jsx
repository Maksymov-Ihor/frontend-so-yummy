import { Formik } from "formik";
import * as yup from 'yup'
import { useDispatch } from "react-redux";
import { useRef } from "react";

import { login } from "../../redux/auth/authOperation";

import {
    Container,
    Title,
    SignForm,
    Label,
    Input,
    BtnSub,
    BtnVisibilety, 
    Visibilety,
    VisibiletyOff,
    ImgHiOutlineMail,
    ImgFiLock
} from './LoginFormStyled';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
})

const LoginForm = ({ showPassword, toggleShowPassword }) => {

    const dispatch = useDispatch();

    const handleSubmit = (value, { resetForm }) => {
        dispatch(
            login(value),
        )
        resetForm();
    }

    const inputRef = useRef(null);

    const handleToggelShowPassword = () => {
        inputRef.current?.focus();
        toggleShowPassword();
    }

    return (
        <Container>
            <Title>Sign In</Title>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                <SignForm autoComplete="off">
                    <Label>
                        <ImgHiOutlineMail />
                        <Input
                            type='text'
                            name='email'
                            placeholder='Email'
                            required
                        />
                    </Label>
                    <Label>
                        <ImgFiLock />
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            placeholder='Password'
                            required
                        />
                        <BtnVisibilety
                            type='button'
                            onClick={handleToggelShowPassword}
                        >
                            {showPassword ? <Visibilety /> : <VisibiletyOff />}
                        </BtnVisibilety>
                    </Label>
                    <BtnSub type='submit'>Sign in</BtnSub>
                </SignForm>
            </Formik>
        </Container>
    )
}

export default LoginForm;