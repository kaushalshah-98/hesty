import clsx from 'clsx';

export const Heading = ({ children, className, ...props }: React.ComponentPropsWithRef<'span'>) => {
  return (
    <span {...props} className={clsx('text-4xl xl:text-5xl', className)}>
      {children}
    </span>
  );
};
