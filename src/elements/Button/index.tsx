import { FC, ReactElement } from 'react';
import { Button as CustomButton } from '@mui/material';

import './index.scss';

type Props = {
  buttonType: 'button' | 'submit' | 'reset';
  children: ReactElement | string;
  className?: string;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'medium' | 'large';
};

export const Button: FC<Props> = ({ buttonType, className, variant, children, size }) => {
  return (
    <CustomButton type={buttonType} className={`button ${className}`} variant={variant} size={size}>
      {children}
    </CustomButton>
  );
};

Button.defaultProps = {
  className: '',
  variant: 'contained',
  size: 'medium',
};
