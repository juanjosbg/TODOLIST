import TodoList from '../Components/todoList.js';
import Nav from '../header/nav.js'

import {AiOutlinePlus} from 'react-icons/ai';

const index = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white h-[40rem] mx-auto">
      <Nav className="shadow-xl"/>
      <div className='text-center my-5 flex flex-col gap-4 lg:overflow-visible lg:px-0 btn-TaskList'>
        <button className='btn btn-primary w-full  max-w-4xl text-white'> Add new Task 
          <AiOutlinePlus size={18} className="ml-2" />
        </button>
      </div>
      <TodoList/>
    </section>
  )
}

export default index
