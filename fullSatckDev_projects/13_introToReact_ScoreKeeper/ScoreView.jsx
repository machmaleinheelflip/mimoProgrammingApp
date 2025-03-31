import React from "react";
import "./ScoreView.css";

const ScoreView = (props) => {

let leadingClass;

if (props.leading) {
  leadingClass ="score-view-wrapper-leading-true";
} else {
  leadingClass ="score-view-wrapper-leading-false";
}

  return (
    <div className={leadingClass}>
      <h2>{props.teamName}: {props.score}</h2>
    </div>
  );
};

export default ScoreView;
