let arr = [{id: 1, name: 'test'}];

arr.customMap = function(callback) {
    let newArr = [];

    for(let i=0; i < arr.length; i++) {
        newArr.push(callback(arr[i]))
    }

    return newArr;
}

let mapArray = arr.customMap((item) => item.id);

console.log('mapArray: ', mapArray);