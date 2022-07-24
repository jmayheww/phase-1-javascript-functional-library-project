const unmodifiedTestArr = [1, 2, 3, 4];
const unmodifiedTestObj = { one: 1, two: 2, three: 3, four: 4 };

function myEach(collection, callback) {
  if (typeof collection === "object") {
    console.log(Object.values(collection));
    Object.values(collection).forEach((element) => callback(element));
    return collection;
  } else {
    collection.forEach((element) => callback(element));

    return collection;
  }
}

myEach(unmodifiedTestObj, alert);
console.log(
  "myEach(unmodifiedTestObj, alert);: ",
  myEach(unmodifiedTestObj, alert)
);

function myMap(collection, callback) {
  // if (typeof collection === "object") {
  //   console.log(Object.values(collection));
  //   return Object.values(collection).map((element) => callback(element));
  // } else {
  //   return collection.map((element) => callback(element));
  // }
  let arr = Object.values(collection);
  let newArray = [];

  for (let element of arr) {
    newArray.push(callback(element));
  }
  return newArray;
}

myMap(unmodifiedTestArr, function (num) {
  num * 3;
});

function myReduce(collection, callback, acc) {
  let arr = Object.values(collection);

  let newAcc;
  let i;
  let total = 0;

  if (acc > 0) {
    newAcc = acc;
    i = 0;
  } else {
    newAcc = arr[0];
    i = 1;
  }

  for (i; i < arr.length; i++) {
    newAcc = callback(newAcc, arr[i], collection);
  }

  return newAcc;
}

function myFind(collection, predicate) {
  let newArr = Object.values(collection);

  for (let element of newArr) {
    if (predicate(element)) {
      return element;
    }
  }
}

function myFilter(collection, predicate) {
  let arr = Object.values(collection);
  let newArr = [];

  for (let element of arr) {
    if (predicate(element)) {
      newArr.push(element);
    }
  }

  return newArr;
}

function mySize(collection) {
  let arr = Object.values(collection);

  return arr.length;
}

function myFirst(collection, nElements) {
  let newArr = collection.slice();

  if (!nElements) {
    return newArr[0];
  }

  return newArr.slice(0, nElements);
}

function myLast(collection, nElements) {
  let newArr = collection.slice();

  if (!nElements) {
    return newArr[newArr.length - 1];
  }

  return newArr.slice(-nElements);
}

function myKeys(obj) {
  let objKeys = [];

  for (let key in obj) {
    objKeys.push(key);
  }

  return objKeys;
}

function myValues(obj) {
  let objValues = [];

  for (let value in obj) {
    objValues.push(obj[value]);
  }

  return objValues;
}


// Bonus Functions

function mySortBy(array, callback) {
  let arr = Object.values(array);
  let newArr = array.slice();

  for (let element of newArr) {
    if (typeof element === 'string') {
      return callback(toString(element));
    }else if (typeof element === 'number') {
      return callback(Number(element))
    }else
    return callback(Math.sin(element));
  }


}
