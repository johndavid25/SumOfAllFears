function FindSum(numbers, answer) {
    let checkValue = 0;
    let found = false;
    for (let i = 0; i <= numbers.length - 1; i++) {
        checkValue = answer - numbers[i];
        if (numbers.includes(checkValue, i + 1)) {
            found = true;
            break;
        }
    }
    return found;
}

document.getElementById("btnSubmit").addEventListener("click", DisplaySum);

function DisplaySum() {
    let answer = parseInt(document.getElementById("kVariable").value);
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    let input3 = parseInt(document.getElementById("input3").value);
    let input4 = parseInt(document.getElementById("input4").value);
    let numArray = [input1, input2, input3, input4];

    document.getElementById("numList").innerHTML = numArray.toString();
    let found = FindSum(numArray, answer);
    document.getElementById("results").innerHTML = found.toString();
}