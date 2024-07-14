function solve(arr,start,end){
    let first = arr.indexOf(start);
    let last = arr.indexOf(end);

    let result = arr.slice(first, last + 1);
    return result
}
solve(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie')