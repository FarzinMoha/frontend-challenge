import React from 'react';

interface TitleProps {
  title: string;
  level?: 2 | 3 | 4 | 5 | 6; // Optional prop to control the heading level (h1 to h6)
  titleClass?: string;
  pageTitle?:boolean
}

export const Title: React.FC<TitleProps> = ({ title, level = 2, pageTitle, titleClass = '' }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements; // Dynamically choosing the heading tag
  return (
    <>
        {pageTitle ?
            <h1 className={`text-[clamp(27px,4vw,35px)] capitalize select-none font-bold text-Primary ${titleClass}`}>
                {title}
            </h1>
        :
            <Tag className={`text-[clamp(20px,4vw,27px)] capitalize select-none font-bold text-black ${titleClass}`}>
                {title}
            </Tag>
        }
    </>
  );
};

export default Title;
