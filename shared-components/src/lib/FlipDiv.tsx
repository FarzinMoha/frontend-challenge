import { useState, useImperativeHandle, forwardRef, ReactNode } from 'react';
import ReactFlipCard from 'reactjs-flip-card';
import './flip.css'
interface FlipDivProps {
  frontComponent: ReactNode;
  backComponent: ReactNode;
  duration?: string; // Add duration prop for controlling flip time
}

export const FlipDiv = forwardRef(({ frontComponent, backComponent, duration = '0.6s' }: FlipDivProps, ref) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleFlip: () => setIsFlipped((prev) => !prev),
  }));

  return (
      <ReactFlipCard
        flipTrigger="disabled"
        flipByProp={isFlipped}
        frontComponent={frontComponent}
        backComponent={backComponent}
        flipCardStyle={{ transitionDuration: duration }}
      />
  );
});

export default FlipDiv;
