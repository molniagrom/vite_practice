import { DeckType } from './decks-api.ts'

const initialState = {
  decks: [] as DeckType[], // todo: add type
  searchParams: {
    name: '',
  },
}

export type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS':
      return {
        ...state,
        decks: action.payload.decks,
      }

    default:
      return state
  }
}

type DecksActions = ReturnType<typeof setDeckAC>

export const setDeckAC = (decks: DeckType[]) => ({ type: 'SET_DECKS', payload: { decks } })
