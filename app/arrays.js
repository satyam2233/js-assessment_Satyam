arraysAnswers = {
  /**
   * Find the 0 based index of item in arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to find in arr
   * @returns {Number} The index of item in arr, or -1 if item is not in arr.
   */
  indexOf: function indexOf(arr, item) {
    // Implement a function, that returns the 0 based index of an element in an array.
		var arr = [2, 98, 12, 45];
		print(arr.indexOf(98,2));
		
  },

  /**
   * Determine the sum of the items of arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number} The numerical sum of all items in arr.
   */
  sum: function sum(arr) {
	  var sum = [1, 2, 3].reduce((a, b) => a + b, 0);
	  console.log(sum); 
	  return sum;
  },

  /**
   * Create a new array with the same items as arr, excluding item 
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} A new array containing all numbers from arr except item.
   */
  remove: function remove(arr, item) {
	  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
		for( var i = 0; i < arr.length-1; i++){ 
	   if ( arr[i] === 5) {
		 arr.splice(i, 1); 
	   }
	   return arr;
	}
  },

  /**
   * Adds a number, item, to the end of an array, arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be appended to the end of arr
   * @returns {Number[]} The array arr, with item appended.
   */
  append: function append(arr, item) {
	  var arr = [1,2,3,4,5];
		arr = arr.concat([6,7,8,9,10]);
		 return arr;
},

  /**
   * Removes a number, item, from the end of an array, arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the last element removed..
   */
  truncate: function truncate(arr) {
	  var arr = [1, 0, 2];
	  var newArr = arr.slice(0, -1)
	   return newArr;

  },

  /**
   * Adds a number, item, to the beginning of an array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to append to the beginning of arr.
   * @returns {Number[]} The array arr, with the first element item added
   */
  prepend: function prepend(arr, item) {
	  var arr = [23, 45, 12, 67];
	  arr.unshift(34);
	  
	  return arr;

  },


  /**
   * Removes the first element from an array
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the first element item removed.
   */
  curtail: function curtail(arr) {
	  var arr = [1,2,3]
		arr.shift();
		return arr;
  },

  /**
   * Combines the two arrays arr1 and arr2 together
   * 
   * @param {Number[]} arr1 - An array of numbers
   * @param {Number[]} arr2 - An array of numbers
   * @returns {Number[]} A new array, with elements from arr1 and arr2 in that order.
   */
  concat: function concat(arr1, arr2) {
	  var arr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
	  var arr2 = [ 3,8,0,8,0,5];
	  var arr3 = arr1.concat( arr2 );
	  return arr3;

  },

  /**
   * Insert a number item into an array arr at the 0 based position index.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be inerted into arr
   * @param {Number} index - A 0 based index into the array arr.
   * @returns {Number[]} The array arr, with the number item inserted at position index.
   */
  insert: function insert(arr, item, index) {
		Array.prototype.insert = function(i,...rest){
		this.splice(i,0,...rest)
		return this
	}
		var a = [3,4,8,9];
		//document.write("<pre>" + JSON.stringify(a.insert(2,5,6,7)) + "</pre>");
		var b=a.insert(2,5,6,7);
		return b;
  },

  /**
   * Counts the number of times a number item appears in an array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to count in arr
   * @returns {Number} The count of the number of times the number item appeared in arr.
   */
  count: function count(arr, item) {
	  var arr = [1,2,3,1,2,3,4];
		var map = arr.reduce(function(obj, item) {
		  obj[item] = ++obj[item] || 1;
		  return obj;
		}, {});
  },

  /**
   * Determines the number of duplicated numbers in the array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} An array of numbers that appear in arr more than once.
   */
  duplicates: function duplicates(arr1) {
	   var arra = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
        var result = [];

        arra1.forEach(function (item) {
          if(!object[item])
              object[item] = 0;
            object[item] += 1;
        })

        for (var prop in object) {
           if(object[prop] >= 2) {
               result.push(prop);
           }
        }

        return result;


  },

  /**
   * Squares each number in an array arr. Example: square([1, 2, 3]) returns [1, 4, 9].
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} A new array of numbers that contains the elements of arr squared.
   */
  square: function square(arr) {
	 let arr = [1,2,3,4,5,6,7,8,9,10];
	let result = arr.map(x => x*x);
	return result;

  },

  /**
   * Finds the indices of the occurrences of a number target in an array of numbers arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} target - A number to find all occurences of.
   * @returns {Number[]} A new array of numbers which represent the indices of target in arr.
   */
  findAllOccurrences: function findAllOccurrences(arr, target) {
	   var target = [], i;
		for(i = 0; i < arr.length; i++)
			if (arr[i] === val)
				target.push(i);
		return target;
  },
};
