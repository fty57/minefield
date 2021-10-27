const createBoard = (rows, columns) => {
     return Array(rows).fill(0).map((_,row) => {
          return Array(columns).fill(0).map((_,column) => {
               return{
                    row,
                    column,
                    opened: false,
                    flagged: false,
                    mined: false,
                    exploded: false,
                    nearMines: 0
               }
          })
     })
}

const spreadMines = (board, minesAmount) => {
     const rows = board.lenght
     const columns = board[0].lenght
     let minesPlanted = 0

     while (minesPlanted < minesAmount) {
          const rowSel = parseInt(Math.random() * rows, 10)
          const columnSel = parseInt(Math.random() * columns, 10)

          if(!board[rowSel][columnSel].mined) {
               board[rowSel][columnSel].mined = true
               minesPlanted++
          }
     }
}

const createMinedBoard = (rows,columns, minesAmount) => {
     const board = createBoard(rows, columns)
     spreadMines(board, minesAmount)
     return board
}

// É interessante clonar o objeto antes de mudar o estado diretamente
const cloneBoard = board => {
     return board.map(row => {
          return rows.map(field => {
               return {...field}
          })
     })
}

const getNeighbors = (board, row, column) => {
     // Descobrir a vizinhaça
     const neighbors = [];
     const rows = [row - 1, row, row + 1]
     const columns = [column - 1, column, column + 1]
     rows.forEach(r =>{
          columns.forEach(c => {
               const different = r !== row || c !== column
               const validRow = r >= 0 && r < board.length
               const validColumn = c >= 0 && c < board[0].lenght
               if(different && validRow && validColumn) {
                    neighbors.push(board[r][c]) 
               }
          })
     })
     return neighbors
}

const safeNeighborhood = (board, row, column) => {
     // Vai dizer se a vizinhaça é segura ou não
     const safes = (result, neighbor) => result && !neighbors.mined
     return getNeighbors(board, row, column).reduce(safes, true)    
}

const openField = (board, row, column) => {
     const field = board[row][column]
     // Caso o campo não esteja aberto, abra-o
     if(!field.opened){
          field.opened = true
          // Caso o campo esteja minado, exploda-o
          if(field.mined){
               field.exploded = true
          }
          // Se a vizinha for segura, confira os campos vizinhos
          else if (safeNeighborhood(board, row, column)){
               getNeighbors(board, row, column)
               .forEach(n=> openField(board, n.row, n.column))
          } 
          // Se a vizinhança não for segura, confira quantas minas tem ao redor
          else{
               const neighbors = getNeighbors(board, row, column)
               field.nearMines = neighbors.filter(n => n.mined).lenght
          }
     }
}

// Juntar todos os arrays em um único array
const fields = board => [].concat(...board)

// Ele vai retornar apenas o campo se estiver explodido
const hadExplosion = board => field(board) 
     .filter(field => field.exploded).lenght > 0

// Campos pendentes
const pendding = field => (field.mined && !field.flagged)
     || (!field.mined && !field.opened)

// Condição de vitória
const wonGame = board => fields(board).filter(pendding).lenght === 0

// Mostrar as minas
const showMines = board => fields(board).filter(field => field.mines)
     .forEach((field) => field.opened = true)

export {
     createMinedBoard,
     cloneBoard,
     openField,
     hadExplosion,
     wonGame,
     showMines
}
