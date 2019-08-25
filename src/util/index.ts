
/**
 * @description: 返回数据类型
 * @param {any}
 * @return: {string}
 */
export function typeCheck(raw:any):string {
  let typeMap:any = {
    '[object String]' : 'String',
    '[object Number]' : 'Number',
    '[object Object]' : 'Object',
    '[object Function]' : 'Function',
    '[object Null]' : 'Null',
    '[object Undefined]': 'Undefined',
    '[object Array]': 'Array',
    '[object Date]' : 'Date',
  }
  let type = Object.prototype.toString.call(raw)
  return typeMap[type]
}
/**
 * @description: 判断是否是对象字面量
 * @param {any}
 * @return: {boolean}
 */
export function isObject(raw:any):boolean {
  let result = false
  let type = typeCheck(raw)
  if (type === 'Object') result = true
  return result
}
/**
 * @description: 判断是否是数组
 * @param {any}
 * @return: {boolean}
 */
export function isArray(raw:any):boolean {
  let result = false
  let type = typeCheck(raw)
  if (type === 'Array') result = true
  return result
}
/**
 * @description: 判断是否是函数
 * @param {any}
 * @return: {boolean}
 */
export function isFunction(raw:any):boolean {
  let result = false
  let type = typeCheck(raw)
  if (type === 'Function') result = true
  return result
}
/**
 * @description: 判断是否是字符串
 * @param {any}
 * @return: {boolean}
 */
export function isString(raw:any):boolean {
  let result = false
  let type = typeCheck(raw)
  if (type === 'String') result = true
  return result
}
/**
 * @description: 判断是否是undefined
 * @param {any}
 * @return: {boolean}
 */
export function isUndefined(raw:any):boolean {
  let result = false
  let type = typeCheck(raw)
  if (type === 'Undefined') result = true
  return result
}
/**
 * @description:
 * @param {object}
 * @return:{Array}
 */
export function toArray(raw:any): any[] {
  return isArray(raw)
  ? raw
  : Object.keys(raw).map(function(key) {
    return raw[key];
  });
}
/**
 * @description: return if object contains partial object
 * @param partial{object}
 * @param object{object}
 * @return: {boolean}
 */
export function objectContains(partial:object|any, object:object|any) : boolean {
  var keys = Object.keys(partial)
  return keys.map(function(el:any) {
    return (object[el] !== undefined) && (object[el] == partial[el]);
  }).indexOf(false) == -1;
}


