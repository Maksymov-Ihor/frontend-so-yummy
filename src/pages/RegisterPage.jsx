import { useState } from "react";

import RegisterForm from "../components/RegisterForm";

import { Wrapp, Image, BgAccent } from "./PagesStyled";

const RegisterPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    }

    return (
        <Wrapp>
            <Image></Image>
            <RegisterForm showPassword={showPassword} toggleShowPassword={toggleShowPassword} />
            <BgAccent></BgAccent>
        </Wrapp>
    )
}

export default RegisterPage;