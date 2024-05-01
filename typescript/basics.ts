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
