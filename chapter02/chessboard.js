let boardSize = 8;
for(let i = 0; i < boardSize; i++) {
    let row = '';
    for (let j = 0; j < boardSize; j++) {
        if ((i + j) % 2 == 0) {
            row += '#';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}