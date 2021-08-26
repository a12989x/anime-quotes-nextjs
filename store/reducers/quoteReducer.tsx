import { IQuote } from '../../types';
import { QuoteActionsType, UPDATE_QUOTE } from '../actions/quoteActions';

export const initialState: IQuote = { quote: '', anime: '', character: '' };

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
