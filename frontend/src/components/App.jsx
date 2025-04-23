import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { login } from '../services/authSlice';
import routes from '../routes';
import AuthProvider from './AuthProvider';
import Layout from './Layout';
import LogInPage from '../pages/LogInPage';
import SignUpPage from '../pages/SignUpPage';
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProtectedRoute from './ProtectedRoute';
import AppRouter from './AppRouter';

// для отделения логики и проверки токена вводим компонент AppContent
const AppContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const { pathname } = location;

    if (!token && pathname !== routes.client.notFound()) {
      navigate(routes.client.login());
    } else if (token) {
      dispatch(login({ token }));
    }
  }, [dispatch, navigate, location.pathname]);

  return (
    <Layout>
      <AppRouter/>
    </Layout>
  );
};

const App = () => (
  <AuthProvider>
    <Router>
      <AppContent />
    </Router>
  </AuthProvider>
);

export default App;

// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { clearCredentials } from '../services/authSlice';
// // import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import auth from '../locale/auth'; // Импорт auth
// import chat from '../locale/chat'; // Импорт chat
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Navigate,
//   useNavigate,
//   useLocation,
// } from 'react-router-dom';
// import { Button, Navbar, Nav } from 'react-bootstrap';
// import routes from '../routes.js';
// import LogInPage from '../pages/LogInPage.jsx';
// import SignUpPage from '../pages/SignUpPage.jsx';
// import NotFoundPage from '../pages/NotFoundPage.jsx';
// import MainPage from '../pages/MainPage.jsx';
// import useAuth from '../hooks/useauth.jsx';
// import AuthProvider from './AuthProvider.jsx';


// // const ProtectedRoute = ({ children }) => {
// //   const token = localStorage.getItem('token');
// //   return token ? children : <Navigate to="/login" />;
// // };

// // const AuthButton = () => {
// //   const authData = useAuth(); // auth заменен на authData

// //   return authData.loggedIn ? <Button onClick={authData.logOut}>Log out</Button> : '';
// // }; 

// const App = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // i18n.use(initReactI18next).init({
//   //   resources: {
//   //     ru: {
//   //       auth,
//   //       chat,
//   //     },
//   //   },
//   //   lng: 'ru',
//   //   ns: ['auth', 'chat'], // Указываем namespaces
//   //   interpolation: { escapeValue: false },// отключаем экранирование, если нет  атак XSS
//   // });

//   // проверка наличия токена, если его нет - редирект на login
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//     } else {
//       dispatch(login({ token })); // Загружаем токен в Redux
//     }
//   }, [dispatch, navigate]);
  
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar bg="light" expand="lg">
//           <Navbar.Brand as={Link} to="/">Hexlet Chat</Navbar.Brand>
//           <AuthButton />
//         </Navbar>

//         <div className="container p-3">
//           <Routes>
//           <Route path={routes.client.login()} element={<LogInPage />} />
//           <Route path={routes.client.signup()} element={<SignUpPage />} />
//           <Route path={routes.client.main()} element={
//             <ProtectedRoute>
//               <MainPage />
//             </ProtectedRoute>
//           } />
//           <Route path={routes.client.notFound()} element={<NotFoundPage />} />
//           </Routes>
//         </div>

//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;
