import React, { useState } from 'react'


function Register() {
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerLastname, setRegisterLastname] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerTermAndCondition, setRegisterTermAndCondition] = useState(false);
  
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-indigo-600">First name</label>
              <div className="mt-2">
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-[#e5e5e5] ring-gray-300 placeholder:text-indigo-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 color-[#000] pl-4"
                  required onChange={e => setRegisterUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-indigo-600">Last name</label>
              <div className="mt-2">
                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-[#e5e5e5] ring-gray-300 placeholder:text-indigo-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                  required onChange={e => setRegisterLastname(e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-4">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-indigo-600">Email</label>
              <div className="mt-2">
                <input type="text" name="first-name" id="first-name" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-[#e5e5e5] ring-gray-300 placeholder:text-indigo-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 color-[#000] pl-4"
                  required onChange={e => setRegisterEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-indigo-600">Phone</label>
              <div className="mt-2">
                <input type="number" name="last-name" id="last-name" autoComplete="tel" className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-[#e5e5e5] ring-gray-300 placeholder:text-indigo-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                  required onChange={e => setRegisterPhone(e.target.value)}

                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-password" className="block text-sm font-medium leading-6 text-indigo-600">Password</label>
              <div className="mt-2">
                <input id="password" type="password" required onChange={e => setRegisterPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-[#e5e5e5] ring-gray-300 placeholder:text-indigo-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label className="inline-flex items-center me-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" required onChange={e => setRegisterTermAndCondition(true)} />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <a href="#">Acepto terminos y condiciones</a>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-600 lg:max-w-none">
          Cancel
        </button>
        <button type="submit" className={`rounded-md px-3 py-2 text-sm font-semibold  bg-slate-400 text-white shadow-sm focus:outline-none focus:ring focus:border-indigo-600`}>
          Register
        </button>
      </div>
    </form>
  )
}

export default Register
