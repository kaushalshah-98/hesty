import Link from 'next/link';

const Main = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='flex flex-row space-x-4'>
        <Link className='bg-teal-900 py-4 px-8 text-white' href='/page1'>
          Assignment task
        </Link>
        <Link className='bg-teal-900 py-4 px-8 text-white' href='/hesty/login'>
          Hesty task
        </Link>
      </div>
    </div>
  );
};

export default Main;
