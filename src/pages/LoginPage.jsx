import { useState } from "react";

import LoginForm from "../components/LoginForm";

import { Wrapp, Image, BgAccent } from './PagesStyled';

const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    }

    return (
        <Wrapp>
            <Image></Image>
            <LoginForm showPassword={showPassword} toggleShowPassword={toggleShowPassword} />
            <BgAccent></BgAccent>
        </Wrapp>
    )
}

export default LoginPage;