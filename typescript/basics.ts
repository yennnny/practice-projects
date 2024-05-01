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
