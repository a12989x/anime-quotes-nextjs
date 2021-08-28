import { IQuote } from '../../types';
import { QuoteActionsType, UPDATE_QUOTE } from '../actions/quoteActions';

export const initialState: IQuote = {
  quote:
    "Life is a succession of committing sin. Life is evil itself. I'm conscious that I'm evil. And so are all of you.",
  anime: 'Tokyo Ghoul √A',
  character: 'Yoshimura',
};

const quoteReducer = (store: IQuote, action: QuoteActionsType) => {
  switch (action.type) {
    case UPDATE_QUOTE: {
      const newQuote = action.payload;

      return newQuote;
    }

    default:
      return store;
  }
};

export default quoteReducer;
