import React from 'react';
import { btn } from './index.css';

type Props = {
  children: React.ReactNode;
} & React.ComponentProps<'button'>;

function RecipesButton({ children, ...rest }: Props) {
  return (
    <button className={btn({ color: 'orange', fill: true })} type="button" {...rest}>
      {children}
    </button>
  );
}

export default RecipesButton;
