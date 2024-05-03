// Primitives(기본형): number, string, boolean
// More complex types: array, objects
// Function types, parameters

// Primitives

let age: number; // 타입은 소문자로 작성하기
age = 12.1;

let userName: string = 'Max';

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[]; // 문자열 배열 타입
hobbies = ['Sports', 'Cooking'];

// let person : any; 어떤값이든 가능하다는 뜻이지만 웬만하면 타입 명시하기.
let person: {
  name: string;
  age: number;
};

person = {
  name: 'Max',
  age: 32,
};

// person{ -> Error
//   isEmployee: true
// }

// 객체 배열 지정
let people: {
  name: string;
  age: number;
}[];

// Type interence (타입 추론)

let course = 'React - The Complete Guide';

// course = 12341; 명시적인 타입을 지정하지 않아도 에러가 뜸
// 타입 추론 방식으로 코드를 작성하는 것이 권장되는 방식 -> 불필요하게 타입을 지정하지 않아도 되기 때문

// 하지만, 하나의 변수 안에 문자열과 숫자를 함께 저장해야한다면? (타입추론을 하는 경우가 아닐 경우임)
// -> 유니톤 타입을 사용하자. (: 타입을 정의할 때 한 개 이상의 타입을 사용할 수 있다)
let course2: string | number = 'React - The Complete Guide';
course2 = 1234;

let userName2: string | string[] = 'Jay'; // 문자열과 문자열 배열 2가지를 설정할 수 있음

// Type Aliases 타입을 중복해서 사용하고 싶다면 Type Aliases를 사용한다
// type으로 선언해주기
type Person = {
  name: string;
  age: number;
};

let person2: Person;

person2 = {
  name: 'Jay',
  age: 27,
};

// 객체 배열 지정
let people2: Person[];

// Functions & types
// 반환값의 타입도 명시적으로 지정할 수 있지만, 타입스크립트가 알아서 추론하기에 굳이 할 필요는 없음.
// function add(a: number, b: number): number {
function add(a: number, b: number) {
  return a + b;
}

// 반환값이 없는 (return을 하지 않는)함수는 void 타입을 가지며, undefined를 리턴한다.
function print(value: any) {
  console.log(value);
}

// Generis
// 유영성, 타입 안정성 측면에 도움이 된다
function insertAtBeginning<T>(arr: T[], val: T) {
  const newArr = [val, ...arr];
  return newArr;
}
const demoArr = [1, 2, 3];
const updatedArr = insertAtBeginning(demoArr, -1); // [-1, 1, 2, 3];
const stringArr = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArr[0].split('');
