function solve(strings){
    let [first,second,third] = strings;
    let concat = `${first + second}`;
    third = third.toUpperCase()
    let vowels = [`a`,`e`,`i`,`o`,`u`];
    let z = 0;
    for (let i = 0; i < concat.length; i++){
        if (vowels.includes(concat[i])){
            concat = concat.replace(concat[i],third[z]);
            z++
        }

        if (z >= third.length){
            z = 0;
        }
    }
    concat = concat.split(``).reverse().join(``);
    console.log(`Your generated password is ${concat}`)
}
solve(['ilovepizza','ihatevegetables','orange'])