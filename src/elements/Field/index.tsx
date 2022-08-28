import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

type Props = {
  name: string;
} & TextFieldProps;

export const Field: FC<Props> = ({ name, ...otherProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          {...otherProps}
          error={!!errors[name]}
          helperText={(errors[name] as any)?.message}
          size="small"
          fullWidth
          variant="outlined"
        />
      )}
    />
  );
};
