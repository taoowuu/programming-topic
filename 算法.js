var arr = [3, 1, 4, 6, 5, 7, 2]
console.log(arr)
// 冒泡排序
var bubbleSort = function () {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
// 快速排序
var quickSort = function () {
  var cIndex = Math.floor(arr.length / 2)
  var c = arr.splice(cIndex, 1)
  var l = []
  var r = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < c) {
      l.push(arr[i])
    } else {
      r.push(arr[i])
    }
  }
  return quickSort(l).concat(c, quickSort(r))
}
