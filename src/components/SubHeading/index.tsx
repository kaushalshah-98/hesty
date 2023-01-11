import clsx from 'clsx';

export const SubHeading = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithRef<'span'>) => {
  return (
    <span {...props} className={clsx('text-xl uppercase text-redd', className)}>
      {children}
    </span>
  );
};
