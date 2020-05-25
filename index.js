import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

export default ({ animation, children }) => {
  const [animate, setAnimation] = useState(animation);
  const [classN, setClass] = useState(`animate__animated animate__${animate}`);
  const CreateAnimation = () => {
    const cl = children.props.className;
      return(
    React.cloneElement(children,{className: `${cl} ${classN}`})
      );
  };
  return CreateAnimation();
};
