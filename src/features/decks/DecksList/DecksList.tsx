import s from './DecksList.module.css'
import { DeckType } from '../decks-api.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDecks } from './useFetchDecks.ts'

export const DecksList = () => {
  const { decks } = useFetchDecks()

  return (
    <ul className={s.list}>
      {decks.map((deck: DeckType) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
    </ul>
  )
}
