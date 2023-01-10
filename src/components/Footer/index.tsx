import { BellIcon } from '@heroicons/react/24/outline';

export const Footer = () => {
    return (
        <footer className='mt-20 bg-gradient-to-t dark:from-zinc-700 from-red-100 px-10 sm:mt-28'>
        <div className='container mx-auto max-w-7xl py-10 xl:py-28'>
          <div className='flex flex-col justify-between space-y-6 sm:flex-row sm:space-y-0'>
            <div className='flex w-full justify-start sm:w-1/4 sm:text-left'>
              <div className='flex flex-col space-y-4'>
                <span className='text-2xl'>1-Space</span>
                <span className='text-md md:text-sm'>
                  There are many variations of passages of Lorem Ipsum available.
                </span>
              </div>
            </div>
            <div className='flex w-full flex-col sm:w-1/4 sm:items-center sm:text-left'>
              <h5 className='mb-2 uppercase text-redd sm:mb-6'>Loresm Ipsum</h5>
              <div className='flex flex-col space-y-2 sm:space-y-4'>
                {[...(Array(5) as number[])].map((_, idx: number) => (
                  <span key={idx} className='dark:text-neutral-300 text-gray-600 hover:underline'>
                    Loresm Ipsum
                  </span>
                ))}
              </div>
            </div>
            <div className='flex w-full flex-col sm:w-1/4 sm:items-center sm:text-left'>
              <h5 className='mb-2 uppercase text-redd sm:mb-6'>Loresm Ipsum</h5>
              <div className='flex flex-col space-y-2 sm:space-y-4'>
                {[...(Array(4) as number[])].map((_, idx: number) => (
                  <span key={idx} className='dark:text-neutral-300 text-gray-600 hover:underline'>
                    Loresm Ipsum
                  </span>
                ))}
              </div>
            </div>
            <div className='flex w-full flex-col sm:w-1/4 sm:text-left'>
              <h5 className='mb-2 uppercase text-redd sm:mb-6'>Loresm Ipsum</h5>
              <div className='flex flex-row space-x-1'>
                {[...(Array(4) as number[])].map((_, idx: number) => (
                  <button key={idx} className='rounded-full bg-white p-2'>
                    <BellIcon className='h-4 w-4 text-redd' />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  