# React_Hooks
### hooks 사용 이유
hooks를 사용하지 않고 클래스로 컴포넌트를 구성하게 되면 render등을 사용하기 때문에 소스의 길이가 길어지게 된다. hooks는 state를 사용할 수 있다.<br>
1) 컴포넌트 사이에서 상태와 관련된 로직을 재 사용하기 어렵다.<br>
2) 복잡한 컴포넌트들은 이해하기 어렵다.<br>
3) Class는 사람과 기계를 혼동 시킨다.<br>
4) 개념적으로 React는 컴포넌트는 항상 함수에 더 가깝다.
- React - Functional Component의 장점, Hook

- 리엑트 라이프 사이클<br>
React 컴포넌트는 생명 주기가 있습니다. 생애 주기 또는 라이프사이클(Life cycle)이라고도 많이 표현합니다. 컴포넌트가 실행되거나 업데이트되거나 제거될 때, 특정한 이벤트들이 발생합니다.
<br>
  - 클래스 컴포넌트 라이프사이클
  https://www.zerocho.com/category/React/post/579b5ec26958781500ed9955
  - 함수 컴포넌트 라이프사이클<br>
  class 컴포넌트 때는 라이프사이클이 컴포넌트에 중심이 맞춰져 있었습니다.<br> 클래스가 마운트 되려할 때 : componentWillMount
  <br> 마운트 되고 나서 : componentDidMount <br> 업데이트 되었을 때 : componentDidUpdate <br> 언마운트 : componentWillUnmount
  https://www.zerocho.com/category/React/post/5f9a6ef507be1d0004347305
- use state<br>

- useState의 인자
 useState()Hook :state의 초기 값
  함수 컴포넌트의 state는 클래스와 달리 객체일 필요는 없고, 숫자 타입과 문자 타입을 가질 수 있음
- use effect