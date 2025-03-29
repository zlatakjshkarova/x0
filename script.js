
let cells = document.querySelectorAll('#table td')
let modal = document.querySelector('#modal')
let btnreload = document.querySelector('#btnreload')



//Переменная для проверки


//значение  this - это обьект <перед точкой> которой используется для вызова метода.
function start(cells) {
  let gameover = false
  //Счетчик ходов
  let i = 0
  for (let cell of cells) {
    cell.addEventListener('click', function step() {
      //если игра окончена то выйти из функции
      if (gameover) {
        return;
      }

      if (i % 2 == 0) {
        this.textContent = '❌'
      } else {
        this.textContent = '◯'
      }
      //Удалить обработку клика чтобы крестик не менялся  на нолик в этой же ячейкею
      this.removeEventListener('click', step)
      // увеличить счетчик на


      if (isWinner(cells)) {
        modal.textContent = `победил${this.textContent}`;
        gameover = true;
        for (let cell of cells) {
          cell.removeEventListener('click', step)
        }
      } else if (i == 8) {
        modal.textContent = `ничья `

        gameover = 'true'
      }
      i++;
    })
  }

}
0, 1, 2
3, 4, 5
6, 7, 8,
  0, 3, 6
1, 4, 7


function isWinner(cells) {
  let comds = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8,],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

  ]
  for (let comb of comds) {
    //cells все элементы сomb одна я чейка передть номер
    // По очереди в цикле ппроверяются все возможные комбинаци  и в результате если  есть
    if (cells[comb[0]].textContent == cells[comb[1]].textContent &&
      cells[comb[1]].textContent == cells[comb[2]].textContent &&
      cells[comb[0]].textContent != '') {
      return true
    }
  }
  return false
}

start(cells)


btnreload.addEventListener('click', () => {
  //location.reload();

  for (let cell of cells) {
    console.log(cell)
    cell.textContent = ''

  }
  //Очистить поле 
  modal.textContent = ''
  start(cells)

})

//cells=[td0 td1 td2 td3 td4 td5 td6 td7 td8  ]
//combs =[0,1,2]