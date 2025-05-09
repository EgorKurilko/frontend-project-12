import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { logout } from '../store/slices/authSlice';
import { appRoutes } from '../routes';
import { getIsAuthenticated } from '../store/slices/authSelectors';

const AuthNavbar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(getIsAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate(appRoutes.login);
  };

  const handleBrandClick = (e) => {
    e.preventDefault(); // Отменяем стандартное поведение ссылки
    navigate(isAuthenticated ? appRoutes.main : appRoutes.login);
  };

  return (
    <Navbar expand="lg" className="shadow-sm navbar-light bg-white">
      <Container>
        <Navbar.Brand
          as="a" // Сохраняем семантику ссылки
          href={isAuthenticated ? appRoutes.main : appRoutes.login} // Для SEO и доступности
          onClick={handleBrandClick}
          style={{ cursor: 'pointer' }}
        >
          {t('main')}
        </Navbar.Brand>
        {isAuthenticated && (
          <Button variant="primary" onClick={handleLogout}>
            {t('buttons.logout')}
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default AuthNavbar;
