import { BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import cx from 'clsx';

const Header = () => {
  return (
    <>
      <div
        className={cx(
          'absolute z-0 block h-full w-full bg-cover bg-center bg-no-repeat opacity-40',
          'bg-[url("https://img.freepik.com/free-vector/watercolor-nature-background-with-leaves_52683-59449.jpg?w=2000")]'
        )}
      ></div>
      <div className='absolute w-full'>
        <nav className='flex h-16 flex-row items-center justify-between bg-transparent px-10 py-2'>
          <span className='font-medium text-green-700'>Hesty</span>
          <div className='flex flex-row items-center'>
            <span className='mr-3 text-lg font-medium text-text-600'>EN</span>
            <span className='mr-8 text-lg text-text-400'>PT</span>

            <button className='mr-4 flex rounded-full border border-text-100 bg-white p-1.5'>
              <BellIcon className='h-4 w-4 text-text-300' />
            </button>
            <button
              className='mr-4 flex rounded-3xl border border-transparent  bg-emerald-400 py-1.5 px-8 text-md font-medium text-emerald-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 hover:bg-green-500'
              type='submit'
            >
              Signup
            </button>

            <div className='flex items-center space-x-2 rounded-3xl border border-text-200 bg-white py-1 px-2'>
              <img
                alt=''
                className='inline-block h-6 w-6 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
              <span className='text-md text-text-500'>Alfred Santos</span>
              <ChevronDownIcon className='h-4 w-4 text-green-500' />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
