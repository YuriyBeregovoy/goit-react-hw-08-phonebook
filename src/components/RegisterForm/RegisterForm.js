import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authoperations';
import { LabelRegStyles, RegFormButton, RegFormStyles } from './Register.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegFormStyles  onSubmit={handleSubmit} autoComplete="off">
      <LabelRegStyles >
        Username
        <input type="text" name="name" />
      </LabelRegStyles>
      <LabelRegStyles >
        Email
        <input type="email" name="email" />
      </LabelRegStyles>
      <LabelRegStyles >
        Password
        <input type="password" name="password" autoComplete="off" />
      </LabelRegStyles>
      <RegFormButton type="submit">Register</RegFormButton>
    </RegFormStyles>
  );
};
