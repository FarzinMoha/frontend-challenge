import { useState } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { addTodoSelector, filteredSuggestionsState } from '../recoil/todo/todoSelectors';
import { todoInputState } from '../recoil';
import { Button } from '@react-monorepo/shared-components';
import { FaPlus } from "react-icons/fa6";
import { colors } from '../colors';

const AddNewTodo = () => {
  const [inputValue, setInputValue] = useRecoilState(todoInputState)
  const filteredSuggestions = useRecoilValue(filteredSuggestionsState)
  const setTodoList = useSetRecoilState(addTodoSelector)
  const [inputDisabled, setInputDisabled] = useState(true)
  const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputValue.trim()) {
      setTodoList(inputValue)
      setInputValue('')
      setInputDisabled(true)
    }
  };
  const addNewHandler = (event:any) => {
    event.preventDefault()
    setInputDisabled(false)
  }
  return (
    <div className="flex flex-col w-full">
      <form onSubmit={handleAddItem} className="flex flex-col sm:flex-row items-center pt-4 sm:py-3 w-full">
        <div className="flex items-center w-full">
          <Button onClick={addNewHandler} primary buttonClass='!w-7 !h-7 !min-w-7 !max-w-7 !min-h-7 !max-h-7 !rounded-full mr-4'>
              <FaPlus color={colors.white} size={20} />
          </Button>
          <input disabled={inputDisabled} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Memorize the dictionary"
            className="w-full h-full bg-transparent outline-none text-gray-600 placeholder-gray-400 disabled:cursor-not-allowed disabled:placeholder-gray-300"/>
        </div>
        <Button type='submit' disabled={inputDisabled}  primary buttonClass='!max-w-[100%] mt-5 sm:mt-0 sm:!max-w-[100px]'>
            Add Item
        </Button>
      </form>
      {filteredSuggestions.length > 0 && (
        <ul className="bg-white shadow-lg rounded-lg mt-2 max-h-40 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => setInputValue(suggestion)} className="cursor-pointer p-2 hover:bg-gray-100" >
              {suggestion}
            </li>))}
        </ul>)}
    </div>
  );
};

export default AddNewTodo;
