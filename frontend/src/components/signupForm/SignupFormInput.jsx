import { Form } from 'react-bootstrap';
import React, { forwardRef } from 'react';

const SignupFormInput = forwardRef(({
  formik, t, field, errorMessage, registrationFailed, lastItem,
}, ref) => (
  <>
    <Form.Control
      ref={ref} // Передаем реф
      placeholder={field.placeholder}
      name={field.name}
      type={field.type}
      required
      autoComplete={field.autoComplete}
      id={field.name}
      onBlur={formik.handleBlur}
      isInvalid={
          (formik.touched[field.name] && !!formik.errors[field.name])
          || registrationFailed
        }
      onChange={formik.handleChange}
      value={formik.values[field.name]}
    />
    <Form.Control.Feedback type="invalid">
      {formik.errors[field.name]}
      {lastItem && errorMessage}
    </Form.Control.Feedback>
    <Form.Label htmlFor={field.name}>{t(field.label)}</Form.Label>
  </>
));

// Добавляем display name
SignupFormInput.displayName = 'SignupFormInput';

export default SignupFormInput;
