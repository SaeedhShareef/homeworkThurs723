// start sum all numbers in a range
function sumAll(arr) {
    var sum = 0;
    for(var i = Math.min(...arr); i <= Math.max(...arr); i++){
      sum += i;
     
    }
    return sum;
   }
    
   sumAll([1, 4]);
    
    
   console.log(sumAll([1, 4]));
//    end sum all numbers in a range
// start sorted union
function uniteUnique(arr1, arr2, arr3) {
    var finalArray = [];
    
   for(var i = 0; i < arguments.length; i++){
    var arrayArguments = arguments[i];
     for(var j = 0; j < arrayArguments.length; j++){
      var indexValue = arrayArguments[j];
    
      if(finalArray.indexOf(indexValue) < 0) 
        finalArray.push(indexValue);
      }
    
    }
   return finalArray
    
   }
    
   uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
    
   console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
   
   // [ 1, 3, 2, 5, 4 ]
// end sorted union
// start fibonacci numbers
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while(currNumber <= num){
      if(currNumber % 2 !== 0){
        result += currNumber;
      }
      currNumber += prevNumber
      prevNumber = currNumber - prevNumber;
    }
    return result
   }
    
   sumFibs(4);
    
   console.log(sumFibs(4));
   // 5
// end fibonacci numbers
  
   