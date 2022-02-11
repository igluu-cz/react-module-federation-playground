import React from 'react';
import css from './tool-tip.css';
const styleObj = {};

export default function ToolTip(props) {
  return (
    <div className="tool-tip" data-content={props.message}>
      {props.content}
    </div>
  );
}
