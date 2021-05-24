// 数组扁平化:多维数组转一维数组  递归
function flatten(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

// 数组去重：unique
function unique(arr) {
    let idSet = new Set();
    return arr.filter(item => {
        // 唯一标识的id
        let id = item + JSON.stringify(item);
        if(idSet.has(id)) {
            return false;
        } else {
            idSet.add(id);
            return true;
        }
    })
}

// 浅拷贝
function copy(obj) {
    let result = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach(key => result[key] = obj[key]);
    return result;
}

// 深拷贝 处理了循环引用和key为symbol类型的情况
function deepCopy(obj, midMap=new Map()) {
    if(!(obj instanceof Object)) return obj;//如果是原始数据类型，直接返回
    if(midMap.has(obj)) return midMap.get(obj);//如果已经存在

    let result = Array.isArray(obj) ? [] : {};
    midMap.set(obj, result);

    // 遍历所有属性进行递归拷贝
    [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)].forEach(item => {
        result[item] = copy(obj[item], midMap);
    })

    return result;

}

