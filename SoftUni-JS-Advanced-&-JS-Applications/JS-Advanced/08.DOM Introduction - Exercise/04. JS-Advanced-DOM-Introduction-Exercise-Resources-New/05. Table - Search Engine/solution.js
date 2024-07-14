function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tBody = document.getElementsByTagName(`tbody`)[0].getElementsByTagName(`tr`);
      let searchField = document.getElementById(`searchField`)
      let searchText = searchField.value
      for (let row of tBody){
         row.classList.remove(`select`)
      }

      for (let row of tBody){
         let rowTD = row.getElementsByTagName(`td`)
         let stName = rowTD[0].textContent;
         let email = rowTD[1].textContent;
         let course = rowTD[2].textContent;
         if (stName.includes(searchText) || email.includes(searchText) || course.includes(searchText)){
            row.classList.add(`select`)
         }
      }
      searchField.value = ``
}
}