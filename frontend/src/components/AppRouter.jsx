import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import routes from '../routes';
import LogInPage from '../pages/LogInPage.jsx';
import SignUpPage from '../pages/SignUpPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import MainPage from '../pages/MainPage.jsx';

const AppRouter = () => (
  <Routes>
    <Route path={routes.client.login()} element={<LogInPage />} />
    <Route path={routes.client.signup()} element={<SignUpPage />} />
    <Route 
      path={routes.client.main()} 
      element={
        <ProtectedRoute>
          <MainPage />
        </ProtectedRoute>
      } 
    />
    <Route path="/not-found" element={<NotFoundPage />} />
    <Route path="*" element={<Navigate to="/not-found" replace />} />
  </Routes>
);

export default AppRouter;
