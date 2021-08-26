import { createContext, Dispatch, FC, ReactNode, useReducer } from 'react';
import { QuoteActionsType } from '../store/actions/quoteActions';
import quoteReducer, { initialState } from '../store/reducers/quoteReducer';
import { IQuote } from '../types';

interface IContext {
  quoteState: IQuote;
  quoteDispatch: Dispatch<QuoteActionsType>;
}

export const QuoteContext = createContext<IContext>({
  quoteState: initialState,
  quoteDispatch: () => null,
});

const QuoteContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [quoteState, quoteDispatch] = useReducer(
    quoteReducer,
    initialState,
    () => ({
      quote: 'Anime Quote Init',
      anime: 'Anime Anime Init',
      character: 'Anime Character Init',
    })
  );

  return (
    <QuoteContext.Provider value={{ quoteState, quoteDispatch }}>
      {children}
    </QuoteContext.Provider>
  );
};

export default QuoteContextProvider;
