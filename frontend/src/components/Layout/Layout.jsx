import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button, Navbar, Container } from 'react-bootstrap';
import { useAuth } from '../hooks/useauth';
import routes from '../routes';
import styles from './Layout.module.css';

const Layout = () => {
  const { loggedIn, logOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logOut();
    
    if (location.pathname !== routes.client.notFound()) {
      navigate(routes.client.login());
    }
  };

  return (
    <div className={styles.layoutContainer}>
      <Navbar fixed="top" className={styles.navbar}>
        <Container fluid className={styles.navContainer}>
          <Navbar.Brand
            as={Link}
            to={loggedIn ? routes.client.main() : routes.client.login()}
            className={styles.brand}
          >
            Hexlet Chat
          </Navbar.Brand>

          {loggedIn && (
            <Button
              variant="outline-primary"
              className={styles.logoutButton}
              onClick={handleLogout}
            >
              Выйти
            </Button>
          )}
        </Container>
      </Navbar>

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
