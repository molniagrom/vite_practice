import { decksApi, DeckType } from './decks-api.ts'
import { createDeckAC, setDeckAC } from './decks-reducer.ts'
import { Dispatch } from 'redux'

export const fetchDecksThunk = () => async (dispatch: Dispatch) => {
  const res = await decksApi.getDecks()
  dispatch(setDeckAC(res.data.items))
}
export const createDecksThunk = (name: DeckType['name']) => async (dispatch: Dispatch) => {
  const res = await decksApi.createDeck(name)
  dispatch(createDeckAC(res.data.name))
}