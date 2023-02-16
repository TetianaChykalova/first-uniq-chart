let input = document.querySelector('#input');
let resultSpan = document.querySelector('#result');
let button = document.querySelector('#button');

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
    console.log(str)
    let testArr = str.split(' ');
    let resArr = testArr.map(word => uniqChartInWord(word)).join('')
    let result = uniqChartInWord(resArr)

    console.log(result)
    return result;
}

button.addEventListener('click', function() {
    resultSpan.innerHTML = uniqChartInStr(input.value)
})