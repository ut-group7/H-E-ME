import React from "react";
import "./CSS/ContentContainer.css";

const ContentContainer = (props) => 
    <div className="contentContainer">
    {props.children}
    </div>;

export default ContentContainer;
