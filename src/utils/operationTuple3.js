
class OperationTuple3 {
    constructor (value, added, removed) {
      this.value = value
      this.added = new Set(added)
      this.removed = new Set(removed)
    }
  
    static create (value, added, removed) {
      return new OperationTuple3(value, added, removed)
    }
  
    static from (json) {
      return OperationTuple3.create(json.value, json.added, json.removed)
    }
  }
  
export default OperationTuple3
  