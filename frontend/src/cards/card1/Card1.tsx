import React from "react";
import "./styles.css"; // Assuming your styles are in styles.css

const Card1: React.FC = () => {
  return (
    <div className="happy-valentines">
      <p className="cite">base designed by @lenadesign5043</p>
      <div className="to-from">
        <p className="to">To:</p>
        <p className="from">From:</p>
      </div>
      <div className="valentines-day-card">
        <div className="clouds"></div>
        <div className="hearts">
          <div className="heartOne">
            <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
          <div className="heartTwo">
            <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
          <div className="heartThree">
            <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
          <div className="heartFour">
            <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
          <div className="heartFive">
            <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
        </div>
        <div className="text">
          Happy Valentine's
          <br />
          Day!
        </div>
      </div>
      <p className="hover">- hover over the text -</p>
    </div>
  );
};

export default Card1;