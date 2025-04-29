import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const { loggedIn } = useAuth();
  const token = localStorage.getItem('token');

  if (!loggedIn || !token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
export default ProtectedRoute;
