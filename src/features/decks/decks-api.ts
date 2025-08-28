import axios from 'axios'

type DecksType = {
  "items": [
    {
      "isFavorite": true,
      "author": {
        "id": "string",
        "name": "string"
      },
      "id": "string",
      "userId": "string",
      "name": "string",
      "isPrivate": true,
      "cover": "string",
      "created": "2025-08-28T12:03:05.200Z",
      "updated": "2025-08-28T12:03:05.200Z",
      "cardsCount": 0
    }
  ],
  "pagination": {
    "currentPage": 0,
    "itemsPerPage": 0,
    "totalPages": 0,
    "totalItems": 0
  }
}

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks() {
    return instance.get<DecksType>("/v2/decks")
  },
}
