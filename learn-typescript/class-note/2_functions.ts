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
sumAdd(10);

// 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {
  // 물음표는 쓸지 안쓸지 모호할 때
}
log('hello world');
log('hello ts', 'abc');
