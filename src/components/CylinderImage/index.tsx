export const CylinderImage = ({ src, className, ...props }: React.ComponentPropsWithRef<'img'>) => {
  return (
    <img
      {...props}
      alt='image'
      src={src}
      className={
        className ?? 'h-auto w-full justify-end rounded-t-full sm:w-[60%] lg:w-[60%] xl:w-[75%]'
      }
    />
  );
};
