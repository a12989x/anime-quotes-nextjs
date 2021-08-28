import { QuoteContext } from '@/context/QuoteContext';
import getQuote from '@/lib/getQuote';
import RefreshDarkIcon from '@/public/svg/refresh-dark.svg';
import RefreshLightIcon from '@/public/svg/refresh-light.svg';
import { UPDATE_QUOTE } from '@/store/actions/quoteActions';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useContext } from 'react';

const RefreshButton = () => {
  const { quoteDispatch } = useContext(QuoteContext);
  const { theme, resolvedTheme } = useTheme();

  const handleClick = async () => {
    try {
      const newQuote = await getQuote();
      quoteDispatch({ type: UPDATE_QUOTE, payload: newQuote });
    } catch (err) {
      throw new Error('Cant Get New Quote');
    }
  };

  return (
    <button className='button reloadButton' onClick={handleClick}>
      {theme === 'light' || resolvedTheme === 'light' ? (
        <Image src={RefreshLightIcon} alt='refresh icon' />
      ) : (
        <Image src={RefreshDarkIcon} alt='refresh icon' />
      )}
    </button>
  );
};

export default RefreshButton;
