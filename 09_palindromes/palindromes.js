const palindromes = function (str) {
    let convWord=``;
    let reverse = '';
    for(let i=0; i<str.length; i++) {
        c = str[i];
        if(c == ' ') {
            continue;
        }
        if(isAlpha(c)) {
            c = c.toLowerCase();
            convWord +=c;
        }
        else if(isNumeric(c)) {
            convWord +=c;
        }
    }
    for(let i=convWord.length-1; i>=0; i--) {
        reverse += convWord[i];
    }
    return reverse === convWord;
};

function isAlpha(c) {
    return (('a'<=c) && (c<='z')) || (('A'<=c) && (c<='Z'));
}

function isNumeric(c) {
    return 0<=c && c<=9;
}

// Do not edit below this line
module.exports = palindromes;
