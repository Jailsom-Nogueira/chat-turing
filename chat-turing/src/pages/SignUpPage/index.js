import React, { useEffect } from 'react';

import useForm from '../../customHooks/useForm';
import firebase from 'firebase/app';
import 'firebase/auth';

import { useHistory } from 'react-router-dom';

import { FormPageContainer } from '../../components/FormPageContainer';
import { StyledButton, InputText, Gap } from '../../customUiComponents';

export default function SignUpPage(props) {
  const history = useHistory();

  useEffect(() => {
    if (props.currentUser) {
      history.push('/');
    }
  }, [history, props.currentUser]);

  const { form, onChange } = useForm({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSubmitSignUp = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((credential) => {
        return firebase
          .firestore()
          .collection('users')
          .doc(credential.user.uid)
          .set({
            name: form.name,
          });
      })
      .catch(function (error) {
        const errorCode = error.code;
        console.log(errorCode);

        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const goToLogin = () => {
    history.push('/login');
  };

  return (
    <FormPageContainer>
      <h1> SignUp </h1>
      <form onSubmit={handleSubmitSignUp}>
        <InputText
          type={'text'}
          name="name"
          value={form.name}
          placeholder={'Nome do usuário'}
          onChange={handleInputChange}
        />
        <InputText
          type={'email'}
          name="email"
          value={form.email}
          placeholder={'Email'}
          onChange={handleInputChange}
        />
        <InputText
          type={'password'}
          name="password"
          value={form.password}
          placeholder={'Password'}
          onChange={handleInputChange}
        />
        <Gap />
        <StyledButton>SignUp</StyledButton>
        <h4>Or</h4>
        <StyledButton type={'button'} onClick={goToLogin}>
          Login
        </StyledButton>
      </form>
    </FormPageContainer>
  );
}
