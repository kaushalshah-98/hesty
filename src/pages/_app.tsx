import { showBreakpoint } from '~/config';
import type { AppProps } from 'next/app';
import '~/styles';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      {showBreakpoint && (
        <div
          className='fixed bottom-0 right-0 flex h-8 w-8 items-center justify-center border bg-neutral-50 p-6 font-bold opacity-75'
          style={{ zIndex: 1000 }}
        >
          <div className='block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'>XS</div>
          <div className='hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden'>SM</div>
          <div className='hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden'>MD</div>
          <div className='hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden'>LG</div>
          <div className='hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden'>XL</div>
          <div className='hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block'>2XL</div>
        </div>
      )}

      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
