import { BellIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { CylinderImage } from '~/components';

export const Banner = () => {
  return (
    <section className='md:mt-20 lg:mt-32'>
      <div className='container mx-auto max-w-7xl px-10'>
        <div className='flex flex-col'>
          <div className='flex flex-col justify-between md:flex-row'>
            <div className='mt-20 flex flex-col space-y-4 sm:mt-28 md:mt-6 md:min-w-fit lg:min-w-fit xl:mt-32'>
              <img alt='scribble' className='h-auto w-20' src='/scribble.svg' />
              <span className='text-3xl font-bold dark:text-neutral-300 text-gray-900 lg:text-4xl xl:text-5xl'>
                Lorem ipsum
              </span>
              <span className='text-3xl font-bold dark:text-neutral-300 text-gray-900 lg:text-4xl xl:text-5xl'>
                dolor sit amet
              </span>
            </div>
            <button className='my-8 max-w-fit rounded-md bg-redd py-2 px-4 text-lg dark:text-neutral-300 text-white sm:hidden'>
              Schedule Visit
            </button>
            <div className='flex flex-col justify-end'>
              <div className='mt-16 flex flex-row sm:mt-0'>
                <section className='relative flex w-9/12 justify-end sm:w-11/12 md:w-10/12 lg:w-full'>
                  <CylinderImage image='/image 50.jpg' />
                  <div className='absolute -top-10 right-0 -mr-10 md:-mr-4'>
                    <img
                      alt='image'
                      className='h-32 w-32 rounded-full sm:h-24 sm:w-24 lg:h-40 lg:w-40'
                      src='/asd.jpg'
                    />
                  </div>
                </section>
                <div className='flex w-3/12 flex-col-reverse items-start justify-start sm:w-1/12 sm:space-y-20 md:w-2/12 lg:w-fit'>
                  <span
                    className={clsx(
                      'mt-8 -ml-14 mb-16 w-[10rem] -rotate-90 text-lg font-bold capitalize dark:text-neutral-300 text-gray-200',
                      'sm:-ml-20 sm:mb-28 sm:mt-32 sm:w-[17rem] sm:text-5xl',
                      'md:-ml-10 md:mb-16 md:mt-20 md:w-[9rem] md:text-2xl',
                      'lg:-ml-16 lg:mb-20 lg:mt-24 lg:w-[12rem] lg:text-3xl'
                    )}
                  >
                    Co Working
                  </span>
                  <img
                    alt='image'
                    className='-ml-0.5 h-16 w-16 rounded-full sm:h-14 sm:w-14 lg:h-20 lg:w-20'
                    src='/Mask Group.jpg'
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backdropFilter: 'blur(16.2px)', background: 'rgba(243, 243, 243, 0.6)' }}
            className={clsx(
              'hidden w-[70%] flex-row items-center justify-between rounded-md px-8 text-gray-400 shadow-sm lg:py-5',
              'md:-mt-28 md:flex md:py-3',
              'xl:-mt-40 2xl:-mt-40'
            )}
          >
            <div className='flex flex-row items-center space-x-3 text-sm'>
              <BellIcon className='h-6 w-6 dark:text-gray-700' />
              <span className='md:text-sm dark:text-gray-700 lg:text-lg'>City</span>
            </div>
            <span className='md:text-sm dark:text-gray-700 lg:text-lg'>Location</span>
            <button className='rounded-md bg-redd py-2 px-4 text-white md:text-sm lg:text-lg'>
              Schedule Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
