var p1 = 1;
var p2 = 1;
console.log(p1, p2, p1 === p2); // 1, 1, true
var p3 = p1;
console.log(p1, p1===p3); // 1, true
var p3 = 2;
console.log(p1, p3, p1===p3); // 1, 2, false


var o1 = {lastName : 'lee'}; 
var o2 = {lastName : 'lee'};
console.log(o1,o2,o1===o2); // { lastName : 'lee' }, { lastName : 'lee' }, false
console.log(o1,o2,o1==o2); // { lastName : 'lee' }, { lastName : 'lee' }, false
var o3 = o1;
console.log(o1,o3, o1===o3); // { lastName : 'lee' }, { lastName : 'lee' }, true
console.log(o1.lastName, o3.lastName, o1.lastName === o3.lastName); // lee, lee, true
o3.lastName = 'han';
console.log(o1.lastName, o3.lastName, o1.lastName === o3.lastName); // han, han, true
console.log(o1,o3, o1===o3); // { lastName : 'han' }, { lastName : 'han' }, true


console.log('------')
var o1 = {firtName : 'han'};
var o2 = Object.assign({},o1);  // Object.assign은 파라미터들의 속성을 모두 갖는 객체를 만든다.
                                // 파라미터 두 개중 하나가 빈 객체라면? 객체를 복사하여 새로운 객체로 만든 상황이다.
console.log(o1, o2, o1 === o2); // {firstName : 'han'}, {firstName : 'han'} false

var o3 = Object.assign([1,2], o1);// 배열을 assign 하면?
console.log(o3); // [ 1, 2, firstName : 'han'] 배열의 요소로 바뀜.



const Immutable = ( obj ) => {
    if (typeof obj === 'object') {
        console.log('This is object variable');  
    } else {
        console.log('This is primitive variable');
    }
    return obj;
}

const displayTypeOfValue = (obj) => {
    console.log(typeof obj);
}


const var1 = 1;
const var2 = '1';
const var3 = [1,2];
const var4 = {a : 1, b : 2};
const var5 = { "1" : "2", "123" : "432"};
const var6 = [{ "1" : "1"},{ "2": "2"}];
const var7 = true;
const var8 = null;
const var9 = undefined;
let var10;

// displayTypeOfValue(var1); // number
// displayTypeOfValue(var2); // string
// displayTypeOfValue(var3); // object
// displayTypeOfValue(var4); // object
// displayTypeOfValue(var5); // object
// displayTypeOfValue(var6); // object
// displayTypeOfValue(var7); // object
// displayTypeOfValue(var8); // object
// displayTypeOfValue(var9); // undefined
// displayTypeOfValue(var10);// undefiend

Immutable(var1); // primitive variable
Immutable(var2); // primitive variable
Immutable(var3); // object variable
Immutable(var4); // object variable
Immutable(var5); // object variable
Immutable(var6); // object variable
Immutable(var7); // primitive variable
Immutable(var8); // object variable
Immutable(var9); // primitive variable
Immutable(var10); // primitive variable


//Nested Object (overrided Object ) Issue
const a = { x : 1, y : [1,2]};
a.x = 2;
console.log (a);
let X = a.x;
console.log(a.x, X, a.x === X); // 2, 2, true
X=5;
console.log(a.x, X, a.x === X); // 2, 5, false
console.log('------');

let Y = a.y;
console.log(a.y, Y, a.y === Y); // [1,2], [1,2], true
Y.push(3);
console.log(a.y, Y, a.y === Y); // [1,2,3], [1,2,3], true
console.log('------');

// Solution
let Z = a.y.concat();
console.log(a.y, Z, a.y === Z); // [1,2,3], [1,2,3] false
Z.push(4);
console.log(a.y, Z, a.y === Z); // [1,2,3], [1,2,3,4] false
console.log('------');

const const_x = { x:1};
const_x.x = 2;
console.log(const_x.x);