function solve(n,k){
    let output = [1];
    for (let i = 0; i < n - 1; i ++){
        let num = 0
        for (let j = i; j > i - k ; j--){
            if (!(isNaN(output[j]))){
                num += output[j]
            }
        }
        output.push(num)
    }
    console.log(output)
}
solve(8, 2)