import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignInPage';
import Layout from '../components/Layout';


const isLoggedIn = () => {
  return !!localStorage.getItem('frontend_challenge_token');
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return isLoggedIn() ? <Layout>{children}</Layout> : <Navigate to="/sign-in" />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>}/>
      <Route path="/sign-in" element={<SignInPage />} />
    </Routes>
  );
};

export default App;
