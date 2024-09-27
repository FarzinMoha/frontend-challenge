import { useRecoilState } from "recoil";
import { userState } from "../recoil";
import Header from "./Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../utils/firebase";

interface LayoutProps {
    children: React.ReactNode;
}
const Layout:React.FC<LayoutProps> = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useRecoilState(userState);
    const updateUserData = async () => {
        const uid = localStorage.getItem('frontend_challenge_uid')
        try {
            const res = await getUserData(uid)
            setUser(res);
        } catch (error) {
            localStorage.removeItem('frontend_challenge_token')
            navigate('/sign-in')
            console.log(error);
        }
    }
    useEffect(()=>{
        if(!user){
            updateUserData()
        }
    },[user])
  return (
    <>
        {user && 
            <div className={`${!user ? 'hidden' : 'w-full min-h-screen'}`}>
                <Header/>
                <section className=" min-h-[calc(100vh-80px)] pt-3 px-4">
                    {children}
                </section>
            </div>
        }
    </>

  )
}

export default Layout