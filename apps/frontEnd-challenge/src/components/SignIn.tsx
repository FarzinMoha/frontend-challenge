import {Button,Input,Title} from '@react-monorepo/shared-components'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { signInUserWithEmailAndPassword, signInWithGooglePopup } from '../utils/firebase';
import { useState } from 'react';
import notif from '../utils/notif';

interface SignInProps {
  handleFlip: () => void;
}

const SignIn: React.FC<SignInProps> = ({ handleFlip }) => {
  const [state,setState] = useState({email:'',password:''})
  const [loading,setLoading] = useState({emailLoading:false,googleLoading:false})
  const navigate = useNavigate()

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = event.target
    setState({...state,[name]:value})
  }

  const flipHandler = (e:any) => {
    e.preventDefault()
    handleFlip()
  }

  const logGoogleUser = async () => {
    try {
      const res:any = await signInWithGooglePopup();
      localStorage.setItem('frontend_challenge_token',res?.user?.accessToken)
      console.log(res);
      navigate('/')
    } catch (error:any) {
      console.log(error);
      notif(error.message,'danger')
    }
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    setLoading({...loading,emailLoading:true})
    try {
      const res:any = await signInUserWithEmailAndPassword(state.email,state.password)
      console.log(res);
      localStorage.setItem('frontend_challenge_token',res?.user?.accessToken)
      navigate('/')
    } catch (error:any) {
      console.error(error)
      notif(error.message,'danger')
    }finally{
      setLoading({...loading,emailLoading:false})
    }
  }

  return (
      <form onSubmit={submitHandler} className='w-full max-w-[370px] border rounded-lg flex flex-col justify-between p-3 mx-4 shadow-mainShadow'>
        <section>
          <div className='w-full flex justify-between items-center'>
            <Title title='Login page' pageTitle titleClass='mb-6'/>
          </div>
          <Input name='email' onChange={onChangeHandler} placeholder='Email' containerClass=' my-4' />
          <Input name='password' onChange={onChangeHandler} placeholder='Password' type='password' containerClass=' my-4' />
          <Link to={'#'} className='float-right mb-3 text-sm text-blue-500 hover:underline font-bold'>Forget Password?</Link>
        </section>
        <section className='mt-28 flex flex-col items-center'>
          <Button type='submit' loading={loading.emailLoading} primary buttonClass='!max-w-[100%] my-2'>Login</Button>
          <Button onClick={logGoogleUser} loading={loading.googleLoading} primaryBorder buttonClass='!max-w-[100%] my-2 flex justify-center items-center'>
            <FcGoogle size={23} />
            <span className=' ml-2'>Login with Gmail</span>
          </Button>
          <h2 className='text-sm mt-4 mb-2'>Don’t have an account? <button onClick={flipHandler} className=' text-blue-500 hover:underline font-bold'>Sign up</button></h2>
        </section>
      </form>
  )
}

export default SignIn