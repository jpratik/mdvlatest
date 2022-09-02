import React from 'react';

const Page = ({ children }) => (
    <div
        style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        {children}
    </div>
);

export default Page;
