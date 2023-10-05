import { FormButtonStyles, FormStyles, LabelStyles } from 'components/AllForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authoperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyles  onSubmit={handleSubmit} autoComplete="off">
      <LabelStyles >
        Email
        <input type="email" name="email" />
      </LabelStyles>
      <LabelStyles >
        Password
        <input type="password" name="password" autoComplete="off" />
      </LabelStyles>
      <FormButtonStyles type="submit">Log In</FormButtonStyles>
    </FormStyles>
  );
};
