import vFilter from "../src/v-filter"

/**
 * Dummy test
 */
describe("vFilter test", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("has a install hook", () => {
    expect(typeof vFilter.install).toBe('function')
  })
  // it("DummyClass is instantiable", () => {
  //   expect(new DummyClass()).toBeInstanceOf(DummyClass)
  // })
})
