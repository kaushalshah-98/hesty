export const CylinderImage = ({ image, className }: { className?: string; image: string }) => {
  return (
    <img
      alt='image'
      src={image}
      className={
        className ?? 'h-auto w-full justify-end rounded-t-full sm:w-[60%] lg:w-[60%] xl:w-[75%]'
      }
    />
  );
};
