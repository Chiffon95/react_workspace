import { Fragment } from 'react';
import ReactDOM from 'react-dom'; 

const scissors = "가위"
const rock = "바위"
const paper = "보"

ReactDOM.render(
  <>
  <Fragment>
    <p>안녕</p>
    <p>리액트</p>
  </Fragment>
  {/* 불필요한 div 태그를 줄일 수 있다. (<></> --- 축약형) */}

  <h1 id="title">{scissors+rock+paper}</h1>
    <button class="hand"> {scissors}</button>
    <button class="hand"> {rock}</button>
    <button class="hand"> {paper}</button>
 </>, document.getElementById('root'));