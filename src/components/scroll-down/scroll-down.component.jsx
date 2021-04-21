import React from "react";
import styled from "styled-components";

const MyScroll = styled.div`
  position: relative;
  z-index: 1;
  bottom: 1.6em;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: bold;
  text-shadow: 1px 1px #45a29e;
  color: #fff;
  animation: 2s linear 0s infinite normal none running MoveUpDown;

  .turn {
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

const ScrollDown = () => {
  const sym = '>>>';
  return (
    <MyScroll>
      <div className='turn'>
        <a href='#about' style={{textDecoration: 'none'}}> {sym} </a>
      </div>
    </MyScroll>
  );
};

export default ScrollDown;
