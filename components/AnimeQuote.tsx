import { useContext } from 'react';
import { QuoteContext } from '../context/QuoteContext';

const AnimeQuote = () => {
  const { quoteState } = useContext(QuoteContext);

  return (
    <main className='animeQuote'>
      <i className='animeQuote__quote'>{`"${quoteState.quote}"`}</i>
      <hr />
      <p className='animeQuote__from'>
        {quoteState.character} - {quoteState.anime}
      </p>
    </main>
  );
};

export default AnimeQuote;
