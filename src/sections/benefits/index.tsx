import clsx from 'clsx';
import { Benefit, Heading, SubHeading } from '~/components';

export const Benefits = () => {
  return (
    <section className='mt-20 lg:mt-44'>
      <div className='container mx-auto max-w-7xl px-10'>
        <div className='flex flex-col items-center justify-center space-y-4 pb-10'>
          <SubHeading>Why choose us?</SubHeading>
          <Heading>Lorem ipsum dolor</Heading>
          <Heading>sit amet</Heading>
        </div>
        <div
          className={clsx(
            'mt-4 flex flex-col items-center justify-between space-y-10',
            'sm:flex-row sm:space-y-0'
          )}
        >
          {['armchair', 'dumbbell', 'event', 'internet', 'wifi'].map((image) => (
            <Benefit key={image} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
};
