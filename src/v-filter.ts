

import { VFilter } from './type'
import filters from './filters'
import mixins from './filters/mixins'

const vFilter:VFilter = {
  install(Vue) {
    for(let [key,value] of Object.entries(filters)) {
      Vue.filter(key,value)
    }
  },
  mixin: {
    methods: {
      ...mixins
    }
  }
}

export default vFilter

if (typeof window !== 'undefined' && (window as any).Vue) {
  (window as any).Vue.use(vFilter);
  (window as any).vFilter = vFilter;
}
