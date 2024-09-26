import React from 'react';
import Loading from './Loading';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonClass?: string;
  primaryBorder?: boolean;
  blackBorder?: boolean;
  primary?: boolean;
  loading?:boolean
}

export const Button: React.FC<ButtonProps> = ({
  buttonClass = '',
  children,
  primaryBorder,
  blackBorder,
  primary,
  loading,
  ...buttonProps
}) => {
  return (
    <button className={`h-[40px] rounded-lg w-full max-w-[200px] flex justify-center items-center cursor-pointer duration-300 ${primaryBorder ? ' bg-transparent border border-Primary hover:text-Primary' : blackBorder ? 'bg-transparent border border-black hover:border-gray-400' : ''} ${ primary ? ' bg-Primary border border-Primary hover:opacity-80 text-white' : '' } ${buttonClass}`} {...buttonProps}>
      {loading ? <Loading size={23} color='white' />  : children}
    </button>
  );
};

export default Button;
