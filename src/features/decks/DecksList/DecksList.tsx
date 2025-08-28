import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksApi, DeckType } from '../decks-api.ts'
import { setDeckAC } from '../decks-reducer.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector((state) => state.decksReducer.decks)

  useEffect(() => {
    const fetchDecks = async () => {
      const res = await decksApi.getDecks()
      dispatch(setDeckAC(res.data.items))
    }

    fetchDecks()
  }, [])

  return (
    <ul className={s.list}>
      {decks.map((deck: DeckType) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
    </ul>
  )
}
