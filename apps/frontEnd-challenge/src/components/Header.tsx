import { Avatar, Button } from "@react-monorepo/shared-components"
import { useRecoilValue } from "recoil"
import { userState } from "../recoil"
import { colors } from "../colors"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const user:any = useRecoilValue(userState)
    const navigate = useNavigate()
    const signOutHandler = () => {
        localStorage.removeItem('frontend_challenge_token')
        localStorage.removeItem('frontend_challenge_uid')
        navigate('/sign-in')
    }
  return (
    <header className=" w-full h-[80px] py-3 px-4 flex items-center justify-end">
      <Button onClick={signOutHandler} primary buttonClass="max-w-[90px] text-sm mr-3">Sign out</Button>
      <div className="flex flex-col items-end relative">
          <Avatar color={colors.primary} />
          <span className="absolute top-full right-0 whitespace-nowrap mr-1 text-sm font-bold text-Primary">Hi {user.displayName}!</span>
      </div>
    </header>
  )
}

export default Header