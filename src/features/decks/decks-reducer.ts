import { DeckType } from './decks-api.ts'

const initialState = {
  decks: [] as DeckType[],
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
    case 'CREATE_DECKS':
      return {
        ...state,
        decks: [
          {
            isFavorite: false,
            author: { id: '', name: '' },
            id: '',
            userId: '',
            name: action.payload.name,
            isPrivate: false,
            cover: '',
            created: '',
            updated: '',
            cardsCount: 0,
          },
          ...state.decks,
        ],
      }
    default:
      return state
  }
}

type DecksActions = ReturnType<typeof setDeckAC> | ReturnType<typeof createDeckAC>

export const setDeckAC = (decks: DeckType[]) =>
  ({
    type: 'SET_DECKS',
    payload: { decks },
  }) as const

export const createDeckAC = (name: DeckType['name']) =>
  ({
    type: 'CREATE_DECKS',
    payload: { name },
  }) as const
