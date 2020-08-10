function sum(first, second) {
    let result = first + second;
    console.log(result);
    return result;
}


let bonus = 20;

function sum(first, second) {
    let result = first + second + bonus;
    console.log(result);
    return result;
}

const output = sum(3, 7);
// console.log(result);
console.log(output);
console.log(bonus);


function sum2(first, second) {
    let result = first + second + bonus;
    console.log(result);
    if (result > 9) {
        const mood = "happy";
        console.log(mood);
    }
    // console.log(mood);
    return result;
}

const output2 = sum2(3, 7);
// console.log(result);
console.log(output2);
console.log(bonus);



function sum3(first, second) {
    let result = first + second + bonus;
    console.log(result);
    if (result > 9) {
        let mood = "happy";
        mood = "fishy";
        mood = "funky";
        mood = "cranky";
        console.log(mood);
    }
    // console.log(mood);
    return result;
}

const output3 = sum3(3, 7);
// console.log(result);
console.log(output3);




function sum4(first, second) {
    let result = first + second + bonus;
    console.log(result);
    if (result > 9) {
        var mood = "happy";
        mood = "fishy";
        mood = "funky";
        mood = "cranky";
        console.log(mood);
    }
    console.log(mood);
    return result;
}

const output4 = sum4(3, 7);
// console.log(result);
console.log(output4);




function sum5(first, second) {
    let result = first + second + bonus;
    console.log(result);
    if (result > 9) {
        var mood = "happy";
        mood = "fishy";
        mood = "funky";
        mood = "cranky";
        console.log(mood);
    }
    console.log(day);
    var day = "friday";
    console.log(day);
    return result;
}

const output5 = sum5(3, 7);
// console.log(result);
console.log(output5);


function sum6(first, second) {
    let result = first + second + bonus;
    console.log(result);
    if (result > 9) {
        var mood = "happy";
        mood = "fishy";
        mood = "funky";
        mood = "cranky";
        console.log(mood);
    }
    console.log(day);
    let day = "friday";
    console.log(day);
    return result;
}

const output6 = sum6(3, 7);
// console.log(result);
console.log(output6);

