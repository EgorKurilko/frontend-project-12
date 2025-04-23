import { Routes, Route } from 'react-router-dom';
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
    <Route path={routes.client.notFound()} element={<NotFoundPage />} />
  </Routes>
);

export default AppRouter;
