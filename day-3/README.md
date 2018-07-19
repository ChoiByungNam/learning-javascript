# # chapter-7
스코프(Scope)
변수 혹은 함수가 가지는 범위를 의미합니다. 스코프는 변수와 상수, 매개변수(데이터)가 언제 어디서 정의되는지 결정합니다.
함수 매개변수가 함수 바디 안에서만 존재하는 것도 스코프의 예 입니다.
```
function funcA(x) {
  return x + 3;
}
funcA(5); // 8
x; // x is not defined.
```
> x의 스코프가 함수 funcA 이다! 라고 말할 수 있습니다.

## 7.1 스코프와 존재
* 가시성 - 스코프는 프로그램의 현재 실행중인 부분, 실행 컨텍스트에서 현재 보이고 접근 할 수 있는 식별자를 말합니다.
* 존재 - 그 식별자가 메모리가 할당된 무언가를 가리키고 있다는 뜻입니다.
> 스코프에 존재하지 않는다고 해도 자바스크립트는 메모리를 바로 회수하지 않습니다. 
```
function funcA() {
	// funcA Scope
	let hello = 'World'

	return function() {
		console.log(hello);
	}
}

function funcC() {
	funcB();
}
```

> **funcC를 부르는 타이밍에 funcA내부 스코프에 있는 hello라는 변수는 존재할까요?**
정답은 '존재한다' 입니다.
funcC는 타이밍에 가시적인 스코프상엔 hello에 접근할 수 없지만 funcB가 hello를 참조하고 있기 때문에 hello는 활성 상태로 자바스크립트의 가비지 컬렉션에 적용되지 않습니다.

## 7.2 정적 스코프와 동적 스코프
보통 렉시컬 스코프(Lexical Scope)와 다이나믹 스코프(Dynamic Scope)로 불리기도 하는 정적 스코프와 동적 스코프에 대해 알아보겠습니다.
* 정적 스코프는 소스코드가 작성된 그 문맥에서 결정됩니다.
* 동적 스코프는 프로그램의 런타임 도중의 실행 컨텍스트나 호출 컨텍스트에 의해 결정됩니다.
> 자바스크립트는 정적 스코프입니다. 소스코드를 보고 문맥에서 변수의 스코프를 확인할 수 있습니다.
```
const x = 3;

// 함수는 선언 당시의 스코프를 참조합니다.
function f() {
  console.log(x); // 3
  console.log(y); // y is not defined
}

{
  // 새로운 블록 스코프
  const y = 5;
  f();
}
```
> 위의 예제를 보면 함수는 선언 당시의 스코프를 참조한다는 것을 알 수 있습니다.

**만약 위의 코드가 동적 스코프였다면 ?**
다음 예제는 에러가 나지 않았을 것입니다.
동적 스코프는 호출 컨텍스트에 영역을 받음으로써,
f()를 호출하는 타이밍에 y는 선언이 되있었기 때문입니다.

## 7.3 전역 스코프, 지역 스코프
* 전역 스코프(Global Scope)는 스코프의 최상위에 있는 스코프를 말합니다.
스코프는 계층적이며 트리의 맨 위에는 바탕이 되는 무엇인가 있어야 합니다.
즉, 프로그램을 시작할 때 암시적으로 주어지는 스코프가 필요합니다.
이 스코프를 전역 스코프 라고 합니다. (window 객체)
> 전역 스코프에 몇 가지가 존재하는 건 피할 수 없습니다. 하지만 대부분의 스코프들이 전역에 의존하는 것은 피해야 합니다.
```
// 전역 스코프 의존 예제
let name = 'Irena';
let age = 25;

function greet() {
  console.log(`hello, ${name}!`);
}
function getBirthYear() {
  return new Date().getFullYear() - age;
}

// 단일 객체를 이용한 전역스코프 의존방지
let user = {
  name: 'Irena',
  age: 25
}

function greet() {
  console.log(`hello, ${user.name}!`);
}
function getBirthYear() {
  return new Date().getFullYear() - user.age;
}

// 함수를 이용한 전역스코프 의존방지
function greet(user) {
  console.log(`hello, ${user.name}!`);
}
function getBirthYear(user) {
  return new Date().getFullYear() - user.age;
}
```

* 특정 부분에서만 사용할 수 있는 변수는 지역 스코프에 있다고 할 수 있습니다.

## 7.4 블록 스코프
코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없습니다.
(ES6부터 제공하는 'let', 'const' 키워드는 블록 레벨 스코프 변수를 가집니다.)
```
console.log('before block');
{
  console.log('inside block');
  const x = 3;
  console.log(x); // 3
}
console.log(`outside block; x = ${x}`); // x is not defined
```

## 7.5 변수 숨기기
* let을 이용하는 방법 - let을 이용하여 b를 외부로부터 숨겼습니다. let을 사용하지 않고 선언할 경우 전역으로 선언되기 때문입니다.
```
function f1(a) {
  function f2(a) {
    return a - 1;
  }

  let b;
  b = a + f2(a);
  console.log(b);
}
f1(2); // 3
```
* 같은 이름을 선언하는 방법 - 같은 이름을 선언하여 외부의 x에 접근하지 못하도록 하였습니다. 스코프 체인 성질을 이용하여 정의되고 있는 함수의 변수 스코프에서부터 먼저 검색되기 때문에 외부의 x에 접근하기 전에 내부 블록에 x를 선언 후 정의함으로써 외부 블록의 x에 접근을 못하게 합니다.
```
{
  let x = 'blue';
  console.log(x); // blue
  {
    let x = 'red';
    console.log(x); // red
  }
  console.log(x); // blue
}
```
* 모듈 패턴 사용 - 모듈화를 하여 변수에 접근가능한 함수만을 제공하여 직접적으로 변수에는 접근하지 못하게 하였습니다.
```
function examModule() {
  let something = 'cool',
    another = [1, 2, 3];

  function doingSome() {
    console.log(something);
  }

  function doingAnother() {
    console.log(another);
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}
```

## 7.6 함수, 클로저, 정적 스코프
클로저는 함수와 함수가 선언된 어휘적 환경의 조합..?
```
function makeFunc() {
  let name = 'Mozilla'; // name은 makeFunc 에 의해 생성된 지역변수다
  function displayName() { // displayName() 은 내부 함수이며, 클로저다
    console.log(name); // 부모 함수에서 선언된 변수를 사용한다
  }
  return displayName;
}

let myFunc = makeFunc();
myFunc(); // Mozilla
```

```
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

let add5 = makeAdder(5),
  add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

## 7.7 즉시 호출하는 함수 표현식
함수 표현식을 사용하면 즉시 호출하는 함수 표현식(IIFE)이란 것을 만들 수 있습니다. IIFE는 함수를 선언하고 즉시 실행합니다.
IIFE의 장점은 내부에 있는 것들이 모두 자신만의 스코프를 가지지만, IIFE 자체는 함수이므로 그 스코프 밖으로 무언가를 내보낼 수 있다는 점입니다.
```
const message = (function() {
    const secret = 'I m scret!';
    return `The secret is ${secret.length} characters long.`
})();
console.log(message);
```
> 변수 secret은 IIFE의 스코프 안에서 안전하게 보호되면 외부에서 접근할 수 없습니다. IIFE는 함수이므로 무엇이든 반환할 수 있습니다.

함수를 ()로 묶어주면 호출되는 즉시 임명함수를 실행합니다.
이것은 자바스크립트에서 새로운 스코프를 생성하고 정보를 은닉하는데 중요한 역할을 할 수 있습니다.

## 7.8 함수 스코프와 호이스팅
함수 스코프는 함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없다. 즉, 함수 내부에서 선언한 변수는 지역 변수이며 함수 외부에서 선언한 변수는 모두 전역 변수이다.
호이스팅은 말 그대로 끌어올려진다는 의미를 가진다. 스코프 안의 어디에서든 변수 선언은 최상위에서 선언된 것과 동등하다.
```
// 호이스팅 예제1
let x = 'outer scope';

(function() {
  console.log(x); // x is not defined
  let x = 'inner scope';
}());

// 호이스팅 예제1 자바스크립트가 해석한 코드
let x = 'outer scope';

(function() {
  let x;

  console.log(x); // x is not defined
  x = 'inner scope';
}());

// 호이스팅 예제2
foo = 'bar';
let foo;

// 호이스팅 예제2 자바스크립트가 해석한 코드
let foo;
foo = 'bar';
```

## 7.9 함수 호이스팅
let로 선언된 변수와 마찬가지로, 함수 선언도 스코프 맨 위로 끌어올려집니다. (변수에 할당한 함수 표현식은 끌어올려지지 않습니다.)
```
f(); // 'f'
function f() {
  console.log('f');
}

f(); // f is not defined
let f = function() {
  console.log('f');
}
```

## 7.10 사각지대
'let으로 선언하는 변수는 선언하기 전까지 존재하지 않는다'는 직관적 개념을 잘 나타낸 표현입니다.
> typeof 연산자는 변수가 선언 됐는지 알아볼때 널리 쓰이고, 존재를 확인하는 안전한 방법으로 알려져있습니다.
```
// 사각지대 해결법(안전하게 변수 사용여부 확인하기)
if (typeof x === 'undefined') {
  console.log("x doesn't exist or is undefined");
} else {
  // x 사용가능 스코프
}

let x = 5; // let은 반복 선언이 불가능 -> ERROR
```

## 7.11 스트릭트 모드
암시적 전역변수(implicit global)란, var로 변수를 선언하는 것을 잊으면 전역변수를 참조하려고 하고, 그런 전역변수가 없을 시 스스로 만드는 것입니다.
그런, 암시적 전역변수를 선언하지 않는 모드를 스트릭트 모드라고 합니다.
```
// 스트릭트 모드를 다른 스크립트엔 적용하고 싶지 않을때
(function() {
  'use strict';

  // 코드를 전부 이 안에 작성
  // 이 코드는 스트릭트 모드로 동작
  // 이 코드와 함께 동작하는 다른 스크립트는 스트릭트 모드에 영향을 받지 않음
})();
```
> 스트릭트 모드는 대부분의 경우에 바람직합니다. 그래서 권장합니다.