function sortByLength (array) {

/* sort by array item length with compare function a - b 
for ascending order or b - a for descending */

  return array.sort((a, b) => a.length - b.length)

/* 
compare function return values: 
> 0 sorts b before a
< 0 sorts a before b
=== 0 keeps original order of a and b
 */

};