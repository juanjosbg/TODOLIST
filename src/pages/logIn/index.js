import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LoadingScreen = () => (
  <div className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-gray-200 opacity-75">
    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
  </div>
);


const LogIn = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const desiredPassword = 'ZUOLP-1232-SD';

  const handlePasswordChange = (event) => {
    event.preventDefault();

    const inputPassword = event.target.value;
    setPassword(inputPassword);
    setIsPasswordValid(inputPassword === desiredPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(isPasswordValid);

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulación de 2 segundos de carga
    setIsLoading(false);

    // Si la contraseña es válida, redirigir al usuario a otra sección
    if (isPasswordValid) {
      router.push('../taskList/');
    }
  };

  // Loader
  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setTimeout(() => {
        setIsLoading(false);
        router.push('/');
      }, 240000);
    }

    // Limpiar el temporizador si el componente se desmonta antes de que transcurran los 4 minutos
    return () => clearTimeout(timer);
  }, [isLoading, router]);

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Aquí podrías hacer cualquier trabajo asíncrono, como una llamada a la API.
    await fetch('/api/algun-ruta'); // Por ejemplo
    setIsLoading(false);
    router.push('/');
  };


  return (
    <section>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                {isLoading && <LoadingScreen />}
                <div className="hidden lg:flex lg:flex-1 lg:justify-start">
                  <a href="/" onClick={handleClick} className="text-sm font-semibold leading-7 text-indigo-600">Back <span aria-hidden="true">&rarr;</span></a>
                </div>

                <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">Bienvenido a
                  <span className='ml-2 text-indigo-600'>priority tasks</span>
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-indigo-600">First name</label>
                          <div className="mt-2">
                            <input type="text" name="first-name" id="first-name" autoComplete="given-name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-[#e5e5e5] ring-gray-300 placeholder:text-indigo-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2 color-[#000] pl-4" />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-indigo-600">Last name</label>
                          <div className="mt-2">
                            <input type="text" name="last-name" id="last-name" autoComplete="family-name" required value={lastName} onChange={(e) => setLastName(e.target.value)} className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-[#e5e5e5] ring-gray-300 placeholder:text-indigo-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4" />
                          </div>
                        </div>

                        <div className="col-span-full">
                          <label htmlFor="street-password" className="block text-sm font-medium leading-6 text-indigo-600">Password</label>
                          <div className="mt-2">
                            <input id="password" type="password" value={password} onChange={handlePasswordChange} required
                              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-[#e5e5e5] ring-gray-300 placeholder:text-indigo-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-600 lg:max-w-none" disabled={!isPasswordValid}>
                      Cancel
                    </button>
                    <button type="submit" className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none focus:ring focus:border-indigo-600 ${isPasswordValid ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-gray-300 cursor-not-allowed'}`}
                      onClick={handleSubmit} disabled={!isPasswordValid || isLoading} >
                      Log in
                    </button>
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