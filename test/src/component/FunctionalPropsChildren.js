import { Fragment } from "react";

function FunctionalPropsChildren(props) {
    return (
        <>
        <h2>
            det här är också komponent som hämtar props, i detta fallet 2 st: {props.first}
            {props.last}
        </h2>
        <p>{props.children}</p>
        </>
    )
}

export default FunctionalPropsChildren;
