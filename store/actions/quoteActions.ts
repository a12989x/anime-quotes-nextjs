import { IQuote } from '../../types';

export const UPDATE_QUOTE = 'UPDATE_QUOTE';

export type QuoteActionsType = { type: typeof UPDATE_QUOTE; payload: IQuote };
