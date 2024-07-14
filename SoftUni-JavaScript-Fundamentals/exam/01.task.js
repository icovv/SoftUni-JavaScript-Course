function cookingMasterclass(arr){

    let budget = arr[0];
    let students = arr[1];
    let priceForFloor = arr[2];
    let priceForSingleEgg = arr[3];
    let priceForSingleApron = arr[4];
    let totalFloorCheapFloor = 0;

    let moreApron = Math.ceil(students * 1.2)

    totalFloorCheapFloor = Math.floor(students / 5);
    
    let totalEggs = (10.00 * students) * priceForSingleEgg;

    let totalExpenses = (students - totalFloorCheapFloor) * priceForFloor + totalEggs + moreApron * priceForSingleApron;

    if (budget >= totalExpenses){
        console.log(`Items purchased for ${totalExpenses.toFixed(2)}$.`)
    } else {
        console.log(`${(Math.abs(budget - totalExpenses).toFixed(2))}$ more needed.`)
    }
}
cookingMasterclass([50,2,1.0,0.10,10.0])
cookingMasterclass([100,25,4.0,1.0,6.0])
cookingMasterclass([40, 2, 1.0, 0.10, 10.0])
cookingMasterclass([946, 20 , 12.05, 0.42, 27.89])