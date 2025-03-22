
let cells=document.querySelectorAll('#field td')
        let modal=document.querySelector('#modal')
//значение  this - это обьект <перед точкой> которой используется для вызова метода.
function start(cells){
    //Счетчик ходов
    let i=0
for(let cell of cells){
    cell.addEventListener('click', function step(){
        if(i % 2==0){
              this.textContent='❌'
        }else{
              this.textContent='◯'
        }
        //Удалить обработку клика чтобы крестик не менялся  на нолик в этой же ячейкею
      this.removeEventListener('click',step)
        // увеличить счетчик на
        i++;
        if(isWinner(cells)){
            modal.textContent=`победил${this.textContent}`;
        }  else if('!') {
           modal.this.removeEventListener('click',step)='none'
        }
            
        

    })
}

}
0,1,2
3,4,5
6,7,8,
0,3 ,6
1,4,7


function isWinner(cells){
let comds=[

[0,1,2],
[3,4,5],
[6,7,8,],
[0,3 ,6],
[ 1,4,7  ],
[2,5,8],
[0,4,8],
[2,4,6]

]
  for(let comb of comds){
    //cells все элементы сomb одна я чейка передть номер
   // По очереди в цикле ппроверяются все возможные комбинаци  и в результате если  есть
    if(cells[comb[0]].textContent == cells[comb[1]].textContent &&
        cells[comb[1]].textContent == cells[comb[2]].textContent &&
    cells[comb[0]].textContent !='' ){
        return true
    }
  }
return false
}

start(cells)

//cells=[td0 td1 td2 td3 td4 td5 td6 td7 td8  ]
//combs =[0,1,2]