import { FormButtonStyles, FormStyles, LabelStyles } from 'components/AllForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authoperations';

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
    <FormStyles  onSubmit={handleSubmit} autoComplete="off">
      <LabelStyles >
        Username
        <input type="text" name="name" />
      </LabelStyles>
      <LabelStyles >
        Email
        <input type="email" name="email" />
      </LabelStyles>
      <LabelStyles >
        Password
        <input type="password" name="password" autoComplete="off" />
      </LabelStyles>
      <FormButtonStyles type="submit">Register</FormButtonStyles>
    </FormStyles>
  );
};
