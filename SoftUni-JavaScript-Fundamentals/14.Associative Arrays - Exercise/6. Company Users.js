function companyUsers(arr){
 let companyObj = {};
 for (let element of arr){
    let [company, user] = element.split(` -> `);
    if (companyObj[company]){
        if (!companyObj[company].includes(user)){
            companyObj[company].push(user)
        }
    } else {
        companyObj[company] = [user];
    }
 }
    let companyArr = Object.entries(companyObj);
    companyArr.sort((a,b) => a[0].localeCompare(b[0]))
    for (let i = 0; i < companyArr.length; i++){
        let name = companyArr[i][0];
        let user = companyArr[i][1];
        console.log(name)
        for (let person of user){
            console.log(`-- ${person}`)
        }
        }
 
}
companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])