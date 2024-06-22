// function merge<T, B>(objA: T, objB: B): T & B {
//   return Object.assign({}, objA, objB) as T & B;
// }
function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB) as T & U;
}
