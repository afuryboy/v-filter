
import { toArray, isArray, isObject, isUndefined} from '../../util'
export default function concat(collection: any, joined: any) {
  if(isUndefined(joined)) return collection;
  if(isArray(collection)) return isObject(joined) ? collection.concat(toArray(joined)) : collection.concat(joined);
  if(isObject(collection)) {
    let arr = toArray(collection)
    return isObject(joined) ? arr.concat(toArray(joined)) : arr.concat(joined);
  }
  return collection;
}
