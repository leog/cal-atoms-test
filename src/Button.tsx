import React, { FC, ButtonHTMLAttributes } from 'react';
import classNames from "classnames";

type ButtonVariants = 'default' | 'warning';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({
  text,
  variant = 'default'
}) => {
  return (
    <button className={classNames(
      "transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-state1 hover:bg-state2 px-8 py-2 font-semibold",
      "dark:bg-state1-dark hover:dark:bg-state2-dark",
      variant === 'default' ? 'text-white' : 'text-red-700'
    )}>
      {text}
    </button>
  );
};
