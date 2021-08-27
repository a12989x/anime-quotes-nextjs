import { QuoteContext } from '@/context/QuoteContext';
import RefreshIcon from '@/public/svg/refresh.svg';
import { UPDATE_QUOTE } from '@/store/actions/quoteActions';
import Image from 'next/image';
import { useContext } from 'react';

const ReloadButton = () => {
  const { quoteDispatch } = useContext(QuoteContext);

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
      <Image src={RefreshIcon} alt='refresh icon' />
    </button>
  );
};

export default ReloadButton;
