import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksApi } from '../decks-api.ts'

export const DecksList = () => {

  useEffect(() => {
    const res = decksApi.getDecks()
    console.log(res)
  }, [])

  return <ul className={s.list}></ul>
}
