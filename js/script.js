console.log('connected')

var boxes =  document.getElementsByClassName('box')

var turn = 0

for (var i = 0; i< boxes.length; i++)
  boxes[i].addEventListener('click',function(){
    if (this.innerHTML === ''){
    this.innerHTML = changePlayer()
    winner(this.innerHTML)
  }
})

document.getElementById('resetBoard').addEventListener('click', function(){
  for (var i = 0; i< boxes.length; i++){

      boxes[i].innerHTML = ''
  }
})

function changePlayer(){
  if (turn %2 === 0) {
    return 'X'
  } else {
    return 'O'
  }
}


var winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

    function winner(mark){
      for (var i =0; i < winningCombos.length; i++){
        if(boxes[winningCombos[i][0]].innerHTML=== mark && boxes [winningCombos[i][1]].innerHTML === mark && boxes[winningCombos[i][2]].innerHTML===mark){
          console.log(mark + ' wins!')
          alert(mark + ' wins!')
        }
      }
    }
