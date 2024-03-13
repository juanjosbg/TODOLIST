import React from 'react';

const LogIn = () => {
  // Your LogIn component code here
  return (
    <section>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="font-semibold leading-7 text-indigo-600">Log In</h2>
                <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">Bienvenido a
                  <span className='ml-2 text-indigo-600'>priority tasks</span>
                </p>

                <form>
                  <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                          <label for="first-name" class="block text-sm font-medium leading-6 text-indigo-600">First name</label>
                          <div class="mt-2">
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 hadow-sm ring-1 ring-inset bg-[#e5e5e5] ring-gray-300 placeholder:text-indigo-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2 color-[#000]" />
                          </div>
                        </div>

                        <div class="sm:col-span-3">
                          <label for="last-name" class="block text-sm font-medium leading-6 text-indigo-600">Last name</label>
                          <div class="mt-2">
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-[#e5e5e5] ring-gray-300 placeholder:text-indigo-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>

                        <div class="col-span-full">
                          <label for="street-address" class="block text-sm font-medium leading-6 text-indigo-600">Street address</label>
                          <div class="mt-2">
                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 bg-[#e5e5e5] ring-inset ring-gray-300 text-indigo-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" class="text-sm font-semibold leading-6 text-gray-600 lg:max-w-none">Cancel</button>
                    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-100 carousel carousel-center max-w-md p-4 space-x-4 bg-neutral sm:w-[60rem] md:-ml-5 lg:-ml-0 ring-gray-400/10 rounded-box rounded-xl shadow-xl">
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