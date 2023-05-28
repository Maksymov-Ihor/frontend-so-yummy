import { Formik } from "formik";
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { useRef } from "react";

import { signup } from "../../redux/auth/authOperation";

import {
    Container,
    Title,
    SignForm,
    Label,
    Input,
    BtnSub,
    BtnVisibilety,
    ImgFiUser,
    ImgHiOutlineMail,
    ImgFiLock,
    Visibilety,
    VisibiletyOff
} from './RegisterFormStyled';
 
const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const RegisterForm = ({ showPassword, toggleShowPassword }) => {

    const dispatch = useDispatch();

    const handleSubmit = (value, { resetForm }) => {
        dispatch(
            signup(value),
        )
        resetForm();
    };

    const inputRef = useRef(null);

    const handleToggelShowPassword = () => {
        inputRef.current?.focus();
        toggleShowPassword();
    }

    return (
        <Container>
            <Title>Register</Title>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                <SignForm autoComplete="off">
                    <Label>
                        <ImgFiUser />
                        <Input
                            type='text'
                            name='name'
                            placeholder='Name'
                            required
                        />
                    </Label>
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
                    <BtnSub type='submit'>Register</BtnSub>
                </SignForm>
            </Formik>
        </Container>
    )
}

export default RegisterForm;