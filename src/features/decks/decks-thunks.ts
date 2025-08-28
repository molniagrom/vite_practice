import { CreateDeckParams, decksApi } from './decks-api.ts'
import { createDeckAC, setDeckAC } from './decks-reducer.ts'
import { Dispatch } from 'redux'

export const fetchDecksThunk = () => async (dispatch: Dispatch) => {
  const res = await decksApi.getDecks()
  dispatch(setDeckAC(res.data.items))
}
export const createDecksThunk = (params: CreateDeckParams) => async (dispatch: Dispatch) => {
  const res = await decksApi.createDeck({ name: params.name })
  dispatch(createDeckAC(res.data))
}