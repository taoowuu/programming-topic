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
var sum = function (n) {
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

// join('#', ['hello', 'gua']) == 'hello#gua'
var join = function (delimiter, array) {
  var str = ''
  for (var i = 0; i < array.length; i++) {
    var str = str + array[i]
    if (i < array.length - 1) {
      var str = str + delimiter
    }
  }
  return str
}
var join = function(delimiter, array) {
    var s = array[0]
    for (var i = 1; i < array.length; i++) {
        var a = array[i]
        s += (delimiter + a)
    }
    return s
}

/*
split('1==2==3', '==') 返回 ['1', '2', '3']
       0123456
       slice(0, 1)
       slice(3, 4)
       slice(6)
*/
var split = function (s, delimiter) {
  var l = []
  var space = delimiter.length
  var start = 0
  for (var i = 0; i < s.length; i++) {
    if (slice(i, i+space) === delimiter) {
      var a = slice(start, i)
      l.push(a)
      start = i + space
    }
  }
  l.push(start)
  return l
}

/*
s old newString 都是 string
返回一个「将 s 中出现的所有 old 字符串替换为 new 字符串」的字符串
*/
var replaceAll = function (s, old, newString) {
  var s1 = s.split(old)
  var s2 = s.join(newString, s1)
  return s
}
