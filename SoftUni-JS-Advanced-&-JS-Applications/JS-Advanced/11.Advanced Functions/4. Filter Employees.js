function solve(input,search){
    let arr = JSON.parse(input);
    let print = [];
    if (!(search == `all`)){
        let criteria = search.split(`-`)[0];
        let searchTxt = search.split(`-`)[1]
        let i = 0
        for (let item of arr){
            if (item[criteria] == searchTxt){
                print.push(`${i}. ${item.first_name} ${item.last_name} - ${item.email}`)
                i++
            }
        }
    } else {
        let i = 0;
        for (let item of arr){
            print.push(`${i}. ${item.first_name} ${item.last_name} - ${item.email}`)
            i++
        }
    }
    print.forEach((x) => console.log(x)) 
}
solve(`[{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"}, {"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "null","gender": "Female"}, {"id": "3","first_name": "Evanne","last_name": "Maldin","email": "null","gender": "Male"}, {"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"}]`, `all`)