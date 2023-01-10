/* eslint-disable react/no-unescaped-entities */
export const Detail = () => {
  return (
    <section className='md:mt-20 lg:mt-32'>
      <div className='container mx-auto max-w-7xl px-10'>
        <div className='flex flex-col'>
          <div className='flex flex-col items-center justify-between space-y-20 sm:space-y-0 md:flex-row'>
            <div className='2xl:[w-40%] mt-20 flex flex-col space-y-4 sm:mt-28 md:mt-6 md:w-[60%] lg:w-[50%]'>
              <img alt='scribble' className='h-auto w-20' src='/scribble.svg' />
              <span className='text-5xl font-bold text-gray-900 md:text-3xl lg:text-4xl'>
                Lorem ipsum
              </span>
              <span className='text-2xl font-bold text-redd md:text-2xl lg:text-2xl'>
                Lorem ipsum dolor sit amet
              </span>
              <span className='text-[13px] font-light text-gray-800'>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident, sometimes on purpose
                (injected humour and the like).
              </span>
              <span className='text-[13px] font-light text-gray-800'>
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words which
                don't look even slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks as necessary, making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from repetition, injected humour, or
                non-characteristic words etc.
              </span>
              <span className='text-[13px] font-light text-gray-800'>
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words which
                don't look even slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks as necessary, making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of model sentence
                structures.
              </span>
            </div>

            <div className='flex flex-col sm:items-center md:w-[50%] md:items-end lg:w-[50%]'>
              <img
                alt='image'
                className='h-auto w-full justify-end rounded-t-full sm:w-[60%] lg:w-[80%] 2xl:w-[80%]'
                src='/image 50.jpg'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
