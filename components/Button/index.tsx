import React from 'react';
import { buttonMapping } from './index.css';

type Props = {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
};

function Button({ variant, children }: Props) {
  return (
    <button type="button" className={buttonMapping[variant]}>
      {children}
    </button>
  );
}

export default Button;
