export const Button = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <button className='my-8 max-w-fit rounded-md bg-redd py-2 px-4 text-lg text-neutral-300 sm:hidden'>
      {children}
    </button>
  );
};
