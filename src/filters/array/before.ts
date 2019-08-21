
import { toArray, isArray, isObject} from '../../util'
export default function after(collection:any, count: number) {
  collection = isObject(collection) ? toArray(collection) : collection;
  return isArray(collection) ? collection.slice(0, (!count) ? count : --count) : collection;
}
