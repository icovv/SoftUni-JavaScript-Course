function school(input){
    let schoolBook = {};
    let gradeCounter = {};
    for (let student of input){
        let studentSplit = student.split(` `)
        let person = studentSplit[0];
        let  grade = 0;
        let counter = 0;
        for (let i = 1 ; i< studentSplit.length; i++){
            grade += Number(studentSplit[i])
            counter += 1;
        }
        if (schoolBook[person]){
            schoolBook[person] += grade
            gradeCounter[person] += counter
        } else {
            schoolBook[person] = Number(grade)
            gradeCounter[person] = counter
        }
        counter = 0
    }
    let schoolBookArr = Object.entries(schoolBook);
    schoolBookArr.sort((a,b) => a[0].localeCompare(b[0]))
    for (let [person,grade] of schoolBookArr){
        let newGrade = grade / gradeCounter[person];
        console.log(`${person}: ${newGrade.toFixed(2)}`)
    }
        
}
school(['Steven 3 5 6 4',

'George 4 6',

'Tammy 2 5 3',

'Steven 6 3',
'Steven 6 6'])