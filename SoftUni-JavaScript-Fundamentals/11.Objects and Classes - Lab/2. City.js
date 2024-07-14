function cities(cityInfo){
    for (let [key,value] of Object.entries(cityInfo)){
        console.log(key,`->`, value)
    }
}

cities({name: "Plovdiv",area: 389,population: 1162358,country: "Bulgaria",postCode: "4000"})