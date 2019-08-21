import vFilter from "../src/v-filter"
describe('filter:after', () => {
  it('after', () => {
    let filter = vFilter.mixin.methods.after
    let arr = [{a:1},{a:2}]
    expect(filter(arr,1)).toEqual([{a:2}])
  })
})
