// import { toArray, isArray, isObject, isUndefined, isString, isFunction, parse } from '../../util'
// export default function contains(collection:any, expression:any) {
//   collection = isObject(collection) ? toArray(collection) : collection;
//   if(!isArray(collection) || isUndefined(expression)) return false;
//   return collection.some(function(elm:any) {
//     return ((isString(expression) && isObject(elm)) || isFunction(expression))
//       ? parse(expression)(elm)
//       : elm === expression;
//   });
// }
