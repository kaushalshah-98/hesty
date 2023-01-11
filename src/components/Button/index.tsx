import clsx from 'clsx';

export const Button = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithRef<'button'>) => {
  return (
    <button
      {...props}
      className={clsx('max-w-fit rounded-md bg-redd py-2 px-4 text-lg text-white', className)}
    >
      {children}
    </button>
  );
};
