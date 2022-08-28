import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Field, Button, Hero, H1 } from '../../elements';
import { IFormValues, schema } from './config';
import { useLogin } from '../../hooks';

import './index.scss';

export const Login: React.FC = () => {
  const { login } = useLogin();
  const methods = useForm<IFormValues>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    login(data);
  };

  return (
    <Hero className="login__hero">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="login__form">
          <div className="login__container">
            <H1 className="login__title">Login</H1>
            <Field
              className="login__field"
              name="username"
              type="text"
              placeholder="Login"
              focused
            />
            <Field
              className="login__field"
              name="password"
              type="password"
              placeholder="Password"
              focused
            />
            <Button buttonType="submit" className="login__submit" variant="contained">
              Submit
            </Button>
          </div>
        </form>
      </FormProvider>
    </Hero>
  );
};
