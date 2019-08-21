
import util from '../../util'

function Lowercase<T>(val: T): T {
  if(util.typeCheck(val) === 'String') return (val as any).toString().toLowerCase()
  else return val
}

const lowercase: <T>(val: T) => T = Lowercase

export default lowercase
