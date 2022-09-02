import React from 'react';

export const OldWidget = React.forwardRef((props, ref) => {
    return (
        <div className="widget" style={props.styles} ref={ref}>
            {props.children}
        </div>
    );
});

export const Widget = React.forwardRef((props, ref) => {
    return (
        <div className="widget" style={props.styles} ref={ref}>
        {props.children}
    </div>
    );
});