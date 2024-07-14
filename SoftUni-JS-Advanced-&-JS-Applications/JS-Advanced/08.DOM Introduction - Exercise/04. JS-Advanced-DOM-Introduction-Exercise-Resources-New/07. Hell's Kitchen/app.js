function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   //["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]
   function onClick () { 
      let div = document.getElementById(`inputs`)
      let inputText = div.getElementsByTagName(`textarea`)[0].value
      let parsedText = JSON.parse(inputText);
      let result = {}
      let bestRestaurant = document.getElementById(`bestRestaurant`).getElementsByTagName(`p`)[0]
      let bestRestaurantWorkers = document.getElementById(`workers`).getElementsByTagName(`p`)[0]
      for (let store of parsedText){
         let storeName = store.split(` - `)[0];
         let Allworkers = store.split(` - `)[1].split(`, `);
         if (!result.hasOwnProperty(storeName)){
            result[storeName] = {
               avgSalary: 0,
               bestSalary: 0,
               workers: []
            }

         }
         let avgSalary = 0;
         let bestSalary = 0;
         if(result[storeName].bestSalary != 0){
            bestSalary = Number(result[storeName].bestSalary)
         }
            for (let worker of Allworkers){
               if(result[storeName].avgSalary > 0){
                  avgSalary = result[storeName].avgSalary
               }
               let name = worker.split(` `)[0]
               let salary = Number(worker.split(` `)[1])
               if (salary > bestSalary){
                  bestSalary = Number(salary)
               }
               avgSalary += salary;
               let workerOBJ = {
                  name,
                  salary
               }
               result[storeName].workers.push(workerOBJ)
               result[storeName].avgSalary = Number(avgSalary)
            }
            result[storeName].bestSalary = Number(bestSalary).toFixed(2)
            result[storeName].workers.sort((a,b) => b.salary - a.salary)
         }
         let theBestRestar = Object.entries(result).sort((a,b) => (b[1].avgSalary / b[1].workers.length) - (a[1].avgSalary/a[1].workers.length));
         bestRestaurant.textContent = `Name: ${theBestRestar[0][0]} Average Salary: ${(theBestRestar[0][1].avgSalary /theBestRestar[0][1].workers.length ).toFixed(2)} Best Salary: ${theBestRestar[0][1].bestSalary}`
         let bestWOrkers = ``;

         theBestRestar[0][1].workers.forEach(x => bestWOrkers += `Name: ${x.name} With Salary: ${x.salary} `)
         bestRestaurantWorkers.textContent = bestWOrkers
      }

}