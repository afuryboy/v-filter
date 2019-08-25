
import { toArray, isArray, isObject} from '../../util'
export default function after(collection:any, count: number) {
  collection = isObject(collection) ? toArray(collection) : collection;
  return isArray(collection) ? collection.slice(count) : collection;
}
