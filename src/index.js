//There are four rules to follow that helps in writing better efficient code.
/*
Worst case
Remove Constants
Different terms for inputs
Drop Non Dominants
*/
//The worst case is when nemo item is at the end which will make the loop
//go through all the items in the list of arrays

const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "squirt",
  "darla",
  "nigel"
];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    //array[i] basically is saying the array of index elements and no the element name itself
    if (array[i] === "nemo") {
      console.log("Found nemo");
      /*
      Break is the worst case option it is an efficient way of writing good code
      It breaks/exits the loop after finding nemo, so it would not have to go through 
      the entire list of elements in the array 
      */
      break;
    }
  }
}

findNemo(everyone);
