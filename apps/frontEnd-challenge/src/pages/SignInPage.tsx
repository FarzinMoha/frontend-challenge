import { useRef } from 'react';
import { FlipDiv } from '@react-monorepo/shared-components';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const SignInPage = () => {
  const flipDivRef = useRef<{ toggleFlip: () => void }>(null);
  const handleFlip = () => {
    flipDivRef.current?.toggleFlip();
  };
  return (
    <main className='w-full min-h-screen flex justify-center items-center'>
      <FlipDiv
        ref={flipDivRef}
        frontComponent={<SignIn handleFlip={handleFlip}/>}
        backComponent={<SignUp handleFlip={handleFlip} />}
        duration="1.5s"
        />
    </main>
  );
};

export default SignInPage;
