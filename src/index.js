import { Fragment } from 'react';
import ReactDOM from 'react-dom'; 

ReactDOM.render(
  <>
  <Fragment>
    <p>안녕</p>
    <p>리액트</p>
  </Fragment>
  {/* 불필요한 div 태그를 줄일 수 있다. (<></> --- 축약형) */}

  <h1 id="title">가위바위보</h1>
    <button class="hand"> 가위</button>
    <button class="hand"> 바위</button>
    <button class="hand"> 보</button>
 </>, document.getElementById('root'));