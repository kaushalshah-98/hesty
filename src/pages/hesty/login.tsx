import cx from 'clsx';

const Login = () => {
  return (
    <>
      <div
        className={cx(
          'absolute z-0 block h-full w-full bg-cover bg-center bg-no-repeat opacity-40',
          'bg-[url("https://img.freepik.com/free-vector/watercolor-nature-background-with-leaves_52683-59449.jpg?w=2000")]'
        )}
      ></div>
      <div className='z-2 absolute top-[50%] left-[50%] flex h-screen w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center px-0 sm:px-6 lg:bg-transparent lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-xl'>
          <div className='rounded-3xl bg-white py-20 px-[4.5rem] shadow-2xl'>
            <div className='flex flex-col space-y-2'>
              <span className='text-3xl leading-[43px] text-green-500'>
                Welcome to <span className='font-medium text-green-700'>Hesty.</span>
              </span>
              <span className='text-md text-text-500'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed magna aliquyam erat,
                sed voluptua.
              </span>
            </div>
            <form action='#' className='pt-5' method='POST'>
              <div>
                <label className='block text-tiny font-medium text-emerald-800' htmlFor='email'>
                  Email
                </label>
                <div className='mt-1'>
                  <input
                    required
                    autoComplete='email'
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm'
                    id='email'
                    name='email'
                    type='email'
                  />
                </div>
              </div>

              <div className='pt-5'>
                <label className='block text-tiny font-medium text-emerald-800' htmlFor='password'>
                  Password
                </label>
                <div className='mt-1'>
                  <input
                    required
                    autoComplete='current-password'
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm'
                    id='password'
                    name='password'
                    type='password'
                  />
                </div>
              </div>
              <div className='flex items-center justify-between pb-5 pt-1'>
                <div />
                <div className='text-sm'>
                  <a className='font-medium text-text-400' href='#'>
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className='flex max-w-fit flex-col space-y-4'>
                <button
                  className='flex rounded-3xl border border-transparent bg-green-400 py-2 px-12 text-lg font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 hover:bg-green-500'
                  type='submit'
                >
                  Login
                </button>
                <div className='flex flex-row justify-center space-x-1 text-sm'>
                  <span className='text-md text-text-600'>New Here?</span>
                  <span className='cursor-pointer text-md text-green-400 hover:underline'>
                    Sign up
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
