import Link from 'next/link';
import { Heading, SubHeading } from '~/components';
import { ROUTES } from '~/config';

const images = [
  {
    url: '/Mask Group.jpg',
  },
  // {
  //   url: '/image 50.jpg',
  // },
  {
    url: '/image10.jpg',
  },
];

export default images;

export const Solutions = () => {
  return (
    <section className='my-20 lg:my-44'>
      <div className='container mx-auto max-w-7xl px-10'>
        <div className='flex flex-col items-end justify-between space-x-4 sm:flex-row md:items-center'>
          <div className='flex max-w-lg flex-col space-y-4 pb-10 md:w-[60%]'>
            <SubHeading>Solutions</SubHeading>
            <Heading>Lorem ipsum dolor sit</Heading>
            <Heading>amet</Heading>
            <span className='text-sm leading-10'>
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

          <div className='flex w-full sm:w-[50%] sm:justify-end md:w-[40%] md:justify-center'>
            <img
              alt='image'
              className='h-auto w-full justify-center sm:w-[80%] sm:justify-end md:w-full md:justify-center'
              src='/Mask Group.jpg'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
