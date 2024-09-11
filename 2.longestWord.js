function longest(data){
    const sentence = data.split(" ");
    let longest_word = '';
    let amount_word = '';

    for (let i = 0; i < sentence.length ; i++){
        if ( sentence[i].length > longest_word.length){
            longest_word = sentence[i];
            amount_word = sentence[i].length
        }
    }
    
    const result = longest_word + ': ' + amount_word + ' character'
    
    return result;
}

const data = "Saya sangat senang mengerjakan soal algoritma";
const result = longest(data);
console.log(result);