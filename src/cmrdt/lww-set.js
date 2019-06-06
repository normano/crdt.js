import CmRDTSet from 'cmrdt-set';

/**
 * 
 * Operation-based Last-Write-Wins Set CRDT (LWW-Set CmRDT)
 * 
 */

class LWWSet extends CmRDTSet {
  /**
   * @override
   * 
   * _resolveValueState function is used to determine if an element is present in a Set.
   * 
   * It receives a Set of add tags and a Set of remove tags for an element as arguments.
   * It returns true if an element should be included in the state and false if not.
   * 
   * Overwriting this function gives us the ability to compare add/remove operations
   * of a particular element (value) in the set and determine if the value should be
   * included in the set or not. The function gets called once per element and returning
   * true will include the value in the set and returning false will exclude it from the set.
   * 
   * @param  {[type]} added       [Set of added elements]
   * @param  {[type]} removed     [Set of removed elements]
   * @param  {[type]} compareFunc [Comparison function to compare elements with]
   * @return {[type]}             [true if element should be included in the current state]
   */
  _resolveValueState (added, removed, compareFunc) {
    // Sort both sets with the given comparison function
    // or use "distance" sort by default
    compareFunc = compareFunc ? compareFunc : (a, b) => (a || 0) - (b || 0)
    const sortedAdded = Array.from(added).sort(compareFunc).reverse()
    const sortedRemoved = Array.from(removed).sort(compareFunc).reverse()
    // If the latest add operation is greater or equal than latest remove operation,
    // we include it in the state
    return compareFunc(sortedAdded[0], sortedRemoved[0]) > -1
  }

  /**
   * Create LWWSet from a json object
   * @param  {[Object]} json [Input object to create the LWWSet from. Needs to be: '{ values: [] }']
   * @return {[LWWSet]}      [new LWWSet instance]
   */
  static from (json) {
    return new LWWSet(json.values)
  }
}

export default LWWSet;
