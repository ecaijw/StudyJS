'use strict'; // strict mode, must use var
//////////////////////////////////////
// decorator
var oldLog = console.log
var countLog = 0
console.log = function() {
    countLog++;
    return oldLog.apply(null, arguments);
}



var x = 1;
x = 0xff00;
console.log(Number.MAX_SAFE_INTEGER);
var s = false === 0;
s = (false == 0) + (false === 0);

var bi1 = 9223372036854775807n;  // bigInt
var bi2 = BigInt(1235);
s = bi1 / bi2;
// s = bi1 / 123; exception
//alert('我要学JavaScript!' + s);

// null和undefined. Python is None
// 大多数情况下，我们都应该用null。undefined仅仅在判断函数参数是否传递的情况下有用

x = [0,1,2,"test", null, true]
console.log(x);
x = new Array(1,2,3.14)
console.log(x);

var person = {
    name : 'Snake',
    age : 20,
    tags : ['js', 'web', 'mobile'],
    code : null
}
console.log(person);
console.log(person.tags)
console.log(person.code)
// var person = null; good
//console.log(person);

//////////////// string //////////
var s = 'I\'m "snake".\n'
s += '\x41'; // 完全等同于 'A'
s += '\u4e2d\u6587'; // 完全等同于 '中文'
console.log(s)
s =
`line 1
line 2`;
console.log(s)
var addr = 'beijing';
s = `hello, ${person.name}, age is ${person.age}, live in ${addr}. `;
console.log(s)
console.log(s.length)
// s[0]='A'  // exception error. string is readonly
console.log(s.indexOf('age') + '  ' + s.indexOf('notFound'))
console.log(s.substring(1,5))

///////////////////// array ////////////////
console.log('//////////////// array ///////////////////////')
var a = [1,2,3];
a.length = 6; // add undefined
console.log(a)
a[10] = '10' // add undefined
a[5]=1
a[6]=2
console.log(a)
console.log(a.indexOf(1))
console.log(a.slice(1,5))
a.pop()
a.push(11)
console.log(a)
a.shift()
a.unshift('a','b')
console.log(a)
a.sort()
console.log(a)
var a = [11,12,1,2,3,44];
a.sort()  // [1, 11, 12, 2, 3, 44]
console.log(a)

var a = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
console.log(a)
a.splice(2,3,'Google', 'Facebook')  // 从索引2开始删除3个元素,然后再添加两个元素:
console.log(a)
var b = ['A', 'B', 'C'];
console.log(a.concat(b))
console.log(a + b)
console.log("a is not changed: " + a) // a is not changed
console.log(a.join('--'))

var a = [[1, 2, 3], [400, 500, 600], '-'];
console.log(a[1].indexOf(500))

/////////////////////////
var person = {
    name : 'Snake',
    age : 20,
    tags : ['js', 'web', 'mobile'],
    code : null
}
console.log(person)
console.log(person.new)
person.new = 'new'
console.log(person.new)
console.log('name' in person)
console.log('Name' in person)  // case sensitive
console.log('toString' in person)
console.log(person.hasOwnProperty('toString'))
console.log('notExist' in person)

/////////////////////////////////
if (person.age >= 18)
    console.log('adult: ' + person.age)
 else if (person.age >= 6)
    console.log('teenager: ' + person.age)
 else
    console.log('kid: ' + person.age)
// JavaScript把null、undefined、0、NaN和空字符串''视为false，
// 其他值一概视为true，因此上述代码条件判断的结果是true。
var s = '123'
if (s.length)
    console.log('true')
else
    console.log('false')

var r = 0
for (var i = 1; i <= 10;i++) {
    r += i
}
console.log(r)



var o = person
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key + ' : ' + o[key])
    }
    else {
        // why: output nothing?
        console.log(key + ' () : ' + o[key])
    }
}

var a = [0, 1,2,'a','b']
for (var i in a) {
    console.log(typeof(i) + ' : ' + i)
    console.log(typeof(a[i]) + ' : ' + a[i])
}

//////////////// map and set //////////////
var m = new Map([['mike', 95], ['apple', 92], ['bob', 91]]);
var s = new Set();

console.log('///////////////// map and set ///////////////')
console.log('support map and set!')
console.log(m.get('mike'))
console.log(m.get('bob'))
console.log(m.has('adam'))
m.set('adam', 67)
console.log(m.has('adam'))
console.log(m.get('adam'))
m.delete('notexist')  // not report error
m.delete('adam')
console.log(m.get('adam')) // undefined

 // add a property named wrongKey
 // NOT: add the value into map
m['wrongKey'] = "this is value for wrong key"
console.log(`m.has('wrongKey'): ` + m.has('wrongKey')) // return false
console.log(m['wrongKey']) //
console.log(m['notExist']) // undefined


var m = new Object()
console.log('test: add property to object')
m[1] = "this is 1 property" // add a property named 1
console.log(m[1]) //
console.log(m[0]) // undefined

var s = new Set([1,2,3,3,3,'3','2']);
console.log(s.size)
console.log(s.has('3'))
s.add(4)
s.delete('123')
console.log(s.size)
console.log(s)

//////////////////////////////////
// 为了统一集合类型，ES6标准引入了新的iterable类型，Array、Map和Set都属于iterable类型。
console.log('///////////////// iterable ///////////////')

var m = new Map([['mike', 95], ['apple', 92], ['bob', 91]]);
for (var key in m) {    // undefined
    // NOT reach here
    console.log(key + ' : ' + m.get(key))
}
for (var v of m) {
    console.log(v)
    console.log(v[0] + ' : ' + v[1])
}

var s = new Set([1,2,3,3,3,'3','2']);
for (var v of s) {
    console.log(typeof(v))
    console.log(v)
}

var a = [0,1,2]
console.log('test array iterator')
for (var v in a) {
    console.log(v)
}
for (var v of a) {
    console.log(v)
}
a.name = "name"
for (var v in a) {
    console.log(v) // wrong: name is included
}
for (var v of a) {
    console.log(v) // correct: name is NOT included
}

console.log('test array forEach')
a.forEach(function(e,i,a) {
    console.log(e + ', index = ' + i);
    console.log(a.length);
}
);

console.log('test map forEach')
m.forEach(function(value, key, m) {
    console.log(value + ', key = ' + key);
//    console.log(a.size);
}
);

console.log('test set forEach')
s.forEach(function(e,sameElement,s) {
    console.log(e + ', SameElement = ' + sameElement);
//    console.log(typeof(e))
//    console.log(s.size);
}
);

///////////////// function /////////////////
console.log('///////////////// function ///////////////')

var abs = function(x) {
    if (typeof(x) != 'number')
        console.log('No a Number')
        return null

    console.log(typeof(arguments))  // object
    console.log('arguments.length: ' + arguments.length)  // object
    for (var v of arguments) {
        console.log('arg: ' + v)
    }

    if (x >= 0)
        return x;
    else
        return -x;
};
var x = 'abc'
var s = typeof(x)
console.log(typeof(s))  // typeof return a string
//console.log(abs('abc'))  // exception
console.log(abs(-2))
console.log(abs(2))
console.log(abs())  // return NaN

function foo(a,b, ...rest) {        // rest argument
    console.log(typeof(arguments))  // object
    console.log('a: ' + a)
    console.log('b: ' + b)
    console.log(b != undefined)


    console.log('foo() arguments.length: ' + arguments.length)  // object
    for (var v of arguments) {
        console.log('arg: ' + v)
    }
    console.log('rest: ' + rest)
    return null
}
console.log(foo(1))
console.log(foo(1, 2))
console.log(foo(1, 2,3,4,5))

function foo1()
{
    var x = 'hello: ' + y;
    y = x;
    console.log(x)

    // y is moved to top of the function; but value is undefined
    var y = 'bob'
    console.log(y)
}
console.log(foo1())  //

// window is the default global object
var course = 'course'
console.log(window)
console.log('window.name: ' + window.name)
console.log(course)
console.log(window.course) // course is bound to window's property

var oldAlert = window.alert;
//oldAlert('use old alert')       // good alert
window.alert = function() {}
alert('NOT function')           // NOT work
window.alert('NOT function')    // NOT work
window.alert = oldAlert
//alert('function again')         // work again

// use one unique global variable
var my = {};
my.name = 'snake'
my.version = '1.0.0'
my.foo = function(arg) {
    return 'my.foo(): ' + arg
}
console.log(my.foo(my.name))

function testDomain() {
    var r = 0
    for (var i = 0; i < 3; i++)
        r += i
    console.log(i)  // still able to access i

    // use let for block variable
    {
        let i =0
        for (i = 0; i < 10; i++)
            r += i
        // this is the 'let i'
        console.log(i)
    }

    // this is the 'var i'
    console.log(i)

    /////////////////////////
    // const
    const pi = 3.14
//    pi = 3.1415
    console.log('pi: ' + pi)  // exception TypeError

}
testDomain()

function testAssign () {
    // 'undefined'
    console.log(x);
    console.log(y);
    console.log(z);

    var x,y,z;
    x,y,z = 1,2,3
    // 'undefined, undefined, 1'
    console.log(`${x}, ${y}, ${z}`);

    // TypeError: Cannot set properties of undefined (setting '1')
//    [x,y,z] = [1,2,3]

    ([x,y,z] = [1,2,3]);
    // '1, 2, 3'
    console.log('[x,y,z]: ' + `${x}, ${y}, ${z}`)

    var person = {
        name : 'Snake',
        age : 20,
        tags : ['js', 'web', 'mobile'],
        address : {
            city : 'beijing',
            street:'No.1',
            zipcode:'525000'
        },
        code : null
    }
    var {name,age,tags, address:{city}} = person
    // Uncaught ReferenceError: address is not defined
//    console.log(`${name}, ${age}, ${tags}, ${address}`)
    console.log(`${name}, ${age}, ${tags}, ${city}`);

    ({name,age} = {name:'test',age:20} );
    // Uncaught ReferenceError: address is not defined
//    console.log(`${name}, ${age}, ${tags}, ${address}`)
    console.log(`${name}, ${age}, ${tags}, ${city}`)


    var {name,age,tags, age:ageName, age:ageName2} = person
    // age is NOT variable; it is to help ageName variable to get the value
    console.log(`${name}, ${age}, ${tags}, ${ageName}, ${ageName2}`)

    var {name,age,tags, notExist = 'default value'} = person
    // age is NOT variable; it is to help ageName variable to get the value
    console.log(`${name}, ${age}, ${tags}, ${notExist}`)


    // swap value
    x = 100;
    y = 200;
    [x,y] = [y,x]
    console.log('x,y: ' + x + ', ' + y)

    var {hostname: host, pathname: path} = location;
    console.log(`host: ${host}, path: ${path}`);
}
testAssign()

function buildDate({year, month, day, hour = 0, minute = 0, second = 0}) {
    return new Date(`${year}-${month}-${day} ${hour}:${minute}:${second}`)
}
console.log(buildDate({year:2023, month : 1, day : 27}));
console.log(buildDate({year:2023, month : 1, day : 27, hour : 6}));

function buildDate2(year, month, day, hour = 0, minute = 0, second = 0) {
    return new Date(`${year}-${month}-${day} ${hour}:${minute}:${second}`)
}
console.log(buildDate2(2023,  1,  27));
console.log(buildDate2(2023,  1,  27,6));


///////////////////////////////////////////////
console.log('//////////////// object\'s method ///////////////////////')
var person = {
    name : 'Snake',
    age : 20,
    tags : ['js', 'web', 'mobile'],
    address : {
        city : 'beijing',
        street:'No.1',
        zipcode:'525000'
    },
    code : null
}

var Bob = {
    name : 'bob',
    age : 20,
    birth : 1995
}

person.birth = 1990;
person.age = function() {
    var ret = new Date().getFullYear();
    console.log('this: ' + this)
    if (this === undefined) {
        return undefined
    }
    return ret - this.birth;
}
console.log('age: ' + person.age())

// 'this' is the global window.this, which is undefined
var functionGetAge = person.age;
console.log('age: ' + functionGetAge())

// test: apply()
function getAge() {
    var ret = new Date().getFullYear();
    console.log('this: ' + this)
    return ret - this.birth;
}
person.age = getAge
console.log('age: ' + person.age())
console.log('apply: ' + getAge.apply(person, []))
console.log('call: ' + getAge.call(Bob))

console.log('call max(): ' + Math.max.call(null, 1,3,5))
console.log('call max(): ' + Math.max.call(Bob, 1,3,5))


//////////////////////////////////////
// decorator
// oldLog is console.log
var m = Math.max
console.log(m(1,2,3))
console.log(Math.max(1))
console.log(m.apply(null, [1,2,3,4,5]))

oldLog("old log 1")
oldLog("old log 2")
console.log("1")
console.log("2")
console.log('count log(): ' + countLog)

/////////////////////////////////////////////////////
console.log(`///////////// high-order functions //////////////////`)
function add(x, y, f) {
    return f(x) + f(y);
}
console.log("add(x,y,f): " + add(5,-6,Math.abs))
console.log("add(x,y,f): " + add(5,-6,Math.pow))

console.log(`///////////// map and reduce //////////////////`)
function pow(x) {
    return x * x;
}
var arr = [1,3,5,7,9]
var results = arr.map(pow)
console.log("arr.map(pow): " + results)
var results = arr.map(String)
console.log("arr.map(String): " + results)
var results = arr.map(Math.pow)
console.log("arr.map(Math.pow): " + results)  // why: [1, 2, 9, 64, 625]

function mul(x,y) {
    return x * y;
}
console.log("arr.reduce(mul): " + arr.reduce(mul));

console.log("arr.reduce(10*x+y): " + arr.reduce(function(x,y) {
        return 10 * x + y;
    }));

console.log(`///////////// string2int(s) //////////////////`)

function string2int(s) {
    // var arr = s.split()
    var arr = Array.from(s);
//    console.log("size: " + arr.length + " " + arr)
    var results = arr.reduce(function(x,y , index) {
//        console.log(typeof(x) + " " + typeof(y))
        console.log(`string2int: [${x}] [${y}] [${index}]`)
        return 10 * (x - '0') + (y - '0');
    }, '0');  // provide default parameter if length is 1
//    console.log("typeof(results): " + typeof(results))
    return results;

}
console.log(string2int('34567'));
console.log(string2int('7'));
console.log(string2int('0'));
console.log(string2int('12300'));

function normalize3(arr) {
    var results = arr.map(function(ele, index) {
        var tempArr = Array.from(ele);
        tempArr = tempArr.map(function(x,index) {
            if (index == 0) {
                return x.toUpperCase();
            }
            return x.toLowerCase();
        });
//        tempArr[0] = tempArr[0].toUpperCase();
        return tempArr.join('')
    });
    return results;
}

function normalize2(arr) {
    var results = arr.map(function(ele, index) {
//        console.log(`ele: ${ele}  index: ${index}`)
        var tempArr = Array.from(ele);
        tempArr = tempArr.map(function(x) {

            return x.toLowerCase();
//            console.log('not reach')
//            if (x > 'Z') {
//                return x;
//            }
//            else {
//                return String.fromCharCode('a'.charCodeAt() + (x.charCodeAt() - 'A'.charCodeAt()))
//            }
        });
//        console.log("tempArr: " + typeof(tempArr))
//        console.log("tempArr: " + tempArr.length)
//        console.log("tempArr: " + tempArr)
//        console.log("tempArr: " + tempArr.join(''))
        tempArr[0] = tempArr[0].toUpperCase();
//        console.log("tempArr: " + tempArr.join(''))
        return tempArr.join('')
    });
//    console.log("typeof(results): " + typeof(results))
//    console.log("results.length: " + results.length)
    return results;
}

function normalize(arr) {
    var results = arr.map(function(ele, index) {
        return ele[0].toUpperCase() + ele.substring(1).toLowerCase();
    });
    return results;
}

var r = normalize(['adam', 'LISA', 'barT'])
console.log(r)
console.log(r.toString())
console.log(`normalize: ${r}`)

console.log(`///////////// filter //////////////////`)
var arr = [1,2,4,5,9,10,13,14,15];
var r = arr.filter(function(x) {
    return (x % 2 == 1)
});
console.log(r);

var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function(x){
    return x && x.trim() != '';
});
console.log(r);

arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
var r = arr.filter(function(ele, index, self){
    return self.indexOf(ele) == index;
});
console.log(r);

var arr = [];
for (var i = 0; i < 100; i++) {
    arr[i] = i
}
function isPrime(x) {
    if (x < 2) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

function getPrime(arr) {
    return arr.filter(function(x) {
        return isPrime(x);
    });

}
var r = getPrime(arr);
console.log(r);

console.log(`///////////// sort //////////////////`)
console.log("sort: default by ASCII; modify the array")
var arr = ['Google', 'Apple', 'Microsoft'];
console.log(arr.sort());
var arr = ['Google', 'apple', 'Microsoft'];
console.log(arr.sort());
var arr = [10, 20, 1, 2]
console.log(arr.sort() + " // sort by ASCII");

function increSort(x,y) {
    if (x == y)
        return 0
    return x > y ? 1 : -1;
}
console.log("add self-soft: " + arr.sort(increSort))

var r = arr.sort(function(x,y) {return -increSort(x,y);});
console.log("add self-soft: " + r);

function increSortString(x,y) {
    if (x === y)
        return 0;
    return x.toLowerCase() > y.toLowerCase() ? 1 : -1;
}
var arr = ['Google', 'apple', 'Microsoft'];
console.log("add self-soft: " + arr.sort(increSortString))
console.log("add self-soft: " + arr)    // sort: modify the array

console.log(`///////////// Array: other methods //////////////////`)
console.log("sort: default by ASCII")
var arr = ['Google', 'apple', 'Microsoft'];
console.log(arr.every(function(x){
    return x.length >= 6;
}));
console.log(arr.every(function(x){
    return x.length >= 3;
}));

function findLower(x) {
    return x.toLowerCase() == x;
}
function findUpper(x) {
    return x.toUpperCase() == x;
}
console.log("findLower(): " + arr.find(findLower));
console.log("findUpper(): " + arr.find(findUpper));

console.log("findLower() index: " + arr.findIndex(findLower));
console.log("findUpper() index: " + arr.findIndex(findUpper));

function outputLog(x) {
    console.log(x)
}
var arr = ['Google', 'apple', 'Microsoft'];
console.log("forEach: default 3 parameters (element, index, array)");
arr.forEach(console.log)
console.log("forEach: 1 parameter (element)");
arr.forEach(outputLog)

console.log(`arr.forEach((u,i) => {console.log(u,i)})`)
arr.forEach((u,i) => {console.log(u,i)})
console.log(`arr.forEach(function(u,i){console.log(u,i)})`)
arr.forEach(function(u,i){console.log(u,i)})

console.log('////////////////// closure: return high-order function as a result //////////////////////')
function sum(arr) {
    return arr.reduce(function(x, y) {
        return x + y;
    })
}
console.log("sum(): " + sum([1,2,3,4,5]))

function lazySum(arr) {
    return function() {
        return arr.reduce(function(x, y) {
            return x + y;
        })
    }
}
var f = lazySum([1,2,3,4,5])
console.log("f(): " + f())

function count() {
    var arr = [];
    for (var i =1; i <= 3; i++) {
        arr.push(function() {
            return i * i;
        });
    }
    return arr;
}
var functions = count();
var f0 = functions[0];
var f1 = functions[1];
var f2 = functions[2];
console.log(f0())
console.log(f1())
console.log(f2())

function count2() {
    var arr = [];
    for (var i =1; i <= 3; i++) {
        var iObj = new Object();
        iObj.i = i;
        arr.push(function() {
            return iObj.i * iObj.i;
        });
    }
    return arr;
}
var functions = count2();
var f0 = functions[0];
var f1 = functions[1];
var f2 = functions[2];
console.log(f0())
console.log(f1())
console.log(f2())

console.log("create an anonymous function and execute it to return the internal function")
function count3() {
    var arr = [];
    for (var i =1; i <= 3; i++) {
        arr.push(
            function(x) {
                return function() {
                    return x * x;
                }
            }(i)
        );

    }
    return arr;
}
var functions = count3();
var f0 = functions[0];
var f1 = functions[1];
var f2 = functions[2];
console.log(f0())
console.log(f1())
console.log(f2())

console.log("closure: encapsulate a private variable")
function createCounter(init) {
    var x = init || 0;
    return { // key : value
        inc : function() {
            x++;
            return x;
        }
    }
}

var c1 = createCounter();
console.log(c1.inc());
console.log(c1.inc());
console.log(c1.inc());


var c2 = createCounter(100);
console.log(c2.inc());
console.log(c2.inc());
console.log(c2.inc());

function makePow(n) {
    return function(x) {
        return Math.pow(x, n)
    }
}

var pow2 = makePow(2);
var pow3 = makePow(3);
console.log(pow2(5));
console.log(pow3(5));

console.log("closure: define calculation operation")

var zero = function(f) {
    return function(x) {
        return x;
    }
}

var one = function(f) {
    return function(x) {
//        console.log("f.name: " + f.name)
        return f(x)
    }
}

function add(n, m) {
    return function addReturn(f) {
        return function(x) {
            console.log(`add(n,m): ${x}, ${f.name}, ${m.name}, ${n.name}`);
            return m(f)(n(f)(x));
        }
    }
}

function testOutput(x) {
    console.log("testOutput: " + x);
    return;
}

function testOutputWithReturn(x) {
    console.log("testOutputWithReturn: " + x);
    return "return of testOutputWithReturn: " + x;
}

console.log("closure: test zero")
zero(testOutput)();

console.log("/////////////////// closure: test one")
console.log(one);
console.log(one(testOutput));
console.log(one(testOutput)());
console.log(one(testOutput)(111));
console.log(one(testOutputWithReturn)());
console.log(one(testOutputWithReturn)(111));

console.log("/////////////////// closure: test two")
var two = add(one, one)
console.log("console.log(two(testOutput)());")
console.log(two(testOutput)());

console.log("console.log(two(testOutput)(222));")
console.log(two(testOutput)(222));

console.log("console.log(two(testOutputWithReturn)(222));")
console.log(two(testOutputWithReturn)(222));

console.log("/////////////////// closure: test five")
var five = zero;
for (var i = 0; i < 5; i++) {
    five = add(five, one);
}
five(testOutput)();
five(testOutputWithReturn)(555);


console.log("closure: test two + one")
var three = add(add(one, one), one);
three(testOutput)()
three(testOutputWithReturn)()
three(testOutputWithReturn)(333)

console.log("closure: test one + two")
var three = add(one, add(one, one));
three(testOutput)()
three(testOutputWithReturn)()
three(testOutputWithReturn)(333)


console.log("closure: testFunction")
var testFunction = function(f) {
    return f()
}
console.log(testFunction)
console.log(testFunction(testOutput))
//console.log(testFunction(testOutput)())   // TypeError
//console.log(testFunction(testOutput)("xxx"))

console.log('////////////////// arrow function //////////////////////')
var f = function(x) {
    return x * x;
}
console.log(f(5))

var f = x => x * x;
console.log(f(5))

var f = () => 3.14;
console.log(f(5))

// use brackets for multiple parameters
var f = (x, y) => x * x + y * y;
console.log(f(5, 6))

var f = (x, ...rest) => {
    var i, sum = x;
    for (i = 0; i < rest.length; i++) {
        sum += rest[i]
    }
    return sum;
}
console.log(f(5, 6, 7, 8, 9))

// use brackets when return object
var f = x => ({ foo: x})
console.log(f(5))

/*
箭头函数看上去是匿名函数的一种简写，
但实际上，箭头函数和匿名函数有个明显的区别：
箭头函数内部的this是词法作用域，由上下文确定
*/
console.log("arrow function: different this")
// wrong example
var obj = {
    birth : 1990,
    getAge: function() {
        // 'this' is bound to correct obj
        var b = this.birth;
        console.log("this.birth: " + this.birth)


        var fn = function() {
            // 'this' is bound to window or undefined
            // runtime error: Uncaught TypeError: Cannot read properties of undefined
            console.log("this.birth: " + this.birth)
            return new Date().getFullYear() - this.birth;
        }
        return fn();
    }
}

// will cause error
// console.log("obj.getAge(): " + obj.getAge())

// correct example
var obj = {
    birth : 1990,
    getAge: function() {
        // 'this' is bound to correct obj
        var b = this.birth;
        console.log("this.birth: " + this.birth)


        // use arrow function: 'this' is bound to window or undefined
        var fn = () => new Date().getFullYear() - this.birth;
        return fn();
    }
}

// correct
console.log("obj.getAge(): " + obj.getAge())


console.log("use arrow function to simplify parameters for sort()")
var arr = [10, 20, 1, 2]
arr.sort((x, y) => {
//    if (x === y)
//        return 0;
    return x > y ? 1 : -1;
})

console.log(arr);

console.log('////////////////// Tagged Template Literals //////////////////////')
const email = 'xiaoming@example.com'
const password = 'hello123'
var sqlstrings = undefined
function sql(strings, ...exps){
    sqlstrings = strings
    console.log(`strings: ${strings}`)
    console.log(strings)
    console.log(`SQL: ${strings.join('???')}`)
    console.log(`SQL parameters: ${JSON.stringify(exps)}`)

    /*
    strings是一个长度为3的数组：
    ['SELECT * FROM users WHERE email = ', ' AND password = ', '', raw: Array(3)]
    3个元素：用每一个“${xxx}”作为分隔，自动生成了一个字符串的元素；数组的结尾加上了一个空字符串。
    */
    var result = ""
    for (var i = 0; i < strings.length - 1; i++) {
        result = result + strings[i] + exps[i]
    }
    console.log("result: " + result)

    return {
        name: 'XiaoMing',
        age: 20
    }
}
const result = sql`SELECT * FROM users WHERE email=${email} AND password=${password}`;
console.log(JSON.stringify(result));

console.log('////////////////// generator //////////////////////')
console.log('////////////////// fib generator')
function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}

var f = foo(4)
console.log(f.next())   // {value: 5, done: false}
console.log(f.next())   // {value: 6, done: false}
console.log(f.next())   // {value: 7, done: false}
console.log(f.next())   // {value: undefined, done: true}
console.log(f.next())   // {value: undefined, done: true}

var f = foo(4)
console.log("f: " + f.next())   // f: [object Object]
console.log("f: " + f.next())   // f: [object Object]
console.log("f: " + f.next())   // f: [object Object]
console.log("f: " + f.next())   // f: [object Object]
console.log("f: " + f.next())   // f: [object Object]

var f = foo(4)
console.log("f: " + f.next().value) // f: 5
console.log("f: " + f.next().value) // f: 6
console.log("f: " + f.next().value) // f: 7
console.log("f: " + f.next().value) // f: undefined
console.log("f: " + f.next().value) // f: undefined

var f = foo(4)
console.log("f: " + JSON.stringify(f.next())) //
console.log("f: " + JSON.stringify(f.next())) // done is true; should not call again
console.log("f: " + JSON.stringify(f.next())) // done is true; should not call again
console.log("f: " + JSON.stringify(f.next())) // done is true; should not call again
console.log("f: " + JSON.stringify(f.next())) // done is true; should not call again

console.log('////////////////// fib function: return array')
// normal function
function fibFunction(max) {
    var t;
    var a = 0;
    var b = 1;
    var arr = [0, 1];

//    console.log(max);
    while (arr.length < max) {
        [a, b] = [b, a + b];
        arr.push(b);
//        console.log(arr.length);
    }
    return arr;
}

console.log("fib: " + fibFunction(5)) // (fib: [object Generator]
console.log("fib: " + fibFunction(10)) // (fib: [object Generator]

console.log('////////////////// fib generator: yield or return one by one')
// generator function
function* fib(max) {
    var t;
    var a = 0;
    var b = 1;
    var i = 0;

    while (i < max) {
        yield a;
        [a, b] = [b, a + b];
        i++;
    }
    return "done = true";
}

console.log('f.next()')
var f = fib(5);
console.log(f.next()); // {value: 0, done: false}
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next()); // {value: 3, done: false}
console.log(f.next()); // {value: 'done = true', done: true}
console.log(f.next()); // {value: undefined, done: true}. Question: why sometimes is ""
console.log(JSON.stringify(f.next())); // {"done":true}

console.log('for (var x of fib(5))')
for (var x of fib(5)) {
    console.log(x);
}

console.log('////////////////// counter generator')
function* nextCounter() {
    // local counter; not need a global variable
    var localCounter = 0;
//    console.log("localCounter: " + localCounter);
    while (true) {
        localCounter++;
//        console.log("getCounter.next(): " + localCounter)
        yield localCounter;
    }
    return;
}
var g = nextCounter();
console.log("getCounter.next(): " + g.next().value)
console.log("getCounter.next(): " + g.next().value)
console.log("getCounter.next(): " + g.next().value)

for (var c of g) {  // continue the g function
    console.log("c: " + c)
    if (c >= 6) {
        break;
    }
}

for (var c of nextCounter()) {  // NEW a nextCounter() object
    console.log("c: " + c)
    if (c >= 6) {
        break;
    }
}

for (var c of nextCounter()) {  // NEW a nextCounter() object
    console.log("c: " + c)
    if (c >= 6) {
        break;
    }
}