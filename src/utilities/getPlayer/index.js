import { indexOf } from 'ramda'

export default function getPlayer (square, moves = []) {
  // indexOf function from Ramda give us the index of an item on the array
  // or -1 if the item isn't in the array, wchich in this case will return undefined
  // meaning the square has not been played(moved).
  const move = indexOf(square, moves)

  if (move < 0) {
    return undefined
  }

  return move % 2 === 0 ? 'x' : 'o'
}
