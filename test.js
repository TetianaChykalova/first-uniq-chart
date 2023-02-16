const test = 'The Tao gave birth to machine language.  Machine language gave birth to the assembler. The assembler gave birth to the compiler.  Now there are ten thousand languages. Each language has its purpose, however humble.  Each language expresses the Yin and Yang of software.  Each language has its place within the Tao. But do not program in COBOL if you can avoid it.  -- Geoffrey James, "The Tao of Programming"'

function uniqChartInWord(w) {
    let res = {}

    for (let i = 0; i < w.length; i++) {
        !res[w[i]] ? res[w[i]] = 1 : res[w[i]]++
    }

    for (let k of Object.keys(res)) {
        if (res[k] === 1) {
            return k
        }
    }
}

function uniqChartInStr(str) {
    let testArr = str.split(' ');
    let resArr = testArr.map(word => uniqChartInWord(word)).join('')
    let result = uniqChartInWord(resArr)
    return result;
}

console.log(uniqChartInStr(test))