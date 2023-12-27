import React from 'react';
import { button, background } from './index.css';

type Props = {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
};

function Button({ variant, children }: Props) {
  return (
    <button type="button" className={background[variant]}>
      {children}
    </button>
  );
}

export default Button;
