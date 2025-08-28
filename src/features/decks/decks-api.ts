import axios from 'axios'

// Тип для автора колоды
export type AuthorType = {
  id: string
  name: string
}

// Тип для одной колоды
export type DeckType = {
  isFavorite: boolean
  author: AuthorType
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string // Можно поменять на Date, если будешь использовать объекты даты
  updated: string
  cardsCount: number
}

// Тип для пагинации
export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

// Основной тип для ответа с колодами
export type DecksType = {
  items: DeckType[]
  pagination: PaginationType
}

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks() {
    return instance.get<DecksType>('/v2/decks')
  },
}
