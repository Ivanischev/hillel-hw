/**
 * Функция explainer сделает НОВЫЙ "обяъснительный" массив
 * 
 * @param {array} - массив
 * @returns {array} - новый массив
 */

let array = [10, 'Hello world', null, true , '', false, 255];


function explain(array) {
    return array.filter((item) => {
        return !!item
    }).map((item) => {
        if (typeof item === 'number' || typeof item === 'boolean') {
        return convertNumberAndBoolean(item);
        } else if (typeof item === 'string') {
        return convertString(item);
        } else {
        return item;
        }
    })
}
  
function convertNumberAndBoolean(item) {
    return {
        type: typeof item,
        value: item
    };
}
  
function convertString(item) {
    return {
        type: typeof item,
        value: item,
        length: item.length
    };
}
  
console.log(explain(array));
