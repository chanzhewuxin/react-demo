import React from "react";
import PropTypes from 'prop-types';


export const CombineComponent = (props) => {
    return <div>
        <h1>包含组件自定义属性</h1>
        <div style={{ float: 'left' }}>{props.left}</div>
        <div style={{ float: 'rigth' }}>{props.right}</div>

    </div>;
}

export const CombineComponentChild = (props) => {
    return <div>
        <h1>包含组件Child</h1>
        {props.children}
    </div>
}

CombineComponent.defaultProps = {
    left: <span />
}

CombineComponent.PropTypes = {
    left: PropTypes.element,
    right: PropTypes.element
}
