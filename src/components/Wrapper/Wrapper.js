import React from "react";
import "./Style.css";

function Wrapper(props) {
  return <div className="container-fluid wrapper">{props.children}</div>;
}

export default Wrapper;
