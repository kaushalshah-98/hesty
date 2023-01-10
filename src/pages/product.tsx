import {
  BellIcon,
  ChevronDownIcon,
  UserIcon,
  WalletIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  EllipsisHorizontalIcon,
  ArrowUpIcon,
  SquaresPlusIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import cx from 'clsx';

const Header = () => {
  const menus = [
    { name: 'Personal Data', href: '#', icon: UserIcon, current: true },
    { name: 'Wallet', href: '#', icon: WalletIcon, current: false },
    { name: 'Investments', href: '#', icon: HomeIcon, current: false },
    { name: 'Transactions', href: '#', icon: ChartBarIcon, current: false },
    { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
    { name: 'Logout', href: '#', icon: SquaresPlusIcon, current: false },
  ];

  return (
    <>
      <div
        className={cx(
          'absolute z-0 block h-full w-full bg-cover bg-center bg-no-repeat opacity-30',
          'bg-[url("https://img.freepik.com/free-vector/watercolor-nature-background-with-leaves_52683-59449.jpg?w=2000")]'
        )}
      ></div>
      <div className='absolute flex h-screen w-screen flex-col items-center lg:bg-transparent'>
        <nav className='sticky top-0 flex h-[64px] w-full flex-row items-center justify-between space-x-6 bg-transparent px-8 py-2 lg:px-10'>
          <span className='font-medium text-green-700'>Hesty</span>
          <div className='flex flex-row items-center'>
            <span className='mr-3 text-lg font-medium text-text-600'>EN</span>
            <span className='mr-8 text-lg text-text-400'>PT</span>

            <button className='flex rounded-full border border-text-100 bg-white p-1.5 lg:mr-4'>
              <BellIcon className='h-4 w-4 text-text-300' />
            </button>
            <button
              className='mr-4 hidden rounded-3xl border border-transparent bg-emerald-400  py-1.5 px-8 text-sm font-medium text-emerald-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 hover:bg-green-500 lg:flex lg:text-md'
              type='submit'
            >
              Signup
            </button>

            <div className='hidden items-center space-x-2 rounded-3xl border border-text-200 bg-white py-1 px-2 lg:flex'>
              <img
                alt=''
                className='inline-block h-6 w-6 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
              <span className='text-sm text-text-500 lg:text-md'>Alfred Santos</span>
              <ChevronDownIcon className='h-4 w-4 text-green-500' />
            </div>
          </div>
        </nav>

        <div className='flex w-full flex-col px-10 py-8'>
          <div className='flex flex-col space-y-2'>
            <div className='flex flex-row items-center space-x-2'>
              <span className='text-4xl text-green-400 lg:text-[3.5rem]'> Hello</span>
              <img
                alt=''
                className='inline-block h-12 w-auto rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
              <span className='text-4xl font-medium text-green-800 lg:text-[3.5rem]'>Alfredo</span>
            </div>

            <span className='text-md lg:text-lg'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </span>
          </div>

          <div className='flex w-full flex-col pt-4 lg:flex-row lg:space-x-16 lg:pt-12 xl:space-x-0'>
            <div className='flex w-full pt-6 lg:w-[20%]'>
              <div className='flex flex-col space-y-1 lg:space-y-6'>
                {menus.map((menu) => (
                  <div
                    key={menu.name}
                    className='group flex cursor-pointer flex-row items-center space-x-4 border-l-4 border-transparent py-2 transition-all delay-100 ease-in-out hover:border-l-green-700 hover:text-green-700 lg:py-3.5'
                  >
                    <menu.icon
                      aria-hidden='true'
                      className={cx(
                        'ml-4 h-6 w-6 text-text-600 transition-all delay-100 ease-in-out group-hover:text-green-600 lg:h-7 lg:w-7'
                      )}
                    />
                    <span className='text-lg text-text-700 transition-all delay-100 ease-in-out group-hover:text-green-700 lg:text-xl'>
                      {menu.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-full pt-5 lg:w-[80%] lg:pt-0'>
              <div className='grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
                {[...Array(3).keys()].map((_, idx) => (
                  <div
                    key={idx}
                    className='flex h-full flex-col space-y-5 rounded-xl bg-white bg-clip-padding p-6'
                    style={{
                      boxShadow: '0px 8px 24px #282A3A26',
                    }}
                  >
                    <div className='flex flex-row justify-between'>
                      <span className='text-xl font-medium text-teal-800 lg:text-2xl'>
                        Total Invested
                      </span>
                      <EllipsisHorizontalIcon className='h-8 w-8 text-teal-500' />
                    </div>

                    <div className='flex flex-col justify-between'>
                      <span className='text-lg font-medium text-teal-800'>Invested</span>
                      <div className='flex flex-row items-center space-x-3'>
                        <span className='text-4xl font-medium text-teal-500'>€</span>
                        <span className='text-xl font-medium text-teal-800 lg:text-2xl'>
                          12053.27841
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <br />

              <div
                className='sticky flex flex-col space-y-8 rounded-xl bg-white p-6 pr-6'
                style={{
                  boxShadow: '0px 8px 24px #282A3A26',
                }}
              >
                <div className='flex flex-row items-center justify-between'>
                  <span className='text-xl font-medium text-teal-800 lg:text-2xl'>Investments</span>
                  <div className='flex flex-row items-center justify-between space-x-3'>
                    <span className='text-md font-medium text-teal-500 lg:text-lg'>Claim all</span>
                    <EllipsisHorizontalIcon className='h-8 w-8 text-teal-500' />
                  </div>
                </div>
                <div className='grid max-h-[calc(100vh-150px)] grid-cols-1 gap-x-10 gap-y-4 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent sm:grid-cols-2 lg:max-h-[calc(100vh-650px)] lg:grid-cols-1'>
                  {[...Array(8).keys()].map((_, idx) => (
                    <div
                      key={idx}
                      className='flex w-full flex-col items-center space-y-3 rounded-xl bg-gray-50 shadow-sm lg:flex-row lg:space-y-0'
                    >
                      <div className='w-full lg:w-[18%]'>
                        <img
                          alt=''
                          className='h-auto w-fit rounded-t-xl lg:rounded-l-xl'
                          src='https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        />
                      </div>
                      <div className='flex w-full flex-row items-end justify-between px-3 py-3 lg:w-[82%] lg:py-2 lg:px-6'>
                        <div className='flex w-full flex-col justify-between space-y-5'>
                          <div className='flex flex-row items-start justify-between'>
                            <div className='flex flex-col'>
                              <span className='text-lg font-medium text-teal-800'>
                                Loresm Ipsum Apt
                              </span>
                              <span className='text-sm text-text-200 lg:text-md'>
                                Porto Portugal
                              </span>
                            </div>
                            <div className='flex flex-row items-center space-x-1'>
                              <ArrowUpIcon className='h-4 w-4 text-teal-500' />
                              <span className='items-center text-xl font-medium text-teal-500'>
                                1.2 %
                              </span>
                            </div>
                          </div>
                          <div className='flex flex-col items-start justify-between space-y-4 lg:flex-row lg:items-center lg:space-y-0'>
                            <div className='flex flex-col justify-between '>
                              <span className='text-sm font-medium text-teal-800 lg:text-md'>
                                Tokens
                              </span>
                              <div className='flex flex-row items-center space-x-2'>
                                <span className='text-sm font-medium text-teal-500 lg:text-md'>
                                  234
                                </span>
                                <span className='text-sm text-text-200 lg:text-md'>
                                  of 2345 (10.32%)
                                </span>
                              </div>
                            </div>
                            <div className='flex flex-col justify-between'>
                              <span className='text-sm font-medium text-teal-800 lg:text-md'>
                                Claimable Rent Amount
                              </span>
                              <div className='flex flex-row items-center space-x-2'>
                                <span className='text-sm font-medium text-teal-500 lg:text-md'>
                                  €
                                </span>
                                <span className='text-sm font-medium text-teal-500 lg:text-md'>
                                  123.46
                                </span>
                              </div>
                            </div>
                            <div>
                              <div className='flex flex-col justify-between'>
                                <span className='text-sm font-medium text-teal-800 lg:text-md'>
                                  Total Claimed
                                </span>
                                <div className='flex flex-row items-center space-x-2'>
                                  <span className='text-sm font-medium text-teal-500 lg:text-md'>
                                    €
                                  </span>
                                  <span className='text-sm font-medium text-teal-500 lg:text-md'>
                                    234
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <button
                                className='mr-4 flex rounded-3xl border border-transparent  bg-emerald-400 py-1.5 px-8 text-sm font-medium text-emerald-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 hover:bg-green-500 lg:text-md'
                                type='submit'
                              >
                                Claim
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
