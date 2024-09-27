import React from 'react'

interface DividerProps  {
    extraClass?:string
}

export const Divider:React.FC<DividerProps> = ({extraClass}) => {
  return (
    <div className={`w-full bg-[#E4E7EB] h-[1px] ${extraClass}`} />
  )
}

export default Divider