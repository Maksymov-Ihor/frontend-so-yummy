import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

import Box from '../../Box/Box';
import Header from '../Header';

const Layout = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Box
            minWidth={320}
            maxWidth={1440}
            as='main'
            margin='auto'
            height='100vh'
            position='relative'
        >
            {isLoggedIn && 
                <>
                <Header />
                <div>footer</div>    
            </>
            }
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </Box>
    )
}

export default Layout