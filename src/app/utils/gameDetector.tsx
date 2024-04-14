import React from 'react'

export const gameDetector = (name: string) => {
  let gameId = 0
  switch (name) {
    case 'hi3':
      gameId = 1
      break;
    case 'hsr':
      gameId = 2
      break;
    case 'genshin':
      gameId = 3
    default:
      break;
  }
  return gameId
}