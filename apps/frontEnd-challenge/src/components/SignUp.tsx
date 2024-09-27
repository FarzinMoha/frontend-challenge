import {Button,Input,Title} from '@react-monorepo/shared-components'
import { useState } from 'react';
import { signUpFirebase } from '../utils/firebase';
import notif from '../utils/notif';

interface SignUpProps {
  handleFlip: () => void;
}
interface stateType {
  name:string
  surname:string
  email:string
  password:string
  confirmPassword:string
}
const SignUp: React.FC<SignUpProps> = ({ handleFlip }) => {
  const initialState = {name:'',surname:'',email:'',password:'',confirmPassword:''}
  const [state,setState] = useState<stateType>(initialState)
  const [loading,setLoading] = useState<boolean>(false)
  const flipHandler = (e:any) => {
    e.preventDefault()
    handleFlip()
    setState(initialState)
  }
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = event.target
    setState({...state,[name]:value})
  }
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    try {
      const displayName = `${state?.name} ${state.surname}`
      await signUpFirebase(state.email,state.password,displayName)
      notif("You've registered successfully",'success')
      flipHandler(event)
    } catch (error:any) {
      console.log(error)
      notif(error.message,'danger')
    }finally{
      setLoading(false)
    }
  }
  return (
    <form onSubmit={submitHandler} className='w-full max-w-[370px] border rounded-lg flex flex-col justify-between p-3 mx-4 shadow-mainShadow'>
      <section>
        <div className='w-full flex justify-between items-center'>
          <Title title='Sign up page' pageTitle titleClass='mb-6'/>
        </div>
        <Input name='name' onChange={onChangeHandler} placeholder='Name' containerClass=' my-4' />
        <Input name='surname' onChange={onChangeHandler} placeholder='Surname' containerClass=' my-4' />
        <Input name='email' onChange={onChangeHandler} placeholder='Email' containerClass=' my-4' />
        <Input name='password' onChange={onChangeHandler} placeholder='Password' type='password' containerClass=' my-4' />
        <Input name='confirmPassword' onChange={onChangeHandler} placeholder='Confirm Password' type='password' containerClass=' my-4' />
      </section>
      <section className='flex flex-col items-center'>
        <Button type='submit' loading={loading} primary buttonClass='!max-w-[100%] my-2'>Sign up</Button>
        <Button onClick={flipHandler} primaryBorder buttonClass='!max-w-[100%] my-2'>Back to login</Button>
      </section>
    </form>
  )
}

export default SignUp