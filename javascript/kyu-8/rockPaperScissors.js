const rps = (p1, p2) => {

  /* 
    basic rock paper scissors setup using chained conditionals

    checks for all player 1 win conditions and returns 'P2 Won' if none evaluate to true
   */

  if (p1 === 'scissors' && p2 === 'paper') {

    return 'Player 1 won!'

  } else if (p1 === 'paper' && p2 === 'rock') {

    return 'Player 1 won!'

  } else if (p1 === 'rock' && p2 === 'scissors') {

    return 'Player 1 won!'

  } else if (p1 === p2) {

    return 'Draw!'

  } else {

    return 'Player 2 won!'

  }

};