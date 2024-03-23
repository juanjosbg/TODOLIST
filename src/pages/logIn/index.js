import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import RegisterForm from '../account/Register.js';
import LoginForm from '../account/LoginForm.js'

const LogIn = () => {
  const data = [
    {
      label: "Log In",
      value: "Log In",
      desc: <LoginForm/>
    },
    {
      label: "Register",
      value: "Register",
      desc: <RegisterForm />
    },
  ];

  return (
    <section>
      <div className="overflow-hidden bg-white py-24 sm:py-32 lg:h-[100vh] w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-2 md:px-8 lg:mt-15 w-full">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <div className="hidden lg:flex lg:flex-1 lg:justify-start">
                  <a href="/" className="text-sm font-semibold leading-7 text-indigo-600">Back <span aria-hidden="true">&rarr;</span></a>
                </div>

                <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">Bienvenido a
                  <span className='ml-2 text-indigo-600'>priority tasks</span>
                </p>

                <Tabs id="custom-animation" value="login" className='max-w-[30rem] text-white mt-10'>
                  <TabsHeader className="border-b border-blue-gray-50 bg-transparent p-0"
                    indicatorProps={{
                      className: "bg-gray-100/10 shadow-none !text-gray-900 rounded-lg",
                    }}>
                    {data.map(({ label, value }) => (
                      <Tab key={value} value={value} className='bg-[#4759b2]'>
                        {label}
                      </Tab>
                    ))}
                  </TabsHeader>
                  <TabsBody animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}>
                    {data.map(({ value, desc }) => (
                      <TabPanel key={value} value={value}>
                        {desc}
                      </TabPanel>
                    ))}
                  </TabsBody>
                </Tabs>
              </div>
            </div>

            <div className="w-100 carousel carousel-center max-w-md p-4 space-x-4 bg-neutral sm:w-[60rem] md:-ml-5 lg:-ml-0 ring-gray-400/10 rounded-xl shadow-xl">
              <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
              </div>
              <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
              </div>
              <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
              </div>
              <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
              </div>
              <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
              </div>
              <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
              </div>
              <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;