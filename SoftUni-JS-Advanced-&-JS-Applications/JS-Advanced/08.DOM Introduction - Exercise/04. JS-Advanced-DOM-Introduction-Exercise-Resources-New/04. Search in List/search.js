function search() {
   let townsParent = document.getElementById(`towns`);
   let towns = townsParent.getElementsByTagName(`li`);
   let textInSearch = document.getElementById(`searchText`).value
   let counter = 0;
   let resultPrint = document.getElementById(`result`);
   for (let town of towns){
      if (town.style.fontWeight == `bolder`){
         town.style.fontWeight = `normal`;
         town.style.textDecoration = `none`
      }
   }

   for (let town of towns){
      if (town.textContent.includes(textInSearch)){
         town.style.fontWeight = `bolder`;
         town.style.textDecoration = `underline`
         counter += 1;
      }
   }

   resultPrint.textContent = `${counter} matches found`

}
