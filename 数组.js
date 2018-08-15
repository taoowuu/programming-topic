/*
参数是一个数字 n
返回以下序列的结果
1 - 2 + 3 - 4 + 5 ... n
*/
var sum = function(n) {
    var s = 0
    for (var i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            s = s - i
        } else {
            s = s + i
        }
    }
    return s
}

/*
参数是一个数字 n
返回以下序列的结果
1 + 2 - 3 + 4 - ... n
*/
var sum = function(n) {
    var s = 1
    for (var i = 2; i <= n; i++) {
        if (i % 2 == 0) {
            s = s + i
        } else {
            s = s - i
        }
    }
    return s
}