import { toArray, isArray, isObject, isUndefined} from '../../util'

function fill(n:number, val:any) {
  var ret = [];
  while (n--) ret[n] = val;
  return ret;
}

function _chunkBy(array:any[], n:number, fillVal:any) {
  if (!isArray(array)) return array;
  return array.map(function (el, i, self) {
    i = i * n;
    el = self.slice(i, i + n);
    return !isUndefined(fillVal) && el.length < n
        ? el.concat(fill(n - el.length, fillVal))
        : el;
  }).slice(0, Math.ceil(array.length / n));
}

export default function chunkBy(array:any[], n:number, fillVal:any) {
  return _chunkBy(array, n, fillVal)
}
