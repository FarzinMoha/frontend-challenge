import { CheckBox, Divider } from '@react-monorepo/shared-components'
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil'
import { todoListState } from '../recoil'

interface TodoItemProps {
  data:{
    text:string
    isCompleted:boolean
    id:string
  }
}
const TodoItem:React.FC<TodoItemProps> = ({data}) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const toggleCompletion = () => {
    const updatedList = todoList.map((item) => item.id === data.id ? { ...item, isCompleted: !item.isCompleted } : item);
    setTodoList(updatedList)
  };
  return (
    <>
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='w-full py-4 flex justify-start items-start fade-in'>
        <CheckBox checked={data.isCompleted} onChange={toggleCompletion} label={data?.text} rightLabel labelClass='text-[clamp(13px,3vw,20px)] ml-4 select-none'/>
    </motion.div >
    <Divider  extraClass="self-end w-[calc(100%-35px)] mt-1" />
    </>
  )
}

export default TodoItem