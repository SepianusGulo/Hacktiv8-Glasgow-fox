function vocalSeeker(board,vocal1,vocal2,vocal3) {
  let output = []
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      let currentElement = board[i][j]
      let sameVocal = false
      for(let k = 0; k < currentElement.length; k++){
        if(currentElement[k] === vocal1 || currentElement[k] === vocal2 || currentElement[k] === vocal3){
          sameVocal = true
        }
      }
      if(sameVocal === true){
        output.push(currentElement)
      }
    }
  }
  return output = `vokal ditemukan ${output} dan kumpulan vokal adalah aAo`
}
  
  //DRIVER CODE
  
  let board = [
    ['*', '*', '*', 10],
    ['*', '*', -5, -10, '*', 100],
    ['a', 'A', 'o', 'b']
  ]
  
  console.log(vocalSeeker(board,'a','A','o')); // vokal ditemukan 3 dan kumpulan vokal adalah aAo