import { Divider, Title } from "@react-monorepo/shared-components"
import { motion } from 'framer-motion';
import TodoItem from "../components/TodoItem"
import AddNewTodo from "../components/AddNewTodo"
import { useRecoilValue } from "recoil"
import { todoListState } from "../recoil"

const HomePage = () => {
  const todolist = useRecoilValue(todoListState)
  return (
    <div className="w-full">
      <Title title="Your todo list" pageTitle />
      <div className="w-full flex flex-col justify-center items-center pt-10 max-w-[800px] mx-auto">
        <Title title="todo list" titleClass="self-start" />
        <Divider  extraClass="self-end w-[calc(100%-35px)] mt-1" />
        {todolist.map((item:any)=><TodoItem key={item?.id} data={item} />)}
        <motion.div className="w-full" layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <AddNewTodo />
        </motion.div>
        <Divider  extraClass="self-end w-[calc(100%-35px)] mt-1 hidden sm:block" />
      </div>
    </div>
  )
}

export default HomePage