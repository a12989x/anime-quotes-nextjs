import { QuoteContext } from '@/context/QuoteContext';
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
      const newQuote = {
        anime: 'Quote Anime New',
        character: 'Quote Character New',
        quote: 'Quote Quote New',
      };
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
