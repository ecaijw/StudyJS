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

console.log('////////////////// JS standard objects //////////////////////')
console.log('////////////////// JS standard objects: Date')
console.log('typeof(null): ' + typeof(null))
console.log('typeof(undefined): ' + typeof(undefined))
console.log('typeof([]): ' + typeof([]))
console.log('typeof({}): ' + typeof({}))

console.log('typeof(123): ' + typeof(123))
console.log('typeof(Number(123)): ' + typeof(Number(123)))
console.log('typeof(new Number(123)): ' + typeof(new Number(123)))
console.log('new Number(123) == 123: ' + (new Number(123) == 123))
console.log('new Number(123) === 123: ' + (new Number(123) === 123))


console.log('typeof(true): ' + typeof(true))
console.log('typeof(Boolean(true)): ' + typeof(Boolean(true)))
console.log('typeof(new Boolean(true)): ' + typeof(new Boolean(true)))
console.log('new Boolean(true) == true: ' + (new Boolean(true) == true))
console.log('new Boolean(true) === true: ' + (new Boolean(true) === true))

console.log('new String("string") == "string": ' + (new String("string") == "string"))
console.log('new String("string") === "string": ' + (new String("string") === "string"))

// 总结一下，有这么几条规则需要遵守： https://www.liaoxuefeng.com/wiki/1022910821149312/1023021722631296
// 通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；
// typeof操作符可以判断出number、boolean、string、function和undefined；
// 判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
var arr = [1,2,3]
console.log('typeof(arr): ' + typeof(arr))
console.log('Array.isArray(arr): ' + Array.isArray(arr))
console.log('(typeof(window.arr) === "undefined"): ' + (typeof(window.arr) === 'undefined'))
console.log('(typeof(window.arrNotExist) === "undefined"): ' + (typeof(window.arrNotExist) === 'undefined'))

//console.log('123.toString(): ' + 123.toString())  // invalid or unexpected token
// see: https://www.jianshu.com/p/71d8d56f60b0
console.log('123..toString(): ' + 123..toString())  // "123." is a float
console.log('123   .toString(): ' + 123 .toString())  // "123." is a float

var d = new Date(2015, 5, 19, 20, 15, 30, 123);
console.log("new Date(2015, 5, 19, 20, 15, 30, 123) (5 is June): " + d)
var now = new Date()
var nowMilliSecond = now.getTime()
// 它表示从1970年1月1日零时整的GMT时区开始的那一刻，到现在的毫秒数
console.log("now: " + nowMilliSecond)
console.log("(new Date(nowMilliSecond)): " + (new Date(nowMilliSecond)))
console.log("locale string: " + d.toLocaleString())
console.log("UTC string: " + d.toUTCString())

console.log('////////////////// JS standard objects: RegExp')
function testReg(re, exp) {
    var ret = re.test(exp);
    console.log(`re: [${re}]  exp: [${exp}]  ret:[${ret}]`);
    return ret
}

var re = /^\d{3}\-\d{3,8}$/;
var re = new RegExp('^\\d{3}\\-\\d{3,8}$');
testReg(re, "010-12345")
testReg(re, "010-12")
testReg(re, "010-123456789")
testReg(re, "010-1234x")

console.log('RegExp: split strings')
function testRegSplitString(re, str) {
    var ret = str.split(re)
    console.log(`re: [${re}]  str: [${str}]  ret:[${ret}]`);
    console.log(JSON.stringify(ret));
    return ret;
}
var re = /[\,\s+]+/
testRegSplitString(re, 'a,b  c,  d')
testRegSplitString(re, 'abc,  d')
testRegSplitString(re, 'abc,,,  d')

testRegSplitString(/\s+/, 'a,b  c,  d')

console.log('RegExp: group with ()')
function testRegExec(re, exp) {
    var ret = re.exec(exp)
    console.log(`re: [${re}]  exp: [${exp}]  ret:[${ret}]  [lastIndex: ${re.lastIndex}]`);
    return ret;
}
re = /^(\d{3})\s*-\s*(\d{3,8})$/
testRegExec(re, "010-234567")
testRegExec(re, "010-12345")
testRegExec(re, "010 - 12345")
testRegExec(re, "010-12")
testRegExec(re, "010-123456789")
testRegExec(re, "010-1234x")


console.log('RegExp: match email (TODO)')
re = /([0-9a-zA-Z\_]+)\@([0-9a-zA-Z\_]+)([.[0-9a-zA-Z\_]+]+)/;
re = /([0-9a-zA-Z\_]+)\@([0-9a-zA-Z\_]+)\.([0-9a-zA-Z\_]+)/;
testRegExec(re, 'someone@gmail.com')

re = /([0-9a-zA-Z\_]+)\@([0-9a-zA-Z\_]+)([\.[0-9a-zA-Z\_]+]*)/;
testRegExec(re, 'someone@gmail.com')

re = /([0-9a-zA-Z\_]+)\@([0-9a-zA-Z\_]+)[\.[0-9a-zA-Z\_]+]*/;
testRegExec(re, 'someone@gmail.com.cn')


var re = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;
testRegExec(re, '19:05:30') // ['19:05:30', '19', '05', '30']

console.log('RegExp: greedy/lazy match')
// 贪婪匹配 greedy match
re = /^(\d+)(0*)$/
testRegExec(re, "1230")
testRegExec(re, "123000")

re = /^(\d+?)(0*)$/     // add ? for lazy match
testRegExec(re, "1230")
testRegExec(re, "123000")

re = /^(\d+?)(0*)(0)$/
testRegExec(re, "1230")
testRegExec(re, "123000")

re = /^(\d+?)(0*?)(0*)$/
testRegExec(re, "1230")
testRegExec(re, "123000")

console.log('RegExp: global search')
// 正则表达式还可以指定i标志，表示忽略大小写，m标志，表示执行多行匹配。
var exp = 'JavaScript, VBScript, JScript and ECMAScript';
re = /[a-zA-Z]+Script/g
testRegExec(re, exp) // ret:[JavaScript]  [lastIndex: 10]
testRegExec(re, exp) // ret:[VBScript]  [lastIndex: 20]
testRegExec(re, exp)
testRegExec(re, exp)
testRegExec(re, exp) // return null, lastIndex: 0
testRegExec(re, exp) // reset and search again

console.log('////////////////// JSON (JavaScript Object Notation) //////////////////////')
var person = {
    name : 'Snake',
    age : 20,
    tags : ['js', 'web', 'mobile'],
    code : null
}

// last parameter: output line by line
var s = JSON.stringify(person, null, '    ')
console.log(s)

// only output specified properties
var s = JSON.stringify(person, ['name', 'age'], '    ')
console.log(s)

console.log('stringify(person, parseValue, "")')
function parseValue(key, value) {
    console.log(`key: ${key}  value: ${value}`)
    if (key === '') {
        console.log("all values:  " + JSON.stringify(value))
    }
    if ((typeof value) === 'string') {
        return value.toUpperCase();
    }
    else if ((typeof value) === 'number') {
        return value * 10;
    }
    return value;
}

var s = JSON.stringify(person, parseValue, '')
console.log(s)

console.log('personWiithtoJSON: return data that should be used by stringify')
var personWiithtoJSON = {
    name : 'Snake',
    age : 20,
    tags : ['js', 'web', 'mobile'],
    code : null,
    toJSON : function() {
        return {
            'newName' : 'new name for json',
            'newAge' : 123456789
        }
    }
}

var s = JSON.stringify(personWiithtoJSON, parseValue, '')
console.log(s)

console.log('JSON deserialization')
var jsonObj = JSON.parse('123')
console.log(JSON.stringify(jsonObj))
var jsonObj = JSON.parse('true')
console.log(JSON.stringify(jsonObj))
var jsonObj = JSON.parse('[1,2,3,true]')
console.log(JSON.stringify(jsonObj))
var jsonObj = JSON.parse(`{"newName" : "new name for json"}`)
console.log(JSON.stringify(jsonObj))
var jsonObj = JSON.parse(`{"newName" : "new name for json", "age": 123}`)
console.log(JSON.stringify(jsonObj))

console.log('following is JQuery example, will try later')
//var url = 'https://api.openweathermap.org/data/2.5/forecast?q=Beijing,cn&appid=800f49846586c3ba6e7052cfc89af16c'
//$.getJSON(url, function(data) {
//    var info = {
//        city : data.city.name,
//        weather : data.list[0].weather[0].main,
//        time: data.list[0].dt_txt
//    }
//    console.log(info)
//})

console.log('////////////////// JS OOP, prototype. duck typing //////////////////////')
var Student = {
    name: 'robot',
    height : '1.6',
    run: function() {
        console.log(this.name + ' is running...')
    }
}

var xiaoming  = {
    name: 'xiaoming'
}
console.log('xiaoming.__proto__  = Student;')
xiaoming.__proto__  = Student;

console.log(JSON.stringify(xiaoming))
console.log(xiaoming)
xiaoming.run()
console.log(xiaoming.height)

console.log('xiaoming.__proto__  = Bird;')
var Bird = {
    fly: function() {
        console.log(this.name + " is flying...")
    }
}
// only for demo purpose; NOT call __proto__ to change prototype
xiaoming.__proto__ = Bird
console.log(xiaoming)
//xiaoming.run() // studyJS.js:1385 Uncaught TypeError: xiaoming.run is not a function
xiaoming.fly()
console.log(xiaoming.height) // undefined

function createStudent(name) {
    var ret = Object.create(Student);
    ret.name = name;
    return ret;
}
xiaoming = createStudent('xiaoming object')
xiaoming.run()
console.log('xiaoming.__proto__ === Student: ' + (xiaoming.__proto__ === Student))

console.log('////////////////// JS OOP: create an object //////////////////////')
console.log('constructor')
function StudentCtor(name) {
    this.name = name
    this.hello = function() {
        console.log('hello: ' + this.name)
    }
}
// if Student is already defined as an object
// Uncaught TypeError: Student is not a constructor
// var xiaoming = new Student('xiaoming')

/*
xiaoming ↘
xiaohong -→ Student.prototype ----> Object.prototype ----> null
xiaojun  ↗
*/
console.log("prototype chain: xiaoming ----> Student.prototype ----> Object.prototype ----> null")
var xiaoming = new StudentCtor('xiaoming')
console.log(xiaoming.name)
xiaoming.hello()
console.log("xiaoming.constructor: " + xiaoming.constructor)
console.log("xiaoming.__proto__ === StudentCtor.prototype: " + (xiaoming.__proto__ === StudentCtor.prototype))
console.log("xiaoming.__proto__.__proto__ === Object.prototype: " + (xiaoming.__proto__.__proto__ === Object.prototype))
console.log("xiaoming.__proto__.__proto__.__proto === null: " + (xiaoming.__proto__.__proto__.__proto === null))
console.log("StudentCtor.__proto__ === Function.prototype: " + (StudentCtor.__proto__ === Function.prototype))
console.log("StudentCtor.__proto__.__proto__ === Object.prototype: " + (StudentCtor.__proto__.__proto__ === Object.prototype))
console.log("StudentCtor.__proto__.__proto__.__proto__ === null: " + (StudentCtor.__proto__.__proto__.__proto__ === null))
console.log("Function.prototype.__proto__ === Object.prototype: " + (Function.prototype.__proto__ === Object.prototype))
console.log("Object.prototype.__proto__ === null: " + (Object.prototype.__proto__ === null))

console.log("xiaoming.constructor === StudentCtor.prototype.constructor: " + (xiaoming.constructor === StudentCtor.prototype.constructor))
console.log("Object.getPrototypeOf(xiaoming) === StudentCtor.prototype: " + (Object.getPrototypeOf(xiaoming) === StudentCtor.prototype))
console.log("xiaoming instanceof StudentCtor: " + (xiaoming instanceof StudentCtor))
console.log("xiaoming instanceof Object: " + (xiaoming instanceof Object))


console.log("xiaoming.prototype: " + xiaoming.prototype)
console.log("xiaoming.__proto__: " + JSON.stringify(xiaoming.__proto__))

console.log("hello() is property of xiaoming or xiaohong. xiaoming.hello === xiaohong.hello: false")
var xiaoming = new StudentCtor('xiaoming')
var xiaohong = new StudentCtor('xiaohong')
console.log("xiaoming.hello === xiaohong.hello: " + (xiaoming.hello === xiaohong.hello))

console.log("hello() is property of StudentWithHello. xiaoming.hello === xiaohong.hello: true.")
function StudentWithHello(name) {
    this.name = name;
}
StudentWithHello.prototype.hello = function() {
    console.log("hello: " + this.name)
}
var xiaoming = new StudentWithHello('xiaoming')
xiaoming.hello()
var xiaohong = new StudentWithHello('xiaohong')
xiaohong.hello()
console.log("xiaoming.hello === xiaohong.hello: " + (xiaoming.hello === xiaohong.hello))

console.log("Creator Pattern")
function StudentObj(props) {
    this.name = props.name || 'unknown'; // default value
    this.grade = props.grade || 1; // default value
}

StudentObj.prototype.hello = function() {
    console.log(`hello: ${this.name} ${this.grade}`)
}

function createStudentObj(props) {
    return new StudentObj(props || {});  // default value: {}
}
var unknown = createStudentObj();
var xiaoming = createStudentObj({name:'xiaoming'});
var xiaohong = createStudentObj({name:'xiaohong', grade:99});
unknown.hello()
xiaoming.hello()
xiaohong.hello()
console.log("xiaoming.hello === xiaohong.hello: " + (xiaoming.hello === xiaohong.hello))

console.log("practice: Cat")
function Cat(name) {
    this.name = name
}
Cat.prototype.say = function() {
    console.log(`Hello, ${this.name}!`)
    return `Hello, ${this.name}!`
}

function createCat(name) {
    return new Cat(name);
}
var kitty = createCat('kitty')
kitty.say()

console.log('////////////////// JS OOP: prototype inheritance //////////////////////')
// https://www.liaoxuefeng.com/wiki/1022910821149312/1023021997355072
function StudentBase(props) {
    this.name = props.name || 'Unnamed'
}

StudentBase.prototype.hello = function() {
    console.log(`Hello, ${this.name}!`)
}

/*
before:
new PrimaryStudent() ----> PrimaryStudent.prototype ----> Object.prototype ----> null
after:
new PrimaryStudent() ----> PrimaryStudent.prototype ----> Student.prototype ----> Object.prototype ----> null
*/
function PrimaryStudent(props) {
    StudentBase.call(this, props)
    this.grade = props.grade || 1;
}

var ps = new PrimaryStudent({name : 'ps'})
console.log("Before: ps.hello(), Uncaught TypeError: ps.hello is not a function")

// create a middle object to implement inheritance of StudentBase
function EmptyFunction() {}
EmptyFunction.prototype = StudentBase.prototype

PrimaryStudent.prototype = new EmptyFunction()
PrimaryStudent.prototype.constructor = PrimaryStudent

PrimaryStudent.prototype.getGrade  = function() {
    return this.grade
}
var xiaoming = new PrimaryStudent({
    name : 'xiaoming',
    grade : 222
})
console.log("START: prototype chain of xiaoming [__proto__]")
console.log("xiaoming.__proto__ === PrimaryStudent.prototype: " + (xiaoming.__proto__ === PrimaryStudent.prototype))
console.log("xiaoming.__proto__.__proto__ === StudentBase.prototype: " + (xiaoming.__proto__.__proto__ === StudentBase.prototype))
console.log("xiaoming.__proto__.__proto__.__proto__ === Object.prototype: " + (xiaoming.__proto__.__proto__.__proto__ === Object.prototype))
console.log("xiaoming.__proto__.__proto__.__proto__.__proto__ === null: " + (xiaoming.__proto__.__proto__.__proto__.__proto__ === null))
console.log("END: prototype chain of xiaoming")

console.log("START: prototype chain of xiaoming [prototype.__proto__]")
console.log("xiaoming.prototype === undefined: " + (xiaoming.prototype === undefined))
console.log("xiaoming.__proto__ === PrimaryStudent.prototype: " + (xiaoming.prototype === undefined))
console.log("PrimaryStudent.prototype.__proto__ === StudentBase.prototype: " + (PrimaryStudent.prototype.__proto__ === StudentBase.prototype))
console.log("StudentBase.prototype.__proto__ === Object.prototype: " + (StudentBase.prototype.__proto__ === Object.prototype))
console.log("StudentBase.prototype.__proto__ === null: " + (Object.prototype.__proto__ === null))
console.log("END: prototype chain of xiaoming")

console.log("START: prototype chain of xiaoming [constructor]")
console.log("xiaoming.constructor === xiaoming.__proto__.constructor: " + (xiaoming.constructor === xiaoming.__proto__.constructor))
console.log("PrimaryStudent.constructor === Function.constructor: " + (PrimaryStudent.constructor === Function.constructor))
console.log("StudentBase.constructor === Function.constructor: " + (StudentBase.constructor === Function.constructor))
console.log("Object.constructor === Function: " + (Object.constructor === Function))
console.log("Function.constructor === Function: " + (Function.constructor === Function))
console.log("Function.constructor === Function.__proto__.constructor: " + (Function.constructor === Function.__proto__.constructor))
console.log("END: prototype chain of xiaoming")


console.log("START: prototype of xiaoming related objects [__proto__.constructor]")
console.log("xiaoming.__proto__.constructor === PrimaryStudent: " + (xiaoming.__proto__.constructor === PrimaryStudent))
console.log("PrimaryStudent.__proto__.constructor === Function: " + (PrimaryStudent.__proto__.constructor === Function))
console.log("StudentBase.__proto__.constructor === Function: " + (StudentBase.__proto__.constructor === Function))
console.log("Object.__proto__.constructor === Function: " + (Object.__proto__.constructor === Function))
console.log("Function.__proto__.constructor === Function: " + (Function.__proto__.constructor === Function))
console.log("Object.prototype.constructor === Object: " + (Object.prototype.constructor === Object))
console.log("END: prototype of xiaoming related objects ")

console.log("START: prototype of xiaoming related objects [__proto__]")
console.log("PrimaryStudent.__proto__ === Function.prototype: " + (PrimaryStudent.__proto__ === Function.prototype))
console.log("StudentBase.__proto__ === Function.prototype: " + (StudentBase.__proto__ === Function.prototype))
console.log("Object.__proto__ === Function.prototype: " + (Object.__proto__ === Function.prototype))
console.log("Function.__proto__ === Function.prototype: " + (Function.__proto__ === Function.prototype))
console.log("Function.prototype.__proto__ === Object.prototype: " + (Function.prototype.__proto__ === Object.prototype))
console.log("Object.prototype.__proto__ === null: " + (Object.prototype.__proto__ === null))
console.log("END: prototype of xiaoming related objects ")


console.log("START: Function and Object")
//console.log("xiaoming instanceof xiaoming: " + (xiaoming instanceof xiaoming))
console.log("xiaoming instanceof xiaoming: Uncaught TypeError: Right-hand side of 'instanceof' is not callable")
console.log("xiaoming instanceof PrimaryStudent: " + (xiaoming instanceof PrimaryStudent))
console.log("xiaoming instanceof StudentBase: " + (xiaoming instanceof StudentBase))
console.log("xiaoming instanceof Function: " + (xiaoming instanceof Function))
console.log("xiaoming instanceof Object: " + (xiaoming instanceof Object))

console.log("StudentBase instanceof StudentBase: " + (StudentBase instanceof StudentBase))
console.log("StudentBase instanceof Function: " + (StudentBase instanceof Function))
console.log("StudentBase instanceof Object: " + (StudentBase instanceof Object))
console.log("Object instanceof Function: " + (Object instanceof Function))
console.log("Function instanceof Object: " + (Function instanceof Object))
console.log("Function.__proto__ === Function.prototype: " + (Function.__proto__ === Function.prototype))
console.log("Function.prototype.__proto__ === Object.prototype: " + (Function.prototype.__proto__ === Object.prototype))
console.log("Object.__proto__ === Function.prototype: " + (Object.__proto__ === Function.prototype))
console.log("Object.prototype.__proto__ === null: " + (Object.prototype.__proto__ === null))
console.log("Function.__proto__.__proto__.constructor === Object: " + (Function.__proto__.__proto__.constructor === Object))
console.log("Object.__proto__.__proto__.constructor === Object: " + (Object.__proto__.__proto__.constructor === Object))
console.log("END: Function and Object")

function TestFunction () {}
var objTestFunction = new TestFunction();
console.log("objTestFunction.__proto__ === TestFunction.prototype: " + (objTestFunction.__proto__ === TestFunction.prototype))
console.log("objTestFunction instanceof TestFunction: " + (objTestFunction instanceof TestFunction))
console.log("objTestFunction instanceof Object: " + (objTestFunction instanceof Object))
console.log("objTestFunction.__proto__.__proto__ === Object.prototype: " + (objTestFunction.__proto__.__proto__ === Object.prototype))
TestFunction.prototype = StudentBase.prototype
console.log("TestFunction.prototype = StudentBase.prototype")
console.log("objTestFunction.__proto__ === TestFunction.prototype: " + (objTestFunction.__proto__ === TestFunction.prototype))
console.log("objTestFunction instanceof TestFunction: " + (objTestFunction instanceof TestFunction))
console.log("objTestFunction instanceof Object: " + (objTestFunction instanceof Object))
console.log("objTestFunction.__proto__.__proto__ === Object.prototype: " + (objTestFunction.__proto__.__proto__ === Object.prototype))

function Animal(name) {
    this.name = name
}

Animal.prototype.say = function() {
    console.log("Animal say(): " + this.name)
}

Animal.prototype.isAnimal = function() {
    console.log("I am an animal: " + this.name)
}

function Dog(name) {
    Animal.call(this, name)
}
Dog.prototype.say = function() {
    console.log("Dog say(): " + this.name)
}

function inherits(Child, Parent) {
    var F = function() {}
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
}

// it can work, but not recommend to explicitly use __proto__
function inherits2(Child, Parent) {
    Child.prototype.__proto__ = Parent.prototype
}

inherits2(Dog, Animal)

var dog = new Dog('dog')
dog.say()
dog.isAnimal()
console.log("dog instanceof Dog: " + (dog instanceof Dog))
console.log("dog instanceof Animal: " + (dog instanceof Animal))