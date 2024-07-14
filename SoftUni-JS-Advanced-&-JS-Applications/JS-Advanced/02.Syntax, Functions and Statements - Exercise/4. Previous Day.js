function solve(y,m,d){
    let newDate = new Date(y,m - 1,d - 1);
    // console.log(newDate.getFullYear())
    // console.log(newDate.getDate())
    // console.log(newDate.getMonth() + 1)
    console.log(`${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`)
}
solve(2015, 5, 10)