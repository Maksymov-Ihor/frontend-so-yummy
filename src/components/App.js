import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import GlobalStyle from "./GlobalStyle";

import Layout from "./Layout";

import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const WellcomPage = lazy(() => import('../pages/WellcomPage.jsx'));
const RegisterPage = lazy(() => import('../pages/RegisterPage.jsx'));
const LoginPage = lazy(() => import('../pages/LoginPage.jsx'));
const MainPage = lazy(() => import('../pages/MainPage.jsx'));

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<WellcomPage />} />
                    <Route path='/register'
                        element={<RestrictedRoute redirectTo='/main' component={<RegisterPage />} />} />
                    <Route path='/login'
                        element={<RestrictedRoute redirectTo='/main' component={<LoginPage />} />} />
                    <Route path='/main'
                        element={<PrivateRoute redirectTo='/login' component={<MainPage />} />} />
                    {/* <Route path='/register' element={<RegisterPage />} /> */}
                    {/* <Route path='/login' element={<LoginPage />} /> */}
                </Route>
            </Routes>
            <GlobalStyle />
        </>
    )
}

export default App;