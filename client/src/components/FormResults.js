import React from "react";

const FormResults = (props) => 
    <div className="card">
    <div className="img-container">
    <ul>
        <li>
        {props.name} 
        </li>
    </ul>
    
    </div>
    <div className="content">
        <p>
            {/* aisle here */}
        {props.aisleId}
        </p>
    </div>
    </div>

    export default FormResults;