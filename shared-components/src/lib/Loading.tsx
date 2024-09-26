import { ImSpinner9 } from "react-icons/im";


export const Loading = ({color,size}:any) => {
  return (
    <ImSpinner9 size={size} color={color} className="animate-spin" />
  );
};

export default Loading;
