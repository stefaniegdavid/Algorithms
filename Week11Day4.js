// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the iterated element.
  Return an empty array if the callback never returns true

  Bonus: After solving it, make a 2nd solution to practice functional programming with built in methods
*/

const nums1 = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {return elem > 5 };
const expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {return elem > 2 };
const expected2 = [4, 3, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
const expected3 = [];

/**
 * Removes every element in the array, starting from idx 0 until the callback
 * function returns true when passed the iterated element.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @callback cb A callback function that expects to receive an array element.
 * @returns {Array<any>} The given array with only the remaining items.
 */
function dropIt(arr, cb) {
  //Code block
}
console.log(dropIt(nums1, callback1));
console.log(dropIt(nums2,callback2));
console.log(dropIt(nums3,callback3));

/**
 *  Make a 2nd solution to practice functional programming with built in methods
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @callback cb A callback function that expects to receive an array element.
 * @returns {Array<any>} The given array with only the remaining items.
 */

function dropItFunctional(arr, cb) {
  //Code block
}
console.log(dropItFunctional(nums1, callback1));
console.log(dropItFunctional(nums2,callback2));
console.log(dropItFunctional(nums3,callback3));

/*****************************************************************************/

module.exports = { dropIt, dropItFunctional };