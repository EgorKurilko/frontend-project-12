// ProtectedRoute.jsx
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';
// import { getIsAuthenticated } from '../store/authSelectors';
// import { appRoutes } from '../routes';

// const ProtectedRoute = () => {
//   const isAuthenticated = useSelector(getIsAuthenticated);
//   return isAuthenticated ? <Outlet /> : <Navigate to={appRoutes.login} replace />;
// };

// // Использование в маршрутах:
// <Route element={<ProtectedRoute />}>
//   <Route path="/main" element={<MainPage />} />
//   <Route path="/profile" element={<ProfilePage />} />
// </Route>