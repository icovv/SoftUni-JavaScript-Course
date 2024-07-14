function solution(num){
    
    function inside(b){
        let newNum = num + b;
        return newNum
    }

    return inside;
}

let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));
