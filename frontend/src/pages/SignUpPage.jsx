import React from 'react';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useSignupMutation } from '../services/authApi.js';
import { useTranslation } from 'react-i18next';
import useAuth from '../hooks/useauth.jsx';
import routes from '../routes.js';

const SignUpPage = () => {
  const { t } = useTranslation('auth');
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const [signup, { error }] = useSignupMutation();

  const validationSchema = yup.object({
    username: yup.string().min(3, t('messages.usernameSize')).max(20, t('messages.usernameSize')).required(t('messages.required')),
    password: yup.string().min(6, t('messages.passwordSize')).required(t('messages.required')),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], t('messages.confirmPassword')).required(t('messages.required')),
  });

  const formik = useFormik({
    initialValues: { username: '', password: '', confirmPassword: '' },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const { token } = await signup(values).unwrap();
        localStorage.setItem('userId', JSON.stringify({ token }));
        auth.logIn();
        navigate(location.state?.from?.pathname || '/');
      } catch (err) {
        setErrors({ username: t('messages.registration') });
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
      <Form.Label>{t('signupTitle')}</Form.Label>
      <Form.Group className="mb-3">
        <Form.Floating>
          <Form.Control
            type="text"
            id="username"
            name="username"
            placeholder={t('username')}
            onChange={formik.handleChange}
            value={formik.values.username}
            isInvalid={formik.touched.username && !!formik.errors.username}
          />
          <label htmlFor="username">{t('username')}</label>
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
      <Form.Group className="mb-3">
        <Form.Floating>
          <Form.Control
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder={t('confirmPassword')}
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            isInvalid={formik.touched.confirmPassword && !!formik.errors.confirmPassword}
          />
          <label htmlFor="confirmPassword">{t('confirmPassword')}</label>
          <Form.Control.Feedback type="invalid">
            {formik.errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Floating>
      </Form.Group>
      {error && <Form.Text className="text-danger">{t('messages.registration')}</Form.Text>}
      <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
        {t('signupBtn')}
      </Button>
    </Form>
  );
};

export default SignUpPage;

