import React from 'react';
import FeedButton from './FeedButton';
import MedsButton from './MedsButton';
import PlayButton from './PlayButton';

function Buttons() {
  return (
    <div className="buttonsDiv">
      <style jsx >{`
          .buttonsDiv{
            width: 500px;
          }
       `}</style>
      <FeedButton />
      <MedsButton />
      <PlayButton />
    </div>
  );
}

export default Buttons;