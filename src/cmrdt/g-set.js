import CmRDTSet from './cmrdt-set';

/**
 * 
 * CmRDT Operation-based Grow-Only Set CRDT (G-Set CmRDT)
 * 
 */

class GSet extends CmRDTSet {
  /**
   * Create a G-Set CmRDT instance
   * @param  {[Iterable]} iterable [Opetional Iterable object (eg. Array, Set) to create the GSet from]
   */
  constructor (iterable) {
    super()
    this._values = new Set(iterable)
  }

  /**
   * Return all values added to the Set
   * @return {[Iterator]} [Iterator for values in the Set]
   */
  values () {
    return this._values.values()
  }

  /**
   * Add a value to the Set
   *
   * Values can only be ever added to a G-Set,
   * removing values is not possible (Grow-Only)
   *
   * @param {[Any]} value [Value to add to the Set]
   */
  add (value) {
    this._values.add(value)
  }

  // G-Set doesn't allow removal of values, throw an error
  // Including this to satisfy normal Set API in case the user
  // accidentally calls remove on GSet
  remove (value) {
    throw new Error(`G-Set doesn't allow removing values`)
  }

  /**
   * Merge another GSet to this GSet
   * @param  {[GSet]} other [GSet to merge with]
   */
  merge (other) {
    // Merge values of other set with this set
    this._values = new Set([...this._values, ...other._values])
  }

  /**
   * GSet as an Object that can be JSON.stringified
   * @return {[Object]} [Object in the shape of `{ values: [<values>] }`]
   */
  toJSON () {
    return { 
      values: this.toArray(),
    }
  }

  /**
   * Create GSet from a json object
   * @param  {[Object]} json [Input object to create the GSet from. Needs to be: '{ values: [] }']
   * @return {[GSet]}        [new GSet instance]
   */
  static from (json) {
    return new GSet(json.values)
  }
}

export default GSet;
