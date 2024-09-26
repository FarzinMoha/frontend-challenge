import React, { ReactNode, useState } from 'react';
import { BiSolidShow,BiHide } from "react-icons/bi";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClass?: string;
  labelClass?: string;
  inputClass?: string;
  leftIcon?:ReactNode
  rightIcon?:ReactNode
}

export const Input: React.FC<InputProps> = ({
  label,
  containerClass = '',
  labelClass = '',
  inputClass = '',
  leftIcon,
  rightIcon,
  ...inputProps
}) => {
  const [passType,setPassType] = useState<string>('password')
  return (
    <div className={`w-full relative ${containerClass}`}>
      <label className="mb-1">
        <span className={` text-sm font-bold capitalize ${labelClass}`}>{label}</span>
        <input
        className={` w-full h-[45px] border border-grayBorder rounded outline-none p-2 focus:border-Primary ${inputClass}`}
        {...inputProps}
        type={inputProps.type === 'password' ? passType : inputProps.type}
        />
      </label>
      <div className=' absolute transform top-1/2 -translate-y-1/2 left-2'>{leftIcon}</div>
      <div className=' absolute transform top-1/2 -translate-y-1/2 right-2'>{rightIcon}</div>
      {inputProps.type === 'password' &&
      <div className={`absolute transform top-1/2 -translate-y-1/2  right-2`}>
        {passType==='password' && <BiSolidShow className=' cursor-pointer hover:text-Primary' size={23} onClick={()=>setPassType('text')} /> }
        {passType==='text' && <BiHide className=' cursor-pointer hover:text-Primary' size={23} onClick={()=>setPassType('password')} /> }
      </div>
      }
    </div>
  );
};

export default Input;
