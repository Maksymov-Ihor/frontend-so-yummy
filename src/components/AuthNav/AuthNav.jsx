import { Wrapper, Container, Logo, Title, Text, LinkWrapp, RegisterLink, SignupLink } from "./AuthNavStyled";


const AuthNav = () => {
    return (
        <Wrapper>
            <Container>
                <Logo href="#">logo</Logo>
                <Title>Welcome to the app!</Title>
                <Text>This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time.</Text>
                <LinkWrapp>
                    <RegisterLink to='/register'>Registration</RegisterLink>
                    <SignupLink to='/login'>Sign In</SignupLink>
                </LinkWrapp>
            </Container>
        </Wrapper>
    )
}

export default AuthNav;