# React_Hooks
### hooks 사용 이유
hooks를 사용하지 않고 클래스로 컴포넌트를 구성하게 되면 render등을 사용하기 때문에 소스의 길이가 길어지게 된다. hooks는 state를 사용할 수 있다.
- https://ehddnjs8989.medium.com/react-hooks-%EC%82%AC%EC%9A%A9%EC%9D%B4%EC%9C%A0-ce03c66a53b0
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
useState를 호출하는 것은 무엇을 하는 걸까요? “state 변수”를 선언할 수 있습니다. 위에 선언한 변수는 count라고 부르지만 banana처럼 아무 이름으로 지어도 됩니다. useState는 클래스 컴포넌트의 this.state가 제공하는 기능과 똑같습니다. 일반적으로 일반 변수는 함수가 끝날 때 사라지지만, state 변수는 React에 의해 사라지지 않습니다.

useState의 인자로 무엇을 넘겨주어야 할까요? useState()Hook의 인자로 넘겨주는 값은 state의 초기 값입니다. 함수 컴포넌트의 state는 클래스와 달리 객체일 필요는 없고, 숫자 타입과 문자 타입을 가질 수 있습니다. 위의 예시는 사용자가 버튼을 얼마나 많이 클릭했는지 알기를 원하므로 0을 해당 state의 초기 값으로 선언했습니다. (2개의 다른 변수를 저장하기를 원한다면 useState()를 두 번 호출해야 합니다.)
- use effect