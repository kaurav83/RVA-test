import * as yup from 'yup';

export interface IFormValues {
  username: string;
  password: string;
}

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'minimum password length ${min} symbols';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'maximum password length ${max} symbols';

export const schema: yup.SchemaOf<IFormValues> = yup
  .object()
  .shape({
    username: yup.string().required('username is required'),
    password: yup
      .string()
      .required('password is required')
      .min(5, tooShortMessage)
      .max(15, tooLongMessage)
      .defined(),
  })
  .defined();
