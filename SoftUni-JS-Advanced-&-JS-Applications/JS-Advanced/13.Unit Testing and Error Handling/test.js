function solve(){
    return 1
}

export {
    solve,
}

function sum(arr) {
    let sum = 0;
    for (let num of arr){
     sum += Number(num);
    }
     return sum;
    }
console.log(sum([1]))

    export {
        sum
    }

    function isSymmetric(arr) {
         if (!Array.isArray(arr)){
        return false; // Non-arrays are non-symmetric
        }
        let reversed = arr.slice(0).reverse(); // Clone and reverse
        let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
       return equal;
       }
       console.log(isSymmetric([1,2]))
       export{
        isSymmetric
       }

       function rgbToHexColor(red, green, blue) {

        if (!Number.isInteger(red) || (red < 0) || (red > 255)){
        
        return undefined; // Red value is invalid
        
        }
        
        if (!Number.isInteger(green) || (green < 0) || (green > 255)){
            return undefined; } if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)){ return undefined; } return "#" + ("0" + red.toString(16).toUpperCase()).slice(-2) + ("0" + green.toString(16).toUpperCase()).slice(-2) + ("0" + blue.toString(16).toUpperCase()).slice(-2); }
            console.log(rgbToHexColor(1,2,3))
            export{rgbToHexColor}

            function createCalculator() {

                let value = 0;
                
                return {
                
                add: function(num) { value += Number(num); },
                
                subtract: function(num) { value -= Number(num); },
                
                get: function() { return value; }
                
                }
                
                }
                export{createCalculator }