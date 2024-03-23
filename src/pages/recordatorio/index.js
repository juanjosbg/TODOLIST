import Nav from '../header/nav.js'
import Sidebar from '../Components/Sidebar.js';

function TaskList({children }) {

  return (
    <section>
      <div>
        <Nav className="shadow-xl" />
        <div className='relative isolate overflow-hidden bg-[#f5f5f5ec] h-[40rem] mx-auto lg:h-[100vh]'>
          <div className="h-screen flex flex-row justify-start">
            <Sidebar />
            <div className="bg-primary flex-1 p-4 text-white">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaskList;
