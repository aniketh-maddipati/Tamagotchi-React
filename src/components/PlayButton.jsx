import React from 'react';

function PlayButton() {
  return (
    <div className="button">
      <style jsx >{`
          button{
            border-style: none;
            width: 60px;
            height: 20px;
            left: 630px;
            bottom: 102px;
            position: absolute;
            z-index: 1;
            transform: rotate(90deg);
            background-color: transparent;
          }
          span{
              background-color: green;
              padding-top: 1px;
              font-size: 15px;
              position: relative;
              z-index: 3;
              width: 60px;
              height: 21px;
              left: -1px;
              top: -1px;
              display: block;
              transform: rotate(-90deg);
              background-color: transparent;
            }
       `}</style>
      <button><span>Play</span></button>
    </div>
  );
}

export default PlayButton;
