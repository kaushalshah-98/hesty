export const Benefit = ({ image }: { image: string }) => {
  return (
    <div className='flex flex-col items-center space-y-2 sm:max-w-[13rem]'>
      <img alt='' className='h-10 w-10 sm:h-16 sm:w-16' src={`/Benefits/${image}.svg`} />
      <span className='text-lg sm:pt-8'>Lorem Ipsum</span>
      <span className='text-center text-xs leading-8'>
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form.
      </span>
    </div>
  );
};
