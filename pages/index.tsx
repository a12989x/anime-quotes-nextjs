import AnimeQuote from '@/components/AnimeQuote';
import ReloadButton from '@/components/ReloadButton';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <section className='home'>
      <ReloadButton />

      <AnimeQuote />
    </section>
  );
};

export default Home;
