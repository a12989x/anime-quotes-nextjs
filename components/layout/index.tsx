import { FC, ReactNode } from 'react';
import Footer from './Footer';
import ToggleThemeButton from './ToggleThemeButton';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <ToggleThemeButton />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
