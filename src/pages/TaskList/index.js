import Nav from '../header/nav.js'
import {AiOutlinePlus} from 'react-icons/ai';

import TodoList from '../Components/todoList.js';

function TaskList() {
  return (
    <section>
      <div>
        <Nav className="shadow-xl" />
        <div className='relative isolate overflow-hidden bg-[#f5f5f5ec] h-[40rem] mx-auto'>
          <div className='text-center my-5 flex flex-col gap-4 lg:overflow-visible lg:px-0 btn-TaskList'>
            <button className='btn btn-primary w-full  max-w-4xl text-white mt-2'>
              Add new Task <AiOutlinePlus size={18} className="ml-2" />
            </button>
          </div>

          <div className='text-center gap-4 pr-8'>
            <TodoList/>
          </div>
        </div>
      </div>
    </section>
  );
}
    
export default TaskList;