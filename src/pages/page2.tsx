/* eslint-disable react/no-unescaped-entities */
import { useCallback, useState } from 'react';
import { Layout } from '~/layout';
import { Detail } from '~/sections';

const Landing = () => {
  const [tab, settab] = useState(0);

  const contents = {
    0: <div className='text-center text-4xl'>Tab1</div>,
    1: <div className='text-center text-4xl'>Tab2</div>,
    2: <div className='text-center text-4xl'>Tab3</div>,
  };

  const onChange = useCallback(
    (value: number) => () => {
      settab(value);
    },
    []
  );

  return (
    <Layout>
      <Detail />

      <section className='mt-10 lg:mt-20'>
        <div className='container mx-auto max-w-7xl'>
          <div className='flex flex-row justify-around md:justify-start md:space-x-6 md:pl-10'>
            {[...(Array(3) as number[])].map((_, idx) => (
              <button
                key={idx}
                className='rounded-2xl bg-redd py-1 px-6 text-white md:px-12'
                onClick={onChange(idx)}
              >
                Details {idx + 1}
              </button>
            ))}
          </div>
          <div className='pt-6'>{contents[tab]}</div>
        </div>
      </section>
    </Layout>
  );
};
export default Landing;
