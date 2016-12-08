import React from 'react';
import ReactDOM from 'react-dom';
import App from './lifecycle_04_08/App';

const rootElement=document.getElementById('root');
ReactDOM.render(<App/>, rootElement);


//...webpack hot replacement를 적용하면 페이지 전체 리로딩하지 않고
//...변경된 부분만 새로 로딩하게 함.
/*...local state가 유지되지 않아서 주석처리함.
if(module.hot){
  module.hot.accept();
}
*/
