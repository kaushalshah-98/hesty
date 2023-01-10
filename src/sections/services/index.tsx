import clsx from 'clsx';
import Link from 'next/link';
import { CylinderImage, Heading, SubHeading } from '~/components';
import { ROUTES } from '~/config';

export const Services = ({ index }: { index: 'left' | 'right' }) => {
  return (
    <section
      className={clsx('my-32 md:mt-44 lg:mt-64 lg:mb-44 2xl:my-64', {
        'hidden sm:block': index === 'left',
      })}
    >
      <div className='container mx-auto max-w-7xl px-10'>
        <div
          className={clsx('flex flex-col-reverse items-end space-x-8 md:items-center', {
            'sm:flex-row': index === 'right',
            'sm:flex-row-reverse': index === 'left',
          })}
        >
          <div className='flex flex-col sm:w-[50%] md:w-[60%]'>
            <section
              className={clsx('relative flex ', {
                'sm:justify-start': index === 'right',
                'sm:justify-end': index === 'left',
              })}
            >
              <CylinderImage
                className='h-auto w-[80%] justify-end rounded-t-full md:w-[70%]'
                image='/image10.jpg'
              />

              <div
                className={clsx('absolute bottom-10 right-8 drop-shadow-2xl', {
                  'md:right-24 xl:right-36': index === 'right',
                  'md:-right-12 lg:-right-8 xl:-right-16': index === 'left',
                })}
              >
                <img alt='image' className='h-32 w-32' src='/Group 46.png' />
              </div>
            </section>
          </div>

          <div className='flex max-w-lg flex-col space-y-2 pb-10 sm:space-y-4 md:w-[40%]'>
            <SubHeading>services</SubHeading>
            <Heading>Lorem ipsum dolor</Heading>
            <Heading>sit amet</Heading>
            <span className='text-sm leading-8 sm:leading-10 md:leading-7'>
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which dont
              look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isnt anything embarrassing hidden in the middle of text..
            </span>
            <Link href={ROUTES.PAGE2}>
              <button className='max-w-fit rounded-md bg-redd py-2 px-4 text-lg text-white'>
                View Availability
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
