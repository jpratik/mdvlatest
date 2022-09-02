import React from 'react';

const Overlay = ({ children }) => (
    <div
        style={{
            opacity: 1,
            bottom: '0px',
            left: '0px',
            right: '0px',
            top: '0px',
            position: 'fixed',
        }}
    >
        {children}
    </div>
);

export default Overlay;