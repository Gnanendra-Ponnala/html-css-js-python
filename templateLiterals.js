https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-strings-using-template-literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  
  console.log(arr)
  /*for( var fa of arr){
      failureItems.push(`<li class="text-warning">${fa}</li>`);
  } */
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);


  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);
