export const Header = ({ changeTheme }: { changeTheme: () => void }) => {
  return (
    <nav className='container mx-auto max-w-7xl py-10 px-10'>
      <div className='flex items-center justify-between'>
        <div className='hidden space-x-3 lg:flex'>
          {['Home', 'About', 'Services'].map((item) => (
            <span key={item} className='px-4 font-normal text-gray-500 dark:text-neutral-400'>
              {item}
            </span>
          ))}
        </div>
        <span className='text-3xl' title='click to change theme' onClick={changeTheme}>
          1-Space
        </span>
        <div className='block lg:hidden'>
          <button className='flex appearance-none items-center rounded border border-gray-600 px-3 py-2 text-gray-500 focus:outline-none hover:border-teal-500 '>
            <svg
              className='h-3 w-3 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className='hidden space-x-3 lg:flex'>
          {['Services', 'Spaces', 'Events'].map((item) => (
            <span key={item} className='px-4 font-normal text-gray-500 dark:text-neutral-400'>
              {item}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};
