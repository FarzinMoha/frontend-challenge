import React from 'react';

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checkBoxClass?: string;
  labelClass?: string;
  label?:string
}

export const CheckBox: React.FC<CheckBoxProps> = ({
    checkBoxClass,
    labelClass,
    label,
  ...props
}) => {
  return (
    <label className=' font-bold text-sm flex items-center'>
        {label && <span className={` mr-2 ${labelClass}`}>{label}</span>}
        <input
          type="checkbox"
          className={` h-5 w-5 border border-grayBorder rounded accent-Primary cursor-pointer ${checkBoxClass}`}
          {...props}
        />
    </label>
  );
};

export default CheckBox;
