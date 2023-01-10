import clsx from 'clsx';
import React from 'react';
import { Footer, Header } from '~/components';

export const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  const [darkToggle, setDarkToggle] = React.useState(false);

  const changeTheme = () => {
    setDarkToggle((e) => !e);
  };
  return (
    <div className={clsx(darkToggle && 'dark')}>
      <div className={clsx('bg-white text-gray-700 dark:bg-zinc-900 dark:text-neutral-300')}>
        <Header changeTheme={changeTheme} />
        {children}
        <Footer />
      </div>
    </div>
  );
};
