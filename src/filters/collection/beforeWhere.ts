import { toArray, isArray, isObject, isUndefined, objectContains} from '../../util'
export default function beforeWhere(collection:any, object: object) {
  collection = isObject(collection) ? toArray(collection) : collection;
  if(!isArray(collection) || isUndefined(object)) return collection;
  var index = collection.map( function( elm:any ) {
    return objectContains(object, elm);
  }).indexOf( true );
  return collection.slice(0, (index === -1) ? collection.length : ++index);
}
