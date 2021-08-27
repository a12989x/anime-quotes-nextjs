import MoonIcon from '@/public/svg/moon.svg';
import SunIcon from '@/public/svg/sun.svg';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const ToggleThemeButton = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light' || resolvedTheme === 'light') setTheme('dark');
    else if (theme === 'dark' || resolvedTheme === 'dark') setTheme('light');

    const css = document.createElement('style');
    css.type = 'text/css';
    css.appendChild(
      document.createTextNode(
        `* {
          -webkit-transition: none !important;
          -moz-transition: none !important;
          -o-transition: none !important;
          -ms-transition: none !important;
          transition: none !important;
        }`
      )
    );
    document.head.appendChild(css);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = window.getComputedStyle(css).opacity;
    document.head.removeChild(css);
  };

  return (
    <button className='button toggleThemeButton' onClick={toggleTheme}>
      {theme === 'light' || resolvedTheme === 'light' ? (
        <Image src={MoonIcon} alt='moon icon' />
      ) : (
        <Image src={SunIcon} alt='sun icon' />
      )}
    </button>
  );
};

export default ToggleThemeButton;
