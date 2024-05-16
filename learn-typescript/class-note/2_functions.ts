// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수의 타입을 정의하는 방식
function sumAdd(a: number, b: number): number {
  return a + b;
}

sum(10, 20, 30, 40); // 함수의 파라미터를 제한하는 특성
