import { FaUser } from "react-icons/fa";

interface AvatarProps {
    color: string;
}

export const Avatar:React.FC<AvatarProps> = ({color}) => {
  return (
    <div className=' w-[50px] min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] h-[50px] rounded-full bg-Primary p-2 flex justify-center items-center'>
        <div className='  w-[45px] min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] h-[45px] rounded-full bg-white p-2 flex justify-center items-center'>
            <FaUser size={20} color={color} />
        </div>
    </div>
  )
}

export default Avatar