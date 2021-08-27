import MoonIcon from '@/public/svg/moon.svg';
import Image from 'next/image';

const ToggleThemeButton = () => {
  return (
    <button className='button toggleThemeButton'>
      <Image src={MoonIcon} alt='moon icon' />
    </button>
  );
};

export default ToggleThemeButton;
