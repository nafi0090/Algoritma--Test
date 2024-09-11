function reverse(data){
    let letters = '';
    let digits = '';
    
    for (let char of data){
        if (/[a-zA-Z]/.test(char)){
            letters += char;
        } else if (/[0-9]/.test(char)){
            digits += char;
        }
    }
    
    let reserve = letters.split('').reverse().join('');
    
    let result = reserve + digits;
    
    return result;
}

let data = "NEGIE1";
let result = reverse(data);
console.log(result);