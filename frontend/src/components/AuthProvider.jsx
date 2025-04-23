import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearCredentials } from '../services/authSlice';
import AuthContext from '../contexts/authcontext.jsx';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => !!localStorage.getItem('token'));
  const dispatch = useDispatch();

  const logIn = () => setLoggedIn(true);

  const logOut = () => {
    dispatch(clearCredentials());
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

