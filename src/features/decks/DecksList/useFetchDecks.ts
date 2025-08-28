import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import { useEffect } from 'react'
import { fetchDecksThunk } from '../decks-thunks.ts'

export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)

  useEffect(() => {
    dispatch(fetchDecksThunk())
  }, [])

  return {
    decks
  }
}