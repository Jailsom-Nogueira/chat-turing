import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import useForm from '../../customHooks/useForm';
import firebase from 'firebase/app';
import 'firebase/auth';

import { FormPageContainer } from '../../components/FormPageContainer';
import { StyledButton, InputText } from '../../customUiComponents';

export default function LoginPage(props) {
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

  const goToSignUp = () => {
    history.push('/signup');
  };

  const handleSubmitEmail = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .catch(function (error) {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((credential) => {
        return firebase
          .firestore()
          .collection('users')
          .doc(credential.user.uid)
          .set({
            name: credential.user.displayName,
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <FormPageContainer>
      <h1> Login </h1>
      <form onSubmit={handleSubmitEmail}>
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

        <StyledButton>Login with Email</StyledButton>
        <StyledButton type={'button'} onClick={googleLogin}>
          Login with Google
        </StyledButton>
        <h4>Or</h4>
        <StyledButton type={'button'} onClick={goToSignUp}>
          SignUp
        </StyledButton>
      </form>
    </FormPageContainer>
  );
}
