function Game(boardString) {
  var generateRand = function() {
    var textBoard = [];
    var possible = [0, 2, 4];
    var count = 0;
    for (var i = 0; i < 16; i++) {
      c = possible[Math.floor(Math.random() * possible.length)];
      if (c == 2 || c == 4) {
        count ++;
        if (count <= 2) {
          textBoard.push(c);
        } else {
          textBoard.push(0);
        }
      } else {
        textBoard.push(c);
      }
    }

    var shuffled = textBoard.sort(function() { return 0.5-Math.random()});
    return shuffled;
  };

  this.boardString = boardString || generateRand();

}

Game.prototype.toString = function() {
  board = "";

  var arr = this.boardString.split('');

  for(var i = 0; i < arr.length; i++) {
    if(arr[i] == '0'){
      arr[i] = "";
    }
  }

  return arr;

};

Game.prototype.toWhitespace = function() {

  var arr = this.boardString.split('');

  for(var i = 0; i < arr.length; i++) {
    if(arr[i] == '0'){
      arr[i] = "";
    }
  }

  return arr;
}

function splitBoard(t) {

  boardRows = [];

  boardRows.push(t.slice(0, 4));
  boardRows.push(t.slice(4, 8));
  boardRows.push(t.slice(8, 12));
  boardRows.push(t.slice(12, 16));

  return boardRows;
}

function transpose(rows, arrayLength){

    var boardColumns = [[],[],[],[]];

    for(var i = 0; i < rows.length; i++){
        for(var j = 0; j < arrayLength; j++){
            boardColumns[j].push(rows[i][j]);
        }
    }

    return(boardColumns);
}

function generateRandNum() {
  return Math.floor((Math.random() * 3));
}

function removeZeros(boardArray) {
  var removed = []

      for(var i = 0; i < boardArray.length; i++) {
        var arr = [];
        for(var j = 0; j < boardArray[i].length; j++) {
          if (boardArray[i][j] != 0) {
            arr.push(boardArray[i][j]);
          }
        }
        removed.push(arr);
      }

  return removed;
}

Game.prototype.move = function(direction) {
  switch(direction) {
    case "up":
      
      var columns = transpose(splitBoard(this.boardString), 4);

      columns = removeZeros(columns);

      for(var col_index = 0; col_index < columns.length; col_index++) {
        for(var r = 0; r < columns[col_index].length; r++) {
          if (columns[col_index][r] == columns[col_index][r+1]){
            columns[col_index][r] = parseInt(columns[col_index][r], 10) + parseInt(columns[col_index][r+1], 10);
            columns[col_index][r] = columns[col_index][r];
            columns[col_index].splice(r+1, 1);
          }
        }

        while(columns[col_index].length < 4) {
          columns[col_index].push(0);
        }
      }

      columns = transpose(columns, 4);

      do {
        x = generateRandNum();

        y = generateRandNum();
      } while (columns[x][y] != 0);

      var possible = [2,4];

      c = possible[Math.floor(Math.random() * possible.length)];

      columns[x][y] = c;

      var newArr = [];

      for(var i = 0; i < columns.length; i++) {
        newArr = newArr.concat(columns[i]);
      }

      this.boardString = newArr;

      return this.boardString;

      break;

    case "down":

      var columns = splitBoard(this.boardString);

      columns = transpose(columns, 4);

      for(var i = 0; i < columns.length; i++) {
        columns[i] = columns[i].reverse();
      }

      columns = removeZeros(columns);

      for(var col_index = 0; col_index < columns.length; col_index++) {
        for(var r = 0; r < columns[col_index].length; r++) {
          if (columns[col_index][r] == columns[col_index][r+1]){
            columns[col_index][r] = parseInt(columns[col_index][r], 10) + parseInt(columns[col_index][r+1], 10);
            columns[col_index][r] = columns[col_index][r];
            columns[col_index].splice(r+1, 1);
        }
      }
      while(columns[col_index].length < 4) {
          columns[col_index].push(0);
      }
    }

      for(var i = 0; i < columns.length; i++) {
        columns[i] = columns[i].reverse();
      }

      columns = transpose(columns, 4);

      do {
        x = generateRandNum();

        y = generateRandNum();
      } while (columns[x][y] != 0);

      var possible = [2,4];

      c = possible[Math.floor(Math.random() * possible.length)];

      columns[x][y] = c;

      var newArr = [];

      for(var i = 0; i < columns.length; i++) {
        newArr = newArr.concat(columns[i]);
      }

      this.boardString = newArr;

      return this.boardString;

    break;

    case "right":

    var columns = splitBoard(this.boardString);

    for(var i = 0; i < columns.length; i++) {
        columns[i] = columns[i].reverse();
      }

    columns = removeZeros(columns);

    for(var col_index = 0; col_index < columns.length; col_index++) {
      for(var r = 0; r < columns[col_index].length; r++) {
        if (columns[col_index][r] == columns[col_index][r+1]){
          columns[col_index][r] = parseInt(columns[col_index][r], 10) + parseInt(columns[col_index][r+1], 10);
          columns[col_index][r] = columns[col_index][r];
          columns[col_index].splice(r+1, 1);
      }
      }
      while(columns[col_index].length < 4) {
          columns[col_index].push(0);
      }
    }

    for(var i = 0; i < columns.length; i++) {
      columns[i] = columns[i].reverse();
    }

    do {
        x = generateRandNum();

        y = generateRandNum();
      } while (columns[x][y] != 0);

      var possible = [2,4];

      c = possible[Math.floor(Math.random() * possible.length)];

      columns[x][y] = c;

      var newArr = [];

      for(var i = 0; i < columns.length; i++) {
        newArr = newArr.concat(columns[i]);
      }

      this.boardString = newArr;

      return this.boardString;
    break;

    case "left":
      var columns = splitBoard(this.boardString);

      columns = removeZeros(columns);

    for(var col_index = 0; col_index < columns.length; col_index++) {
      for(var r = 0; r < columns[col_index].length; r++) {
        if (columns[col_index][r] == columns[col_index][r+1]){
          columns[col_index][r] = parseInt(columns[col_index][r], 10) + parseInt(columns[col_index][r+1], 10);
          columns[col_index][r] = columns[col_index][r];
          columns[col_index].splice(r+1, 1);
      }
      }
      while(columns[col_index].length < 4) {
          columns[col_index].push(0);
      }
    }

    do {
        x = generateRandNum();

        y = generateRandNum();
      } while (columns[x][y] != 0);

      var possible = [2,4];

      c = possible[Math.floor(Math.random() * possible.length)];

      columns[x][y] = c;

      var newArr = [];

      for(var i = 0; i < columns.length; i++) {
        newArr = newArr.concat(columns[i]);
      }

      this.boardString = newArr;

      return this.boardString;

    break;
    }
}

Game.prototype.print = function() {

  var board = ""

  for(var i = 0; i < this.boardString.length; i++) {
    board += "|" + this.boardString[i].toString(); + "|";
    if ((i+1)%4 === 0) {
      board +='\n';
    }
  }

  console.log(board);
}