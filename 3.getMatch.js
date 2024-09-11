function getMatch(input, query){
    let match_word = [];

    for (let i = 0; i < query.length ; i++){
        let matching_word = 0;
        for (let j = 0; j < input.length; j++){
            if (query[i] === input[j] ) {
                matching_word += 1;
            }
        }
        match_word.push(matching_word);
    }
    
    const result = 'OUTPUT = [' + match_word + ']';
    
    return result;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'] ; 
const QUERY = ['bbb', 'ac', 'dz'] ; 
const result = getMatch(INPUT, QUERY);
console.log(result);