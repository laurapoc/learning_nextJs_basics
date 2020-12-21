import React from "react";

const user = (props) => (
    <div>
        <h1>{props.name}</h1>
        <h2>Age: {props.age}</h2>
        <style jsx>
            {`
                div {
                    border: 1px solid #eee;
                    box-shadow: 0 2px 3px #ccc;
                    padding: 20px;
                    text-align: center;
                }
            `}
        </style>
    </div>
)

export default user;