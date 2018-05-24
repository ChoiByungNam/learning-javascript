# chapter-3
리터럴과 변수, 상수, 데이터 타입

## 3.1 변수와 상수
* 변수는 '변하는 수'라는 뜻으로 값이 수시로 변하는 수
`let currentTempC = 22;`
* 변수 선언시 초기값을 할당하지 않으면 undefined
`let targetTempC; // undefined`
* 상수는 '항상 같은 수'라는 뜻으로 변수와 반대되는 개념
`const roomTempC = 21.5;`

## 3.2 변수와 상수 중 어떤 것을 써야 할까요?
* 될 수 있으면 변수보다 상수를 사용
* 데이터 값이 아무 때나 막 바뀌는 것보다는 고정된 값이 이해하기 쉬움
* 우선 상수를 먼저 생각하고, 그 상수의 값이 바뀌는게 자연스럽다고 생각된다면, 언제든지 변수로 변경

## 3.3 식별자 이름
* 변수와 상수, 함수를 식별자라고 함
* 식별자 규칙
> 식별자는 반드시 글자나 달러 기호($), 밑줄(_)로 시작
> 식별자에는 글자와 숫자, 달러 기호, 밑줄만 사용 가능
> 파이나 시그마 같은 유니코드 문자 사용 가능
> 예약어는 식별자로 사용 불가 (if, for 등...)
* 자바스크립트에서는 달러 기호를 특수 문자로 사용하지 않는다.

## 3.4 리터럴
* 리터럴은 코드 상에서 데이터를 표현하는 방식
* 리터럴의 선호 이유는 간단하게 객체를 생성 및 할당, 가독성, 속도, 재정의(Overriden)에 따른 예방
```
let obj1 = { // 객체 생성 및 프로퍼티 값을 한번에 할당
  a: 1,
  b: 2
};

let obj2 = new Object(); // 객체를 생성하고, 그 다음 프로퍼티 값을 하나씩 추가
obj2.a = 1;
obj2.b = 2;
```
* 리터럴과 식별자의 차이 (자바스크립트는 따옴표를 통해 구별)
```
let room1 = 'conference_room_a' // conference_room_a = 리터럴, room1 = 변수를 가리키는 식별자
let aaa = 2; // 숫자
let bbb = "2"; // 문자
let bbb = '2'; // 문자
let ccc = true; // 불린
let ddd = [1, 2, 3, 4]; // 배열
let eee = {p1: 2, p2: ‘2’}; // 객체
let fff = null; // null
let ggg; // undefined
let hhh = function() {alert('씨티티디');} // 함수
```

## 3.5 원시 타입과 객체
* 자바스크립트의 값은 원시(기본)타입과 참조타입(객체, 배열, 함수)
* 원시 타입은 불변(불변성이라는 말이 변수의 값이 바뀔 수 없다는 뜻은 아님)
> 숫자
> 문자열
> 불리언
> null
> undefinded
> 심볼
```
let str = 'hello'; // str은 불변의 값 'hello'로 초기화
str = 'world'; // 다시 새로운 불변의 값 'world'를 할당
```
* 객체는 여러가지 형태의 값을 가질 수 있음
* 유연한 성질 때문에 데이터 타입을 만들때 많이 사용
* 자바스크립트의 내장 객체 타입 종류
1. Array
2. Date
3. RegExp
4. Map과 WeakMap
5. Set과 WeakSet
6. Number (원시 타입 중 숫자와 대응)
7. String (원시 타입 중 문자와 대응)
8. Boolean (원시 타입 중 불리언과 대응)

## 3.6 숫자
* 자바스크립트는 10진수, 2진수, 8진수, 16진수의 네 가지 숫자형 리터럴을 인식
```
const small = Number.EPSILON; // 1에 더했을 때 1과 구분되는 결과를 만들 수 있는 가장 작은 값. (IE 미지원)
const bigInt = Number.MAX_SAFE_INTEGER; //표현할 수 있는 가장 큰 정수 (IE 미지원)
const max = Number.MAX_VALUE; //표현할 수 있는 가장 큰 숫자
const minInt= Number.MIN_SAFE_INTEGER; //표현할 수 있는 가장 작은 정수 (IE 미지원)
const min = Number.MIN_VALUE; //표현할 수 있는 가장 작은 숫자
const nInf= Number.NEGATIVE_INFINITY; //-Infinity
const nan= Number.NaN; //Nan
const inf= Number.POSITIVE_INFINITY; //Infinity
```

## 3.7 문자열
* 자바스크립트 문자열은 유니코드(Unicode) 텍스트
* 자바스크립트 문자열 리터럴은 작은따옴표, 큰따옴표, 백틱을 사용
* 자바스크립트는 직접 입력할 수 없는 문자를 만들기 위해 문자열에 포함시킬 수 있는 이스케이프 시퀀스 제공

## 3.7.1 이스케이프
* URI로 데이터를 전달하기 위해서 문자열을 인코딩
* 통합 자원 식별자(Uniform Resource Identifier, URI)는 인터넷에 있는 자원을 나타내는 유일한 주소

## 3.8 특수문자
```
\n // 줄 바꿈(새 줄)
\t // 탭
\r // 커서를 해당 줄 처음으로 이동
\' // 작은따옴표 표시
\" // 큰따옴표 표시
\` // 백틱(ES6)
\$ // 달러 기호(ES6)
\\ // 백슬래시 표시
```

## 3.8.1 템플릿 문자열
* **문자열 병합**을 통해 변수나 상수를 문자열 안에 사용 가능
```
let currentTemp = 19.5;
const message = 'The current temperature is ' + currentTemp + '\u00b0c'; // "The current temperature is 19.5°c" (00b0는 온도를 나타내는 유니코드 코드 포인트)
```
* **문자열 템플릿(문자열 채우기)**은 문자열의 정해진 위치에 값을 채워 넣는 간편한 방법. 백틱을 사용(ES6)
```
let currentTemp = 19.5;
const message = `The current temperature is ${currentTemp}\u00b0C`;
```

## 3.8.2 여러 줄 문자열
```
// 공백이 생김
const multiline = 'line1\n\
line2';

const multiline = `line1
line2`; // 백틱(es6)

// 공백이 생기지 않음
const multiline = 'line1\n' +
  'line2\n' +
  'line3';

const multiline = 'Current temperature:\n' +
  `\t${currentTemp}\u00b0c\n` +
  "Dont't worry...the heat is on!"; // 백틱(es6)
```

## 3.8.3 숫자와 문자열
* 숫자가 필요할 땐 따옴표 없이 숫자 사용
* 문자열이 필요할 땐 문자열 사용

## 3.9 불리언
* 불리언은 ture와 false 두 가지 값밖에 없는 데이터 타입

## 3.10 심볼(ES6)
* 고유하고 수정 불가능한 데이터 타입 (라이브러리, 프레임워크를 만들지 않는 이상 사용할 일이 거의 없을듯)
* Symbol의 타입은 symbol
* Symbol은 값을 외부로 노출시키지 않음. 이러한 특성 떄문에 Symbol을 출력하려고 하거나 valueOf() 메소드를 통해 값을 출력하려고 하면 empty object가 반환
```
const red = Symbol('The color of a sunset!');
const orange = Symbol('The color of a sunset!');
red === orange // false; Symbol() 이 호출될 때마다 새로운 Symbol을 생성하기 떄문. 이 때 Symbol은 생성한 scope에 Symbol 값이 설정됨
```
* 아까 생성한 Symbol을 다시 사용할 니즈가 있으면 key를 등록하고, key를 통해 접근
```
let red = Symbol.for('The color of a sunset!');
let orange = Symbol.for('The color of a sunset!');
console.log(red.toString()); //Symbol(The color of a sunset!)
console.log(orange.toString()); //Symbol(The color of a sunset!)
console.log(Symbol.keyFor(red)); //The color of a sunset!
console.log(Symbol.keyFor(orange)); //The color of a sunset!
console.log(red == orange); //true
console.log(red === orange); //true
```
* https://jaeyeophan.github.io/2017/04/20/ES6-8-Symbol/ 참고

## 3.11 null과 undefined
* null과 undefined는 모두 자바스크립트에서 '값이 없음'을 나타냄 (데이터 타입이자, 값을 나타냄)
* 기본적으로 값이 할당되지 않은 변수는 undefined 타입이며, undefined 타입은 변수 자체의 값 또한 undefined
* null 타입 변수의 경우는 명시적으로 값이 비어있음을 나타내는데 사용, 다시 말해서 아무것도 참조하고 있지 않다라는 의미가 담겨 있으므로 주로 객체를 담을 변수를 초기화할 때 많이 사용
```
let currentTemp; // 변수만 선언해도 undefined를 할당
let targetTemp = null; // null 타입 변수 생성
```

## 3.12 객체
* 객체는 현실의 사물을 프로그래밍에 반영한 것
```
let myInfo = { // 객체 리터럴
  firstName: 'Byeongnam', // firstName: 'Byeong', lastName: 'Choi' 속성이고, 속성은 키(Key)와 값(Value)의 관계로 이루어짐. (키는 문자열과 심볼만 가능하고, 따옴표는 없어도 됨)
  lastName: 'Choi'
}
myInfo.firstName; // Byeongnam
myInfo['firstName']; // Byeongnam
```

## 3.14 배열
* 배열은 [] 대괄호를 감싸서 나타내고, 객체 리터럴처럼 안에는 무엇이든지 다 들어갈 수 있음 (배열 안에 배열, 객체, 함수가 들어가도 됨)
* 배열 안에 들어간 것들을 요소(item)이라고 부르고, 객체의 속성처럼 쉼표로 구분
* 배열의 키는 0, 1, 2, ,3, ... 순서로 주어짐
```
let myInfo = ['Byeongnam', 'Choi']; // 배열 리터럴
myInfo[0] // Byeongnam
myInfo[1] // Choi
```

## 3.16 날짜
* 자바스크립트의 날짜와 시간은 내장된 Date 객체에서 담당
```
const now = new Date();
now; // Fri May 18 2018 15:06:00 GMT+0900 (KST)
const halloween = new Date(2016, 9, 31); // 월은 0에서 시작
```
* 특정 날짜와 시간에 해당하는 객체를 만들 때는 다음과 같이 함
`const halloweenParty =  new Date(2016, 9, 31, 19, 0); // Mon Oct 31 2016 19:00:00 GMT+0900 (KST) 19:00 = 7:00 pm`
* 날짜 객체를 만들면 다음과 같이 각 부분을 가져올 수 있음
```
halloweenParty.getFullYear(); // 2016
halloweenParty.getMonth(); // 9
halloweenParty.getDate(); // 31
halloweenParty.getDay(); // 1 (월요일 0은 일요일)
halloweenParty.getHours(); // 19
halloweenParty.getMinutes(); // 0
halloweenParty.getSeconds(); // 0
halloweenParty.getMilliseconds(); // 0
```

## 3.17 정규표현식
* 정규식은 문자열에 포함된 문자 조합을 찾기 위해 사용되는 패턴 (코드를 간략하게 만들 수 있으나, 가독성이 떨어질 수 있음)
```
const re = /ad+c/; // 정규식 패턴이 계속 지속될 경우
const re = new RegExp('ab+c'); // 정규식 패턴이 변경되는 경우 (생성자 함수를 사용하여 동적으로 정규식을 만듬)
```

## 3.18 맵과 셋
* 맵은 객체와 마찬가지로 키와 값을 연결하지만, 특정 상황에서 객체보다 유리한 부분이 있음
* 셋은 배열과 비슷하지만 중복이 허용되지 않음

## 3.19.1 숫자로 바꾸기
* 비트 연산을 활용하는 방법 (소수점이 있는 숫자는 모두 정수로 변환된다는 점을 주의)
```
let num = "111" >>> 0; //Bitwise Bitwise Right Shift
let num = "111" >> 0; //Bitwise Right Shift
let num = "111" << 0; //Bitwise Left Shift
let num = 0 | "111"; //Bitwise OR
let num = 0 ^ "111"; //Bitwise XOR
let num = ~~"111"; //Bitwise NOT NOT
```
* 함수를 활용하는 방법
```
let num = parseInt('111'); // 소수점을 포함하는 숫자나 문자열도 정수로 변환된다는 점을 주의
let num = parseFloat('111');
let num = Number('111'); // 형변환을 위해 제공되는 함수 (추천)
```
* 그 밖의 방법
```
let num = +"111";
let num = 1 * "111";
let num = "111" / 1;
```

## 3.19.2 문자열로 변환
* 빈 문자열 활용하는 방법
```
let num = 10;
let str = num + ' 숫자가 아니다.'; // 빈 문자열도 가능
```
* 함수 활용하는 방법
```
let str = num.toString();
let str = String(num);
```

## 3.19.3 불리언으로 변환
* http://codingnuri.com/javascript-tutorial/javascript-boolean.html 참고