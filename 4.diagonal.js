function diagonal(matrix){
    let sum = 0;
    let subs = 0;

    for (let i = 0; i < matrix.length ; i++){
        sum += matrix[i][i]
        subs += matrix[i][matrix.length - 1 - i]
    }
    
    const result = sum - subs
    const results = 'maka hasilnya adalah ' + sum + ' - '+ subs + ' = ' + result
    return results;
}

const Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
const result = diagonal(Matrix);
console.log(result);