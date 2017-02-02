import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement=document.getElementById('root');
ReactDOM.render(<App/>, rootElement);


//...webpack hot replacement를 적용하면 페이지 전체 리로딩하지 않고
//...변경된 부분만 새로 로딩하게 함.
/*...local state가 유지되지 않아서 주석처리함.
App.js 에 constructor 를 생성하고 난 후,
그러나, 이렇게 하면 local state가 사라지게 됨.
처음에 버튼을 클릭하면 "Hi, JoyWins"라고 출력되지만, 이 중 소스의 일부를 고치면 바로 "Hi, "라고만
결과가 나와서 local state가 유지되지 않고 사라짐.

if(module.hot){
  module.hot.accept();
}
*/
