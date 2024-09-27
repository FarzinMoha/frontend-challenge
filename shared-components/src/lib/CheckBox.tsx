import React from 'react';

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checkBoxClass?: string;
  labelClass?: string;
  label?:string,
  rightLabel?:boolean
}

export const CheckBox: React.FC<CheckBoxProps> = ({
    checkBoxClass,
    labelClass,
    label,
    rightLabel,
  ...props
}) => {
  return (
    <label className='relative inline-flex items-center cursor-pointer font-bold text-sm'>
        {label && !rightLabel && <span className={` mr-2 ${labelClass}`}>{label}</span>}
        <input
          type="checkbox" 
          className={` h-7 w-7 sr-only peer border-2 border-Primary rounded accent-Primary cursor-pointer  ${checkBoxClass}`}
          {...props}
          />
        <div className="w-7 h-7 bg-white border-2 border-Primary rounded-full peer-checked:bg-checkBox peer-checked:border-Primary peer-checked:before:content-[''] peer-checked:before:absolute peer-checked:before:top-1 peer-checked:before:left-1 peer-checked:before:w-2 peer-checked:before:h-0 peer-checked:before:bg-white peer-checked:before:rounded-full"></div>
          {label && rightLabel && <span className={` mr-2 ${labelClass}`}>{label}</span>}
    </label>
  );
};

export default CheckBox;
