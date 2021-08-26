const getQuote = async () => {
  try {
    const res = await fetch('https://animechan.vercel.app/api/random');
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error('Quote error');
  }
};

export default getQuote;
