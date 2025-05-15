import { Link } from 'react-router-dom';
import { appRoutes } from '../../routes';

const RegistrationLink = ({ t }) => (
  <div className="card-footer p-4">
    <div className="text-center">
      <span>
        {t('loginPage.exist')}
        {' '}
      </span>
      <Link to={appRoutes.signup}>{t('loginPage.registration')}</Link>
    </div>
  </div>
);

export default RegistrationLink;
