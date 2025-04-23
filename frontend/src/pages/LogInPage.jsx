import React from 'react';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useLoginMutation } from '../services/authApi.js';
import { useTranslation } from 'react-i18next';
import useAuth from '../hooks/useauth.jsx';
import routes from '../routes.js';

const LogInPage = () => {
  const { t } = useTranslation('auth');
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const [login, { error }] = useLoginMutation();

  const validationSchema = yup.object({
    username: yup.string().required(t('messages.required')),
    password: yup.string().required(t('messages.required')),
  });

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const { token } = await login(values).unwrap();
        localStorage.setItem('token', JSON.stringify({ token }));
        auth.logIn();
        navigate(location.state?.from?.pathname || '/');
      } catch (err) {
        setErrors({ username: t('messages.validation') });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <nav>
        <Link to={routes.mainPath()}>{t('brand')}</Link>
      </nav>
      <Form.Label>{t('loginTitle')}</Form.Label>
      <Form.Group className="mb-3">
        <Form.Floating>
          <Form.Control
            type="text"
            id="username"
            name="username"
            placeholder={t('login')}
            onChange={formik.handleChange}
            value={formik.values.username}
            isInvalid={formik.touched.username && !!formik.errors.username}
          />
          <label htmlFor="username">{t('login')}</label>
          <Form.Control.Feedback type="invalid">
            {formik.errors.username}
          </Form.Control.Feedback>
        </Form.Floating>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Floating>
          <Form.Control
            type="password"
            id="password"
            name="password"
            placeholder={t('password')}
            onChange={formik.handleChange}
            value={formik.values.password}
            isInvalid={formik.touched.password && !!formik.errors.password}
          />
          <label htmlFor="password">{t('password')}</label>
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Floating>
      </Form.Group>
      {error && <Form.Text className="text-danger">{t('messages.validation')}</Form.Text>}
      <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
        {t('loginBtn')}
      </Button>
      <hr />
      <p>
        {'Нет аккаунта?'} <Link to="/signup">{t('signupTitle')}</Link>
      </p>
    </Form>
  );
};

export default LogInPage;

