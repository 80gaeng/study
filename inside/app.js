/*var nullVar = null;

console.log(typeof nullVar);*/

//var foo = new Object(); -잘 안씀.
/*var foo = {}; //많이들 씀.

function Moon(){
} // 많이들 씀. 첫글자는 거의 대부분 m 대문자 씀. 생성자 함수로 쓸거니까.*/
//var foo = new Moon(); - 잘 안씀

/*var foo = {};

foo.name = 'foo'; //property 속성

foo.age = function() {

}
*/

var foo = {
	name : 'foo',
	age : 30,
	major : 'computer science'
};

var a;
for (a in foo){
	console.log(a, foo[a]);
}
/*for (var a in){
	name : 'foo',
	age : 30,
	major : 'computer science'
} 요래 써도 됨. */
/*for (var a in foo){
	console.log(a);
}*/
















