import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';

import './login-form.scss';
import TextField from '@primitives/text-field';
import Button from '@primitives/button';

interface LoginFormInterface {
  userEmail: string,
  userPassword: string
}

let validationSchema = yup.object().shape(
  {
    userEmail: yup.string().required("Required"),
    userPassword: yup.string().required("Required").min(6, '\'user password must\' be at least 6 characters'),
  }
);

const LoginForm: React.FC = () => {
  const {handleSubmit, handleChange, values, errors } = useFormik(
    {
      initialValues: {
        userEmail   : '',
        userPassword: '',
      } as LoginFormInterface,


      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },

      validationSchema
    }
  );

  return (
    <form data-testid={'login_form'} onSubmit={handleSubmit}>
      <TextField
        id={'userEmail'}
        onChange={handleChange}
        hasError={!!errors.userEmail}
        label={'user name'}
        value={values.userEmail}
        message={errors.userEmail ? errors.userEmail : ''}

      />

      <TextField
        id={'userPassword'}
        label={'password'}
        hasError={!!errors.userPassword}
        value={values.userPassword}
        onChange={handleChange}
        message={errors.userPassword ? errors.userPassword : ''}
      />

      <Button
        primary
        label={'Login'}
        type='submit'
      />
    </form>
  )
};

export default LoginForm;
