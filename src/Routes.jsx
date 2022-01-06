import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navibar from './components/Navibar';
import AdminPage from './pages/AdminPage';
import MainPage from './pages/MainPage';
import ProblemList from './ProblemList';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegistarPage';
import AuthContextProvider from './contexts/AuthContext';
const MyRoutes = () => {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Navibar />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/problem" element={<ProblemList />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    );
};

export default MyRoutes;