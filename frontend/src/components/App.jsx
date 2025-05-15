import React from 'react';
import {
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import { getIsAuthenticated } from '../store/slices/authSelectors';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ChatPage from './pages/ChatPage';
import SignupPage from './pages/SignupPage';
import AuthNavbar from './AuthNavbar';
import ModalsContainer from './modals/ModalsContainer';
import { appRoutes } from '../routes';
import useAuth from '../hooks/useAuth';

const App = () => {
  useAuth();
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <div className="d-flex flex-column h-100">
      <AuthNavbar />
      <ModalsContainer />
      <Routes>
        <Route
          path={appRoutes.main}
          element={
            isAuthenticated ? <ChatPage /> : <Navigate to={appRoutes.login} replace />
          }
        />
        <Route path={appRoutes.login} element={<LoginPage />} />
        <Route path={appRoutes.signup} element={<SignupPage />} />
        <Route path={appRoutes.notFound} element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
