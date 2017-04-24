// hasItem should return true if `item` is present in `arr` at least once,
// otherwise it should return false.
function hasItem (arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true
    }
    return false
  }
}

// getItemAtIndex should return arr[idx] but only if that index exists:
// if it doesn't, return a JavaScript Error object.
function getItemAtIndex (arr, idx) {
  if (arr.indexOf(arr[idx]) !== -1) {
    return arr[idx]
  }
  return new Error
}

// replaceItemAtIndex should replace the element at `idx` with `item`
function replaceItemAtIndex (arr, idx, item) {
  arr.splice(idx, 1, item)
}

// insertItemAtIndex should insert `item` at `idx` without overwriting
// any array values (the array should get longer)
function insertItemAtIndex (arr, item,  idx) {
  arr.splice(idx, 0, item)
}

// deleteItemAtIndex should remove the element at `idx` (the array
// should get shorter).
function deleteItemAtIndex (arr, idx) {
  arr.splice(idx, 1)
}

// deleteItem should return an array with every instance of `item` removed
function deleteItem (arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1)
      i -= 1
    }
  }
  return arr
}

// keys should return an array of the object's property names (keys)
// For example, given {foo: 1, bar: 2} it would return ['foo', 'bar']
function keys (obj) {
  return Object.keys(obj)
}

// values should return an array of the object's own values
// For example, given { foo: 1, bar: 2} it would return [1, 2]
function values (obj) {
  var valArr = []
  var keyArr = Object.keys(obj)
  for (var i = 0; i < keyArr.length; i++) {
    valArr.push(obj[keyArr[i]])
  }
  return valArr
}

// zipObject should return an object built from two arrays
// For example, given ['foo', 'bar'] and [1, 2] it would return
// { foo: 1, bar: 2}
function zipObject (keys, values) {
  var obj = {}
  for (var i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i]
  }
  return obj
}

// unzipObject should return an array of arrays, each one a pair of keys and values
// For example, given { foo: 1, bar: 2} it would return
// [['foo', 1], ['bar', 2]]
function unzipObject(obj) {
  var arr = []
  for (var i = 0; i < Object.keys(obj).length; i++) {
    var tempArr = []
    tempArr.push(Object.keys(obj)[i], obj[Object.keys(obj)[i]])
    arr.push(tempArr)
    tempArr = []
  }
  return arr
}

// findOneByProperty should return an object from `arr` that has the
// property AND value of `search`. For example, given:
//   [ { a: 1 }, { b: 2, c: 3 } ] and { b: 2 }
// it will return:
//   { b: 2, c: 3 }
function findOneByProperty (arr, search) {
  var searchKey = Object.keys(search).toString()
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].hasOwnProperty(searchKey) && arr[i][searchKey] === search[searchKey]) {
      return arr[i]
    }
  }
}

// findAll should return an array containing all objects in `arr` that
// have the property and value of `search`
function findAll (arr, search) {
  var answer = []

  var searchKey = Object.keys(search).toString()
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].hasOwnProperty(searchKey) && arr[i][searchKey] === search[searchKey]) {
      answer.push(arr[i])
    }
  }
  return answer
}

module.exports = {
  hasItem : hasItem,
  getItemAtIndex : getItemAtIndex,
  replaceItemAtIndex: replaceItemAtIndex,
  insertItemAtIndex: insertItemAtIndex,
  deleteItemAtIndex: deleteItemAtIndex,
  deleteItem: deleteItem,
  keys: keys,
  values: values,
  zipObject: zipObject,
  unzipObject: unzipObject,
  findOneByProperty: findOneByProperty,
  findAll: findAll
}
