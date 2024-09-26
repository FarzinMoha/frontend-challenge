import React from 'react';

interface TitleProps {
  title: string;
  level?: 2 | 3 | 4 | 5 | 6; // Optional prop to control the heading level (h1 to h6)
  titleClass?: string;
}

export const PageTitle: React.FC<TitleProps> = ({ title, titleClass = '' }) => {
  return (
    <h1 className={`text-[clamp(20px,4vw,27px)] select-none font-bold text-black ${titleClass}`}>
      {title}
    </h1>
  );
};

export default PageTitle; 