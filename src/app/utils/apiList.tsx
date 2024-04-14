import { gameDetector } from './gameDetector'

export const getCharacterList = async (name: string, elements?: any, paths?: any) => {
  let gameId = gameDetector(name)
  const response = await fetch(`http://127.0.0.1:8000/api/characters?game_id=${gameId}&elements=${elements ?? ''}&paths=${paths ?? ''}`, { cache: 'no-store' })

  return response.json()
}

export const getElementList = async (name: string) => {
  let gameId = gameDetector(name)
  const response = await fetch(`http://127.0.0.1:8000/api/elements?game_id=${gameId}`, { cache: 'no-store' })

  return response.json()
}

export const getPathList = async () => {
  const response = await fetch('http://127.0.0.1:8000/api/paths', { cache: 'no-store' })
  return response.json()
}