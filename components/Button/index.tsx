import React from 'react';
import { button } from './index.css';

type Props = {
  children: React.ReactNode;
};

function Button({ children }: Props) {
  return (
    <button type="button" className={button}>
      {children}
    </button>
  );
}

export default Button;
