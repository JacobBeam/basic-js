import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 export default function countCats(cats) {
let catsNumber = 0;
cats.forEach((element)=>element.forEach(el => el==='^^' ? catsNumber++ : catsNumber))

  // remove line with error and write your code here

  //for (let i=0; i<cats.length; i++) {
  //  for  (let j=0;j<cats[i].length; j++){
  //    if (cats[i][j]==='^^'){
  //      catsNumber++
  //    }
  //  }
  //}


  return catsNumber

}
